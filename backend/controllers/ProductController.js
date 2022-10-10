const { Products } = require("../model/model");
productController = {
  addProduct: async (req, res) => {
    try {
      const newProduct = new Products(req.body);
      const saveProduct = await newProduct.save();
      res.status(200).json(saveProduct);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const getAllProduct = await Products.find({});
      res.status(200).json(getAllProduct);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  getProductByID: async (req, res) => {
    try {
      const id = req.params.id;

      const getProductById = await Products.findById(id);
      res.status(200).json(getProductById);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteProduct = await Products.findOneAndDelete({ _id: id });
      res.status(200).json(deleteProduct);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const newProduct = req.body;
      const updateProduct = await Products.findByIdAndUpdate(
        { _id: id },
        {
          name: newProduct.name,
          price: newProduct.price,
          descripton: newProduct.descripton,
          image: newProduct.image,
        }
      );
      res.status(200).json(updateProduct);
    } catch (e) {
      res.status(500).json(e);
    }
  },
};
module.exports = productController;
