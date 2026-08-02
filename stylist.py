from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models
from .database import Base, engine
from .routers import profile, stylist, wardrobe

# Dev ortamında tabloları otomatik oluştur. Prod'da Alembic migration önerilir.
Base.metadata.create_all(bind=engine)

app = FastAPI(title="MirrorAI API", version="0.1.0")

# Vite dev server (frontend) için CORS.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile.router)
app.include_router(wardrobe.router)
app.include_router(stylist.router)


@app.get("/api/health", tags=["health"])
def health():
    return {"status": "ok"}
