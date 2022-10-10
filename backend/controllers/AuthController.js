const { User } = require("../model/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//Thằng controller đây là thằng xử lý logic
const AuthController = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        mail: req.body.email,
        password: hashed,
      });
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  loginUser: async (req, res) => {
    try {
      console.log("req", req.body);
      const user = await User.findOne({ username: req.body.username });

      if (!user) {
        return res.status(404).json("Wrong user name");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json("Wrong password");
      }
      if (user && validPassword) {
        const accessToken = jwt.sign(
          {
            id: user.id,
            admin: user.admin,
          },
          process.env.JWT_ACCESSKEY,
          { expiresIn: process.env.EXPRIRE }
        );
        const { password, ...other } = user._doc;
        return res.status(200).json({ ...other, accessToken });
      }
    } catch (e) {
      res.status(400).json(e);
    }
  },
};
module.exports = AuthController;
