const accountSid = "ACafd9cda4c3ed18d41ff84fb9f5cd96ef";
const authToken = "6831455a548ef58a00ccb848684dabf6";
const { Order } = require("./../model/model");
const twilio = require("twilio")(accountSid, authToken);
const sentMessage = async (req, res, next) => {
  if (!req.body.username) {
    return res.status(400).json("name field is missing");
  }
  if (!req.body.adress) {
    return res.status(400).json("adress field is missing");
  }
  if (!req.body.phonenumber) {
    return res.status(400).json("phonenumber field is missing");
  }
  const newOrder = await Order.create({
    username: req.body.username,
    adress: req.body.adress,
    order: req.body.order,
    phonenumber: req.body.phonenumber,
    message: req.body.message,
  });
  const saveOder = await newOrder.save();
  try {
    if (newOrder) {
      const respons = await twilio.messages.create({
        from: "+18647270892",
        to: "+84354660555",
        body: `Bạn có 1 đơn đặt hàng:Tên Khách Hàng:${req.body.username},Số Điện Thoại:${req.body.phonenumber},Địa Chỉ:${req.body.adress}`,
      });
      next();
    }
    return res.status(200).json(saveOder);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};
module.exports = sentMessage;
