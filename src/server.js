const app = require("./app");

// Cloud Run sẽ inject PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 OpenLab Platform running on port ${PORT}`);
});
