const { User, Cart } = require("../model/model");
const addToCart = [];
const userController = {
  //get all user
  getAllUser: async (req, res) => {
    try {
      const user = await User.find({});
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findOneAndDelete({ _id: id });
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const cart = req.body.cart;
      addToCart.push(cart);
      const user = await User.findByIdAndUpdate(   
        { _id: id },
        {
          username: req.body.username,
          password: req.body.password,
        }
      );
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  },
};
module.exports = userController;
