from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/api/wardrobe", tags=["wardrobe"])


@router.get("", response_model=List[schemas.WardrobeItemOut])
def list_items(db: Session = Depends(get_db)):
    return db.query(models.WardrobeItem).order_by(models.WardrobeItem.id).all()


@router.post("", response_model=schemas.WardrobeItemOut, status_code=201)
def create_item(payload: schemas.WardrobeItemCreate, db: Session = Depends(get_db)):
    item = models.WardrobeItem(**payload.model_dump())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item


@router.delete("/{item_id}", status_code=204)
def delete_item(item_id: int, db: Session = Depends(get_db)):
    item = db.query(models.WardrobeItem).filter(models.WardrobeItem.id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Kıyafet bulunamadı")
    db.delete(item)
    db.commit()
    return None
