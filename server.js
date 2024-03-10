const express = require("express");
const db = require("./db"); // Import the database connection
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

app.get("/madness", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM madness LIMIT 5");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).send("Server Error");
  }
});

app.post("/submit", async (req, res) => {
  const { email, bracket } = req.body;

  try {
    const queryText =
      "INSERT INTO madness(email, steak) VALUES($1, $2) RETURNING *";
    const values = [email, JSON.stringify(bracket)];

    const { rows } = await db.query(queryText, values);

    res.json(rows[0]);
  } catch (error) {
    console.error("Error saving to database", error);
    res.status(500).send("Server Error");
  }
});

app.post("/score", async (req, res) => {
  const { email } = req.body;
  try {
    const queryText = "SELECT steaks FROM madness WHERE email = VALUE($1)"
    const value = email
    const {rows} = await db.query(queryText, value)
    res.json(rows[0])
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
