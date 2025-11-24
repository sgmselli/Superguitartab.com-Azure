[Superguitartab.com](../../README.md) >
[Developer documentation](../README.md) >
Api Reference

# API Reference

For the full interactive, auto-generated, API documentation, you must [set up and run locally](../setup/setup.md)
and then visit: http://localhost:8000/docs

**Version:** 1.0.0  
**Base URL:** `https://superguitartab.com/api/v1`

---


| Category | Endpoints |
|----------|-----------|
| **Tabs** | `GET /tabs/` · `GET /tabs/tab/{tab_id}` · `GET /tabs/genre/{genre}` · `GET /tabs/style/{style}` · `GET /tabs/search` · `POST /tabs/` · `POST /tabs/upload` |

---

## Tabs API

---

## GET /tabs/tab/{tab_id}
### Get Tab  
Fetch a single guitar tab by ID.

### Path Parameters

| Name | Type | Required |
|------|------|----------|
| tab_id | integer | Yes |

### Response 200
Returns a `TabResponse`.

---

## GET /tabs/
### Get All Tabs (Paginated)  

### Query Parameters

| Name | Type | Default | Description |
|------|------|---------|-------------|
| limit | integer | 10 | 1–100 |
| offset | integer | 0 | Pagination offset |

### Response 200
Array of `TabResponse`.

---

## POST /tabs/
### Upload Tab + Metadata  

Uploads PDF + metadata.

### Request Body (multipart/form-data)

| Field | Type | Required |
|-------|------|----------|
| song_name | string | Yes |
| artist | string | Yes |
| genre | string | Yes |
| style | string | Yes |
| tab_file | binary file | Yes |

### Response 200  
Returns `TabResponse`.

---

## GET /tabs/genre/{genre}
### Get Tabs by Genre  

### Path Parameters

| Name | Enum |
|------|------|
| genre | classical, country, folk, indie, metal, pop, rock, christmas |

### Query Parameters  
Same as `/tabs/`.

### Response 200  
Array of `TabResponse`.

---

## GET /tabs/style/{style}
### Get Tabs by Style  

### Path Parameters

| Name | Enum |
|------|------|
| style | finger-picking, strumming, bass, electric, acoustic |

### Query Parameters  
Same as `/tabs/`.

### Response 200  
Array of `TabResponse`.

---

## POST /tabs/upload
### Upload Tab PDF Only  

### Request Body (multipart/form-data)

| Field | Type | Required |
|-------|------|----------|
| song_name | string | Yes |
| artist | string | Yes |
| tab_file | file | Yes |

### Response 201  
File upload success.

---

## GET /tabs/search
### Search Tabs  

### Query Parameters

| Name | Type | Required |
|------|------|----------|
| query | string | Yes |

### Response 200  
Array of `TabResponse`.

---