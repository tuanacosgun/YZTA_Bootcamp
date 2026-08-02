from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/api/profile", tags=["profile"])

SINGLE_PROFILE_ID = 1  # Auth yok; MVP tek kullanıcı varsayımıyla sabit satır.


def _get_or_create(db: Session) -> models.Profile:
    profile = db.query(models.Profile).filter(models.Profile.id == SINGLE_PROFILE_ID).first()
    if not profile:
        profile = models.Profile(id=SINGLE_PROFILE_ID, ad="")
        db.add(profile)
        db.commit()
        db.refresh(profile)
    return profile


@router.get("", response_model=schemas.ProfileOut)
def get_profile(db: Session = Depends(get_db)):
    return _get_or_create(db)


@router.put("", response_model=schemas.ProfileOut)
def update_profile(payload: schemas.ProfileUpdate, db: Session = Depends(get_db)):
    profile = _get_or_create(db)
    for field, value in payload.model_dump().items():
        setattr(profile, field, value)
    db.commit()
    db.refresh(profile)
    return profile
