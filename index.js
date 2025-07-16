const express = require("express");
const app = express();
const PORT = 3000;

//Users are hard-coded in this mini project. Typically, APIs must query a database to 
//retrieve data and return it.
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Route: GET /users
app.get("/users", (req, res) => {
  res.json(users);
});

// Route: GET /users/:id
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// Start server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
