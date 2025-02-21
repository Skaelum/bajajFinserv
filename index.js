const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: "Invalid input format" });
  }

  const user_id = "lohitaksh_chopra_22BCS14122";
  const email = "universitycluster1.1@gmail.com";
  const roll_number = "22BCS14122";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[A-Za-z]$/.test(item));

  // Finding highest alphabet case-insensitively
  const highest_alphabet = alphabets.length
    ? [alphabets.reduce((a, b) => (a.toLowerCase() > b.toLowerCase() ? a : b))]
    : [];

  res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  });
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`);
});
