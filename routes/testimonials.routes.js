const express = require("express");
const router = express.Router();
const db = require("./../dataBase");
const testimonials = db.testimonials;

router.route("/testimonials").get((req, res) => {
  res.json(testimonials);
});
router.route("/testimonials/random").get((req, res) => {
  const id = Math.floor(Math.random() * testimonials.length + 0);
  res.redirect(`/testimonials/${id}`);
});

router.route("/testimonials/:id").get((req, res) => {
  const record = testimonials.find((el) => el.id == req.params.id);
  const text = record.text;
  res.json(text);
});
router.route("/testimonials").post((req, res) => {
  const { author, text } = req.body;
  const newRecord = {};
  newRecord.id = Math.random().toString(26).slice(2);
  newRecord.author = author;
  newRecord.text = text;
  testimonials.push(newRecord);
  res.json({ message: "OK" });
});

router.route("/testimonials/:id").put((req, res) => {
  const { author, text } = req.body;
  const record = testimonials.find((el) => el.id == req.params.id);
  record.author = author;
  record.text = text;
  res.json({ message: "OK" });
});
router.route("/testimonials/:id").delete((req, res) => {
  const record = testimonials.find((el) => el.id == req.params.id);
  const recordIndex = testimonials.indexOf(record);
  testimonials.splice(recordIndex, 1);
  res.json({ message: "OK" });
});

module.exports = router;
