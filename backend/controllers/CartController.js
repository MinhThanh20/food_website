const { Cart } = require("../model/model");
const { User } = require("../model/model");
CartController = {
  addCart: async (req, res) => {
    const user_id = req.params.id;
    try {
      const { name, qty, price, image } = req.body;
      const newCart = await Cart.create({
        name: name,
        qty: qty,
        price: price,
        image: image,
        user: user_id,
      });
      const usercart = await newCart.save();
      const userById = await User.findById(user_id);
      userById.cart.push(usercart);
      await userById.save();
      return res.status(200).json(userById);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  cartByUser: async (req, res) => {
    const { id } = req.params;
    const userByCart = await User.findById(id).populate("cart");
    return res.status(200).json(userByCart);
  },
  getAllCart: async (req, res) => {
    try {
      const getAllCart = await Cart.find({});
      return res.status(200).json(getAllCart);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  deleteCart: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteCart = await Cart.findOneAndDelete({ _id: id });
      return res.status(200).json(deleteCart);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  getCartbyId: async (req, res) => {
    const id = req.params.id;
    try {
      const getCart = await Cart.findById(id);
      return res.status(200).json(getCart);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  updateCartByID: async (req, res) => {
    const id = req.params.id;
    try {
      const updateCart = await Cart.findByIdAndUpdate(
        { _id: id },
        {
          name: req.body.name,
          qty: req.body.qty,
          price: req.body.price,
          image: req.body.image,
        }
      );
      return res.status(200).json(updateCart);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  },
};
module.exports = CartController;
