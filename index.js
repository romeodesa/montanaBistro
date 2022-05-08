const express = require("express");
const app = express();

app.listen(process.env.PORT || 5000);

app.use(express.static(__dirname));
app.use(express.static('css'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});