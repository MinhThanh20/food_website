const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
router.post("/register", AuthController.registerUser);// router từ routor sẽ có thế get put post delete
router.post("/login", AuthController.loginUser);
module.exports = router;
//Thăng là thàng service nó có làth àng trung gian kết nối giữa fontend là backend