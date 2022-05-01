const express = require("express");
const app = express();

app.get("/", function (req, res) {
  //res.send("Prueba Montana Bistro");
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(process.env.PORT || 5000);
