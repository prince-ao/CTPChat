# Backend APIs

## Auth APIs

### POST /api/auth/signup

```json
{
  "body": {
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "password": "string"
  }
}
```

`200` response:

```
Set-Cookie: (xrt59z) -> (token)
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

```
Set-Cookie: (xrt59z) -> (token)
```

`400` response:

```json
{
  "response": {
    "error_message": "string"
  }
}
```

### GET /api/auth/is-logged-in

```json
{
  "body": {
    "uuid": "string"
  }
}
```

`200` response:

```
(YES | NO)
```
