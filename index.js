const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello I am home route");
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
