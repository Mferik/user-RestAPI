const express = require("express");

const { getUsers , getSingleUser,createUser, deleteUser, updateUser} = require("../controllers/user.js");

const router = express.Router();

router.get("/users", getUsers());
router.get("/users/:id", getSingleUser());
router.post("/users", createUser());
router.delete("/users/:id", deleteUser());
router.put("/users/:id", updateUser());


module.exports = router;
