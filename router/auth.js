const { request } = require("express");
const express = require("express");
const router = express.Router();
require("../DB/conn");
const User = require("../model/userSchema");
const cors = require("cors");
const Register = require("../model/registrationSchema");
const app = express();
app.use(express.json());
app.use(cors());

router.get("/", (req, res) => {
  res.send("Hello World! running server at 3000");
});

router.post("/adduser", async (req, res) => {
  try {
    const user = new User(req.body);
    const createUser = await user.save();
    // createUser = createUser.toObject();
    // delete createUser.password;
    res.status(201).send(createUser);
  } catch (e) {
    res.status(502).send(e);
  }
});

// login api 
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    if (req.body.email && req.body.password) {
      let userData = await User.findOne(req.body).select("-password");
      if (userData) {
        res.send(userData);
      } else {
        res.send({ result: "no user found" });
      }
    }
  } catch {
    res.send({ result: "no user found" });
  }

});

// forget password api
router.post("/forget", async (req, res) => {
  console.log(req.body);
  try {
    if (req.body.email) {
      let userData = await User.findOne(req.body);
      if (userData) {
        res.send(userData);
      } else {
        res.send({ result: "no user found" });
      }
    }
  } catch {
    res.send({ result: "no user found" });
  }

});


// get All User data
router.get("/adduser", async (req, res) => {
  try {
    const useData = await User.find();
    res.send(useData);
  } catch (e) {
    res.send(e);
  }
});

//get Single user Data
router.get("/adduser/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const singleUser = await User.findById(_id);
    if (!singleUser) {
      return res.status(404).send();
    } else {
      res.send(singleUser);
    }
  } catch (e) {
    res.send(e);
  }
});

// update user by id
router.patch("/adduser/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete user by id
router.delete("/adduser/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(_id);
    if (!_id) {
      return res.status(404).send();
    } else {
      res.send(deleteUser);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
