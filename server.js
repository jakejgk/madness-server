const express = require("express");
const db = require("./db"); // Import the database connection

const app = express();
const port = 3001;

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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
