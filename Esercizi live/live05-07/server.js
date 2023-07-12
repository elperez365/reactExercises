const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json([{ nome: "luca", cognome: "rossi" }]);
});

app.post("/", (req, res) => {
  req.body();
});

app.listen(3000);
