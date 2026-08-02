def test_generate_without_anchor(client):
    res = client.post(
        "/api/stylist/generate", json={"occasion": "İş", "style": "Klasik"}
    )
    assert res.status_code == 200
    data = res.json()
    for key in ["top", "bottom", "shoes", "accessory", "reason"]:
        assert key in data
    assert "İş" in data["reason"]


def test_generate_with_anchor_item(client):
    item = client.post(
        "/api/wardrobe",
        json={"ad": "Mavi Mom Jean", "kategori": "Alt Giyim", "renk": "Mavi"},
    ).json()

    res = client.post(
        "/api/stylist/generate",
        json={"clothing_id": item["id"], "occasion": "Günlük", "style": "Casual"},
    )
    assert res.status_code == 200
    data = res.json()
    assert data["bottom"] == "Mavi Mom Jean"
    assert "Mavi Mom Jean" in data["reason"]


def test_generate_with_missing_anchor_404(client):
    res = client.post("/api/stylist/generate", json={"clothing_id": 999})
    assert res.status_code == 404
