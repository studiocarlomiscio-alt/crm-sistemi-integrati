import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("✅ CRM Sistemi Integrati attivo!");
});

app.listen(PORT, () => {
  console.log(`Server avviato su porta ${PORT}`);
});
