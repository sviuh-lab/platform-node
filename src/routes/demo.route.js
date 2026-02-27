// src/routes/demo.route.js
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Demo API working",
    tip: "Fork repo này để làm đề tài của bạn"
  });
});

module.exports = router;
