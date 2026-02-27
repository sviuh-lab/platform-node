// src/routes/root.route.js
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    platform: "SVIUH Startup Lab",
    service: "OpenLab Platform API",
    status: "running",
    version: "0.1.0",
    message: "This is a backend template for student startup projects"
  });
});

module.exports = router;
