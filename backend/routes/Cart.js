const router = require("express").Router();
CartController = require("../controllers/CartController");
router.get("/", CartController.getAllCart);
router.post("/:id", CartController.addCart);
router.get("/:id", CartController.getCartbyId);
router.delete("/:id", CartController.deleteCart);
router.put("/updatecart/:id", CartController.updateCartByID);
router.get("/find/usercarts/:id", CartController.cartByUser);
module.exports = router;
