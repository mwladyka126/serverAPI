const express = require("express");
const db = require("./dataBase");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/testimonials", (req, res) => {
  res.json(db);
});
app.get("/testimonials/random", (req, res) => {
  const id = Math.floor(Math.random() * db.length + 0);
  res.redirect(`/testimonials/${id}`);
});

app.get("/testimonials/:id", (req, res) => {
  const record = db.find((el) => el.id == req.params.id);
  const text = record.text;
  res.json(text);
});
app.post("/testimonials", (req, res) => {
  const { author, text } = req.body;
  const newRecord = {};
  newRecord.id = Math.random().toString(26).slice(2);
  newRecord.author = author;
  newRecord.text = text;
  db.push(newRecord);
  res.json({ message: "OK" });
});

app.put("/testimonials/:id", (req, res) => {
  const { author, text } = req.body;
  const record = db.find((el) => el.id == req.params.id);
  record.author = author;
  record.text = text;
  res.json({ message: "OK" });
});
app.delete("/testimonials/:id", (req, res) => {
  const record = db.find((el) => el.id == req.params.id);
  const recordIndex = db.indexOf(record);
  db.splice(recordIndex, 1);
  res.json({ message: "OK" });
});
app.use((req, res) => {
  res.status(404).send("404 not found...");
});
app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
