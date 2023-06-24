const uuid = require("uuid")



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


export const getUsers = (req, res) => {
    res.send(users);
  };
  
  export const getSingleUser= (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
      res.status(400).send("Kullanıcı yok");
    }
    res.send(user);
    console.log(id);
  };
  
  export const createUser = (req, res) => {
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
  }
  
 export const deleteUser= (req, res) => {
    users.filter((user) => user.id !== req.params.id);
    res.send(users);
  }
  
  export const updateUser = (req, res) => {
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
  }
  