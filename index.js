const express = require("express");
const app = express();

app.listen(3000, () => {
  //console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));
app.use(express.static('css'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});