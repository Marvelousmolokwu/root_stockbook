const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  fetch("https://amica.onrender.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => res.json(console.log(data)))
    .catch((error) => res.status(500).json({ error: "An error occurred" }));
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
