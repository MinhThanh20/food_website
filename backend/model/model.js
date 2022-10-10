const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productsSchema = new schema({
  name: String,
  price: Number,
  descripton: String,
  image: {
    type: String,
    contentType: String,
  },
});
const cartSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  qty: Number,
  price: Number,
  user: { type: mongoose.Types.ObjectId, ref: "user" },
});
const userSchema = new schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      unique: true,
    },
    mail: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    cart: [{ type: mongoose.Types.ObjectId, ref: "cart" }],
  },
  { timestamps: true }
);
const orderSchema = new schema(
  {
    username: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    order: [],
    phonenumber: {
      type: Number,
      required: true,
    },
    message: String,
  },
  {
    timestamps: true,
  }
);
Products = mongoose.model("products", productsSchema);
Cart = mongoose.model("cart", cartSchema);
User = mongoose.model("user", userSchema);
Order = mongoose.model("Oder", orderSchema);
module.exports = { Products, Cart, User, Order };
