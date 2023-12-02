# Backend APIs

## Auth APIs

### POST /api/auth/signup

```json
{
  "body": {
    "email": "string",
    "username": "string",
    "password": "string",
    "dob": "date"
  }
}
```

`200` response:

```json
{
  "token": "string"
}
```

`400` response:

```json
{
  "response": {
    "error_message": "string"
  }
}
```

---

### POST /api/auth/login

```json
{
  "body": {
    "email": "string",
    "password": "string"
  }
}
```

`200` response:

```json
{
  "token": "string"
}
```

`400` response:

```json
{
  "response": {
    "error_message": "string"
  }
}
```

### WS /api/home

### POST /api/home/get-spaces

```json
{
  "body": {
    "token": "string"
  }
}
```

`200` response:

```json
[
  {
    "space_id": "number",
    "space_name": "string"
  }
]
```

### POST /api/home/get-friends

```json
{
  "body": {
    "token": "string"
  }
}
```

### POST /api/home/get-user-info

```json
{
  "body": {
    "token": "string"
  }
}
```
