const sentMessage = require("../controllers/OrderController");

const router = require("express").Router();
router.post("/sentmessage", sentMessage);

module.exports = router;
