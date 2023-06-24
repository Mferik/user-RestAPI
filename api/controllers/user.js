const { v4: uuidv4 } = require("uuid");

let users = [
  {
    id: uuidv4(),
    name: "fatih",
    email: "cubake@gmail.com",
    country: "turkey",
    contact: "54545454",
  },
  {
    id: uuidv4(),
    name: "ebus",
    email: "ebus@gmail.com",
    country: "turkey",
    contact: "321321",
  },
];

 const getUsers = (req, res) => {
  res.send(users);
};

 const getSingleUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(400).send("Kullanıcı yok");
  }
  res.send(user);
  console.log(id);
};

 const createUser = (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: uuid(),
    name: name,
    email: email,
    country: country,
    contact: contact,
  };
  users.push(user);
  res.send("Yeni kullanıcı oluşturuldu");
};

 const deleteUser = (req, res) => {
  users.filter((user) => user.id !== req.params.id);
  res.send(users);
};

 const updateUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  const { name, email, country, contact } = req.body;
  if (!user) {
    console.log("Kullanıcı yok");
  }
  (user.name = name),
    (user.email = email),
    (user.country = country),
    (user.contact = contact);
  res.send(user);
};

module.exports = {
    updateUser,
    deleteUser,
    createUser,
    getSingleUser,
    getUsers
}