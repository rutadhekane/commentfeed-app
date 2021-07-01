# Comments Feed Backend

This is a backend for comments portal. It will allows you following operations
```
* Create a comment:      /createComment (POST)
* Retrieve all comments: /getComments (GET)
* Retrieve a comment:    /getComment (GET)
* Delete all comments:   /deleteComments (DELETE)
```

**/createComment**
The POST request payload looks like this
```
{
	"name": "FirstName LastName",
	"message": "This is a test comment",
	"date": "18 Jun 21"
}
```

**/getComment**
The single GET comment request url
```
http://localhost:5000/getComment/{commentId}
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### SQLite Schema

Here is the data schema for a Comment:
```
* id:      INTEGER
* name:    TEXT
* created: DATETIME
* message: TEXT
```
