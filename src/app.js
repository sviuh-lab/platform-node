const express = require("express");
const cors = require("cors");

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json());

// ===== Health check =====
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "OpenLab Platform API",
    time: new Date().toISOString()
  });
});

app.use("/health", require("./routes/health.route"));
app.use("/demo", require("./routes/demo.route"));

// ===== Sample API =====
app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      name: "EduLink AI",
      status: "prototype"
    },
    {
      id: 2,
      name: "NetMovie",
      status: "idea"
    }
  ]);
});



module.exports = app;
