const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Prueba Montana Bistro");
});

app.listen(process.env.PORT || 5000);
