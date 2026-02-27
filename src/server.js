const app = require("./app");

// Cloud Run sẽ inject PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 OpenLab Platform running on port ${PORT}`);
});
