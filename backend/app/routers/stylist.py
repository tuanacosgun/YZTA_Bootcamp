from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/api/stylist", tags=["stylist"])

# Basit kural-tabanlı öneri havuzu. Gerçek bir öneri modeli (Sprint 2 araştırması)
# entegre edildiğinde bu fonksiyonun içi değiştirilecek, endpoint sözleşmesi aynı kalacak.
_POOL = {
    "Üst Giyim": ["Beyaz Oversize Tişört", "Gri Hoodie", "Mavi Kazak"],
    "Alt Giyim": ["Mavi Mom Jean", "Siyah Jean"],
    "Ayakkabı": ["Beyaz Sneaker", "Siyah Bot"],
    "Aksesuar": ["Kahverengi Çanta"],
}


def _pick(kategori: str, exclude: str | None = None) -> str:
    options = [o for o in _POOL.get(kategori, ["-"]) if o != exclude] or _POOL.get(kategori, ["-"])
    return options[0]


@router.post("/generate", response_model=schemas.StylistResult)
def generate_outfit(payload: schemas.StylistRequest, db: Session = Depends(get_db)):
    anchor = None
    if payload.clothing_id is not None:
        anchor = (
            db.query(models.WardrobeItem)
            .filter(models.WardrobeItem.id == payload.clothing_id)
            .first()
        )
        if not anchor:
            raise HTTPException(status_code=404, detail="Kıyafet bulunamadı")

    top = anchor.ad if anchor and anchor.kategori == "Üst Giyim" else _pick("Üst Giyim")
    bottom = anchor.ad if anchor and anchor.kategori == "Alt Giyim" else _pick("Alt Giyim")
    shoes = _pick("Ayakkabı")
    accessory = _pick("Aksesuar")

    reason = f"{payload.occasion} için {payload.style.lower()} tarzında örnek kombin oluşturuldu."
    if anchor:
        reason = f"{anchor.ad} ana parça alınarak, {payload.occasion} için {payload.style.lower()} tarzında kombin oluşturuldu."

    return schemas.StylistResult(
        top=top,
        bottom=bottom,
        shoes=shoes,
        accessory=accessory,
        reason=reason,
    )
