const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  const teacher = { name: "Whalen", subject: "Computer Science", tenure: true };
  try {
    res.json(teacher);
  } catch (error) {
    console.log(error);
  }
});
router.get("/teacher/:name", (req, res) => {
  try {
    //request is object that has properties
    res.json(req.params.name);
  } catch (error) {}
});
module.exports = router;
