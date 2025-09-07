Step 1: Register a User

Method: POST

URL: http://localhost:5000/api/users/register

Example: Request body

```
{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "password123"
}
```

<img width="839" height="622" alt="image" src="https://github.com/user-attachments/assets/d6a1f6ae-5566-45d1-ba7f-96c5c5c17c8e" />







Step 2: Login the User

Method: POST

URL: http://localhost:5000/api/users/login

Example: Request body

```
{
  "email": "alice@example.com",
  "password": "password123"
}
```



<img width="460" height="624" alt="image" src="https://github.com/user-attachments/assets/e9c66826-caff-48e9-8374-48ec8186df71" />




Step 3: Create a note

Method: POST

URL: http://localhost:5000/api/notes

Example: 

Header

```
Authorization: Bearer <your_token_here>
Content-Type: application/json
```
Body

```
{
  "text": "This is my first protected note"
}
```


Paste token here and pass the note in the body
<img width="1002" height="371" alt="image" src="https://github.com/user-attachments/assets/d5979924-6781-43e6-b6d9-c3d408393612" />

Output


<img width="649" height="664" alt="image" src="https://github.com/user-attachments/assets/a474640f-c01d-4b6a-b60c-19cc914b3e75" />

Step 4: Get Notes (Protected Route)

Method: GET

URL: http://localhost:5000/api/notes

Headers:
```
Authorization: Bearer <your_token_here>
```

<img width="557" height="706" alt="image" src="https://github.com/user-attachments/assets/5e4a21e5-427a-4dfe-b426-c09057a4a21a" />

