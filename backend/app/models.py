from sqlalchemy import Column, Integer, String

from .database import Base


class Profile(Base):
    """Profile.jsx formuna karşılık gelir. Tek kullanıcılı MVP: sabit id=1 satırı."""

    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    ad = Column(String(120), nullable=False, default="")
    boy = Column(Integer, nullable=True)  # cm
    kilo = Column(Integer, nullable=True)  # kg
    beden = Column(String(10), nullable=True)  # XS, S, M, L, XL, XXL
    olcu = Column(String(255), nullable=True)  # vücut ölçüsü notu (opsiyonel)


class WardrobeItem(Base):
    """Wardrobe.jsx'teki kıyafet kartlarına karşılık gelir."""

    __tablename__ = "wardrobe_items"

    id = Column(Integer, primary_key=True, index=True)
    ad = Column(String(120), nullable=False)
    kategori = Column(String(50), nullable=False)
    renk = Column(String(50), nullable=True)
    kaynak = Column(String(500), nullable=True)  # ürün linki (opsiyonel)
    image = Column(String(500), nullable=True)  # görsel URL'i
