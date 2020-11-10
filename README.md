# portal-autentikasi

Portal autentikasi App is an application to authentication user with JWT. This app has : 
* RESTful endpoint for user's find All
* JSON formatted response

&nbsp;

## RESTful endpoints

### GET /users

> Get all users

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
  {
    "id": 1,
    "name": "<name to get insert into>",
    "email": "<email to get insert into>",
    "gender": "<gender to get insert into>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
  {
    "id": 1,
    "name": "<name to get insert into>",
    "email": "<email to get insert into>",
    "gender": "<gender to get insert into>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
]
```

_Response (500 - Server Error)_
```
{
  "message": "Internal server error"
}
```

### POST /register

> Create new user

_Request Body_
```
{
  "name": "<name to get insert into>",
  "email": "<email to get insert into>",
  "password": "<password to get insert into>",
  "gender": "<gender to get insert into>",  
}
```

_Response (201 - Created)_
```
{
  "id": <given id by system>,
  "name": "<name to get insert into>",
  "email": "<email to get insert into>",
  "gender": "<gender to get insert into>",
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid requests"
}
```

_Response (500 - Server Error)_
```
{
  "message": "Internal server error"
}
```

### POST /login

> Login user

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>",  
}
```

_Response (200 - OK)_
```
{
  "access_token": "<your access token>"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid email or password"
}
```

_Response (500 - Server Error)_
```
{
  "message": "Internal server error"
}
```