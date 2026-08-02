# MirrorAI Backend (FastAPI + MySQL)

`frontend/src` klasöründeki React sayfaları (Profile, Wardrobe, AIStylist) baz alınarak
hazırlanmış bir API. Frontend şu an hiçbir yerde fetch/axios çağırmıyor — tüm veriler
local state'te mock olarak tutuluyor. Bu backend, o mock verilerin yerini alacak
şekilde tasarlandı.

## Varsayımlar (README'de/kodda auth/login olmadığı için)
- **Kimlik doğrulama yok.** Uygulama tek kullanıcılı MVP gibi davranıyor.
  Profile tablosunda sabit `id=1` satırı kullanılıyor.
- **TryOn (Virtual Try-On)** sayfası hâlâ "araştırma aşaması" placeholder'ı
  (ResearchPlaceholder component'i) olduğu için somut bir veri modeli yok;
  bu backend'de karşılığı yok. Yöntem netleşince (Computer Vision / link
  meta verisi) ayrı bir endpoint eklenir.
- **AI Stylist** endpoint'i kural tabanlı basit bir öneri motoru içeriyor
  (frontend'deki `handleGenerate` mock'unun sunucu tarafı karşılığı).
  Gerçek bir ML modeli entegre edilene kadar sözleşme (request/response şekli)
  sabit kalacak şekilde tasarlandı.

## Kurulum

```bash
cd mirrorai-backend
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env             # kendi MySQL bilgilerinle güncelle
```

MySQL'de veritabanını oluştur:

```sql
CREATE DATABASE mirrorai_db CHARACTER SET utf8mb4;
CREATE USER 'mirrorai_user'@'localhost' IDENTIFIED BY 'mirrorai_pass';
GRANT ALL PRIVILEGES ON mirrorai_db.* TO 'mirrorai_user'@'localhost';
```

## Çalıştırma

```bash
uvicorn app.main:app --reload --port 8000
```

Swagger UI: http://localhost:8000/docs
Health check: http://localhost:8000/api/health

## Testler

Testler gerçek MySQL'e dokunmaz — her test kendi izole bellek-içi SQLite'ında çalışır
(`tests/conftest.py`), böylece `pip install` dışında bir şeye ihtiyaç duymadan çalıştırılabilir:

```bash
pytest -v
```

11 test: Profile (3), Wardrobe (5), AI Stylist (3) — CRUD akışları, validasyon
hataları (422/404) ve kalıcılık (yaz → oku) senaryolarını kapsıyor.

## Endpoint özeti

| Method | Path                     | Açıklama                                  | Frontend karşılığı |
|--------|--------------------------|--------------------------------------------|---------------------|
| GET    | /api/profile             | Profili getir (yoksa boş oluşturur)        | Profile.jsx         |
| PUT    | /api/profile             | Profili güncelle                           | Profile.jsx "Kaydet"|
| GET    | /api/wardrobe            | Tüm kıyafetleri listele                    | Wardrobe.jsx        |
| POST   | /api/wardrobe            | Yeni kıyafet ekle                          | Wardrobe.jsx "Ekle" |
| DELETE | /api/wardrobe/{id}       | Kıyafeti sil                               | Wardrobe.jsx "×"    |
| POST   | /api/stylist/generate    | Kombin önerisi üret                        | AIStylist.jsx       |

## Frontend'e bağlama

Frontend şu an mock veri kullanıyor; gerçek API'ye bağlamak için örnek:

```jsx
// Wardrobe.jsx içinde useState yerine:
useEffect(() => {
  fetch("http://localhost:8000/api/wardrobe")
    .then((r) => r.json())
    .then(setItems);
}, []);
```

CORS, `app/main.py` içinde Vite'ın varsayılan portu (`http://localhost:5173`) için
zaten açık.

## Sınırlamalar / notlar
- Sandbox ortamında dışa ağ erişimi kapalı olduğu için testler burada
  çalıştırılamadı; sözdizimi (`py_compile`) ve mantık elle doğrulandı.
  Kendi makinende `pip install -r requirements.txt && pytest -v` ile
  çalıştırıp gerçek sonucu görebilirsin.
- Görsel yükleme (`image`) alanı şu an sadece URL string'i olarak tutuluyor;
  Wardrobe.jsx'teki local `import ... from assets/clothing/*.webp` yapısı
  dosya upload'a çevrilecekse ayrı bir `/api/wardrobe/upload` endpoint'i
  ve statik dosya sunumu gerekir.
