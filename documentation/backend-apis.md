# Backend APIs

## Auth APIs

### POST /api/auth/signup

```json
{
  "body": {
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "password": "string",
    "dob": "string"
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
