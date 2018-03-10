## Test

1. Clone this repo
1. run `npm install`
1. run `node index.js`
1. Test using [Postman](https://www.getpostman.com):
- Set HTTP Method to `POST`
- Set uri: `localhost:3000/submit`
- Set body to `raw` and `JSON (application/json)`
- Set content body to :

```
{
"id": 637826743612764312,
"token": "shdjashcudsdyubcuqby"
}
```
- Click on `Send` button


Response is..

```
{
    "message": "Success!",
    "payload": {
        "user_id": 637826743612764300,
        "token": "shdjashcudsdyubcuqby"
    }
}
```