from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, Field

BEDENLER = Literal["XS", "S", "M", "L", "XL", "XXL"]
KATEGORILER = Literal["Üst Giyim", "Alt Giyim", "Dış Giyim", "Ayakkabı", "Aksesuar"]


# ---- Profile ----
class ProfileBase(BaseModel):
    ad: str = ""
    boy: Optional[int] = Field(default=None, ge=50, le=260)
    kilo: Optional[int] = Field(default=None, ge=20, le=400)
    beden: Optional[BEDENLER] = None
    olcu: Optional[str] = None


class ProfileUpdate(ProfileBase):
    pass


class ProfileOut(ProfileBase):
    model_config = ConfigDict(from_attributes=True)
    id: int


# ---- Wardrobe ----
class WardrobeItemCreate(BaseModel):
    ad: str = Field(min_length=1, max_length=120)
    kategori: KATEGORILER
    renk: Optional[str] = None
    kaynak: Optional[str] = None
    image: Optional[str] = None


class WardrobeItemOut(WardrobeItemCreate):
    model_config = ConfigDict(from_attributes=True)
    id: int


# ---- AI Stylist ----
class StylistRequest(BaseModel):
    clothing_id: Optional[int] = None  # Wardrobe.jsx'ten seçilen ana parça (opsiyonel)
    occasion: str = "Günlük"  # Etkinlik: Günlük / Üniversite / İş / Özel Davet
    style: str = "Casual"  # Stil: Casual / Sportif / Klasik / Smart Casual


class StylistResult(BaseModel):
    top: str
    bottom: str
    shoes: str
    accessory: str
    reason: str
