const router = require("express").Router();
const userController = require("../controllers/UserController");
const midleWareController = require("../controllers/midleWareController");
router.get("/", midleWareController.verifyToken, userController.getAllUser);
router.put("/:id", userController.update);
router.delete(
  "/:id",
  midleWareController.verifyTokenandAdminAth,
  userController.deleteUser
);
module.exports = router;
