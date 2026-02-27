// src/routes/health.route.js
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "OpenLab Platform",
    time: new Date()
  });
});

module.exports = router;
