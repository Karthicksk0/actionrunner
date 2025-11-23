const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Your CI/CD app is running successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
