const userModel = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const SECRET_KEY=require("secret-key")
const SECRET_KEY = "NOTESAPI";
const signup = async (req, res) => {
  //existing user cheack
  const { name, password, email } = req.body;
  console.log(req.body);
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    //user Create
    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      name: name,
      //   age: age
      //   location: location,
    });
    //Token
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({
      user: result,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({
        message: "Invalid User",
      });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Somthing went wrong",
    });
  }
};

module.exports = { signup, signin };
