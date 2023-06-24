const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
const port = 5000;

let users = [
  {
    id: 1,
    name: "fatih",
    email: "cubake@gmail.com",
    country: "turkey",
    contact: "54545454",
  },
  {
    id: 2,
    name: "ebus",
    email: "ebus@gmail.com",
    country: "turkey",
    contact: "321321",
  },
];

app.get("/", (req, res) => {
  res.send("Server aktif");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    res.status(400).send("Kullanıcı yok");
  }
  res.send(user);
  console.log(id);
});

app.post("/users", (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: users.length + 1,
    name: name,
    email: email,
    country: country,
    contact: contact,
  };
  users.push(user);
  res.send("Yeni kullanıcı oluşturuldu");
});

app.delete("/users", (req, res) => {
  users.filter((user) => user.id !== req.params.id);
  res.send(users);
});

app.put("/users:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === Number(id));
  const { name, email, country, contact } = req.body;
  if (!user) {
    console.log("Kullanıcı yok");
  }
  (user.name = name),
    (user.email = email),
    (user.country = country),
    (user.contact = contact);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
