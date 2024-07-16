```markdown
# API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /google-login`
- `POST /pokemon`
- `POST /get-pokemons`

&nbsp;

## 1. POST /register

_Description: Register a new user._

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

_Response (200 - Success)_

```json
{
  "message": "User registered successfully"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation error message"
}
```

&nbsp;

## 2. POST /login

_Description: Login a user._

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - Success Login)_

```json
{
  "token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Invalid email or password"
}
```

&nbsp;

## 3. POST /google-login

_Description: Login with

 Google

._

Request:

- body:

```json
{
  "token": "string"
}
```

_Response (200 - Success Login)_

```json
{
  "message": "User logged in successfully"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Invalid Google token"
}
```

&nbsp;

## 4. POST /pokemon

_Description: Create a new Pokemon._

Request:

- headers: 

```json
{
  "Authorization": "Bearer token"
}
```

- body:

```json
{
  "name": "string",
  "type": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Pokemon created successfully"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation error message"
}
```

&nbsp;

## 6. POST /get-pokemons

_Description: Retrieve list of Pokemons._

Request:

- headers: 

```json
{
  "Authorization": "Bearer token"
}
```

_Response (200 - Success)_

```json
[
  {
    "name": "string",
    "type": "string"
  }
]
```

_Response (400 - Bad Request)_

```json
{
  "message": "Error message"
}
```

&nbsp;
```