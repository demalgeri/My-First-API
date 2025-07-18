//const  declares a variable that cannot be reassigned later
//require("express"); loads the Express library
const express = require("express");
//express() creates an Express app instance
//I can now call functions likek app.get() on it
const app = express();
//This defines the port that my server will listen on
const PORT = 3000;
//Think of app as my server object and get() is one of its methods

//Users are hard-coded in this mini project. Typically, APIs must query a database to 
//retrieve data and return it.
//users is a JavaScript array of objects. Each object represents a user
//users is not JSON. JSON is a string representation of a JavaScript object
//users can be converted into JSON, but currently it is a real JavaScript array of objects.
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

app.use(express.json()); //Required to parse JSON in request bodies
//Without this, req.body will be undefined and name will be undefined.

//app is an object, .get() is a method on that object
//This sets up a route handler that listens for GET HTTP requests at a specific path (endpoint)
// Route: GET /users
app.get("/users", (req, res) => {
  res.json(users);
});
//The first parameter is "/users" which is the URL path
//The second parameter is a callback function that gets executed when someone makes
//a GET request to the /users endpoint.
//The callback function is an "arrow" function which is just shorthand for writing functions in JavaScript
//req is the request object. It contains info about the incoming request (URL, headers, data sent)
//res is the response object. It lets me send a reply back to the client (browser, Postman, etc.)
//req and res are passed by Express every time my route handler is called. I don't create them, Express gives them to me
//In this specific route handler, res is the response object and .json() is a method that converts my JavaScript
//object to JSON and sends it back to the client with the correct HTTP headers
//If I wanted, I could user other methods like res.send("hello world") which sends plain text or HTML
//Another is res.status(404).json({error: "Not found"}) which sets the status and sends json back.

// Route: GET /users/:id
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

app.post("/users", (req, res) => {
  //Create newUser object
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  //Push newUser object to the users array of objects
  users.push(newUser);
  res.status(201).json(newUser); // Return new user with 201 Created
});

// Start server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
