const express = require("express");
const bodyParser = require("body-parser");

const usersRouter = require("../api/router/users.js")

const app = express();

app.use(bodyParser.json());
const port = 5000;

app.use("/",usersRouter)


app.get("/", (req, res) => {
  res.send("Server aktif");
});



app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
