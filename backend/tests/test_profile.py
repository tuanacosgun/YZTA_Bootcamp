def test_get_profile_creates_default(client):
    res = client.get("/api/profile")
    assert res.status_code == 200
    data = res.json()
    assert data["id"] == 1
    assert data["ad"] == ""


def test_update_profile(client):
    payload = {"ad": "Tuana Y.", "boy": 170, "kilo": 62, "beden": "M", "olcu": "omuz geniş"}
    res = client.put("/api/profile", json=payload)
    assert res.status_code == 200
    data = res.json()
    assert data["ad"] == "Tuana Y."
    assert data["boy"] == 170
    assert data["beden"] == "M"

    # Kalıcı mı diye tekrar oku
    res2 = client.get("/api/profile")
    assert res2.json()["ad"] == "Tuana Y."


def test_invalid_beden_rejected(client):
    res = client.put("/api/profile", json={"ad": "X", "beden": "GECERSIZ"})
    assert res.status_code == 422
