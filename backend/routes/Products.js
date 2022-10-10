const router = require("express").Router();
const productController = require("../controllers/ProductController");
router.post("/", productController.addProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductByID);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);
module.exports = router;
