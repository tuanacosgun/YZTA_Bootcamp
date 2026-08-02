def test_list_empty(client):
    res = client.get("/api/wardrobe")
    assert res.status_code == 200
    assert res.json() == []


def test_create_and_list_item(client):
    payload = {
        "ad": "Beyaz Oversize Tişört",
        "kategori": "Üst Giyim",
        "renk": "Beyaz",
        "kaynak": "",
        "image": "https://example.com/tisort.webp",
    }
    res = client.post("/api/wardrobe", json=payload)
    assert res.status_code == 201
    item = res.json()
    assert item["ad"] == "Beyaz Oversize Tişört"
    assert "id" in item

    res_list = client.get("/api/wardrobe")
    assert len(res_list.json()) == 1


def test_invalid_kategori_rejected(client):
    res = client.post("/api/wardrobe", json={"ad": "X", "kategori": "GECERSIZ"})
    assert res.status_code == 422


def test_delete_item(client):
    create = client.post(
        "/api/wardrobe", json={"ad": "Siyah Jean", "kategori": "Alt Giyim"}
    ).json()
    item_id = create["id"]

    res = client.delete(f"/api/wardrobe/{item_id}")
    assert res.status_code == 204

    res_list = client.get("/api/wardrobe")
    assert res_list.json() == []


def test_delete_nonexistent_item(client):
    res = client.delete("/api/wardrobe/999")
    assert res.status_code == 404
