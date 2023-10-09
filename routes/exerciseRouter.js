const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");

const defualt = [
  { name: "Push ups", goal: 20 },
  { name: "Pull ups", goal: 15 },
];

router.get("/", async (req, res) => {
  const exercise = await Exercise.find();
  res.render("home", { exercise, defualt });
});

router.post("/", async (req, res) => {
  const newExercise = new Exercise({
    name: req.body.name,
    goal: req.body.goal,
  });
  try {
    const saved = await newExercise.save();
    console.log(`Sucessfully saved ${saved}`);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const item = req.params.id;
  try {
    const deleted = await Exercise.findByIdAndDelete(item);
    console.log(`sucessfully deleted ${deleted}`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
