const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
const port = 5000;



app.get("/", (req, res) => {
  res.send("Server aktif");
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
