const express = require("express");
const db = require("./db"); // Import the database connection
const cors = require("cors");
const bracketMaster = require("./masterBracket");

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

function discNotif(email, displayName) {
  return {
    method: "POST",
    url: "https://discord.com/api/webhooks/1140286423451312230/6X0rL7Inc98E8n2chMxFXcJQu4Qpc304YlbC6AuSbMvjQvWdG7f--C81XzWfd5bcHGwb",
    data: {
      content: `[${count}] ${email}`,
    },
  };
}

app.post("/submit", async (req, res) => {
  const { displayName, email, bracket } = req.body;

  try {
    const queryText =
      "INSERT INTO madness(display_name, email, steak) VALUES($1, $2, $3) RETURNING *";
    const values = [displayName, email, JSON.stringify(bracket)];

    const { rows } = await db.query(queryText, values);

    res.json(rows[0]);
  } catch (error) {
    console.error("Error saving to database", error);
    res.status(500).send("Server Error");
  }
});

app.post("/get-bracket", async (req, res) => {
  const { email } = req.body;
  try {
    const queryText = "SELECT steak FROM madness WHERE email = $1";
    const values = [email];
    const { rows } = await db.query(queryText, values);
    const parsedSteak = JSON.parse(rows[0].steak);

    const score = scoreBracket(parsedSteak, bracketMaster);

    if (rows.length > 0) {
      res.json({ steak: parsedSteak, score: score }); // Send the first matching row back to the client
    } else {
      res.status(404).send("No matching records found.");
    }
  } catch (error) {
    console.log("Error checking score: ", error);
  }
});

app.get("/leaderboard", async (req, res) => {
  const { email } = req.body;
  try {
    const queryText = "SELECT steak FROM madness";
    // const values = [email];
    const { rows } = await db.query(queryText);

    if (rows.length > 0) {
      console.log("rows; ", rows);
      res.json(rows[0]); // Send the first matching row back to the client
    } else {
      res.status(404).send("No matching records found.");
    }
  } catch (error) {
    console.log("Error checking score: ", error);
  }
});

app.post("/emailExist", async (req, res) => {
  const { email } = req.body;
  try {
    const queryText = "SELECT email FROM madness WHERE email = $1";
    const { rows } = await db.query(queryText, [email]); // Use parameterized query for safety
    console.log(rows);
    if (rows.length > 0) {
      // Email exists
      res.json({ exists: true });
    } else {
      // Email does not exist
      res.json({ exists: false });
    }
  } catch (error) {
    console.log("error checking if email exists: ", error);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

function scoreBracket(userBracket, masterBracket) {
  // underdog scores as well
  let score = 0;
  const pointsPerRound = {
    round1: 100,
    round2: 200,
    round3: 400,
    round4: 1000,
  };

  Object.keys(pointsPerRound).forEach((roundKey) => {
    const roundPoints = pointsPerRound[roundKey];
    const userMatches = userBracket[roundKey];
    const masterMatches = masterBracket[roundKey];

    userMatches.forEach((userMatch, index) => {
      const masterMatch = masterMatches.find(
        (match) => match.id === userMatch.id
      );
      if (!masterMatch) {
        console.warn(
          `No matching match found in master bracket for ${userMatch.id}`
        );
        return;
      }

      // Compare winners
      userMatch.participants.forEach((participant) => {
        const masterParticipant = masterMatch.participants.find(
          (p) => p.id === participant.id
        );
        // If the participant is marked as winner in both user's and master's brackets
        if (
          participant.isWinner &&
          masterParticipant &&
          masterParticipant.isWinner
        ) {
          let matchScore = roundPoints;
          // Identify the opponent in the match
          const opponent = userMatch.participants.find(
            (p) => p.id !== participant.id
          );
          // Apply underdog bonus if applicable
          if (participant.seed > opponent.seed) {
            matchScore *= 1.5;
          }
          score += matchScore;
        }
      });
    });
  });

  return score;
}
