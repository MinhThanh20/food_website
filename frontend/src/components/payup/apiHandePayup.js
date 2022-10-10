import axios from "axios";
export const handleApiPayup = async (payload) => {
  console.log(payload);
  console.log(payload.username, payload.adress, payload.message);
  const handlePayup = await axios
    .post("http://localhost:4000/v1/order/sentmessage", {
      username: payload.username ? payload.username : "",
      adress: payload.adress ? payload.adress : "",
      order: [...payload.order],
      phonenumber: payload.phoneNumber * 1,
      message: payload.message,
    })
    .then(() => alert("mua hàng thành công"))
    .catch("mua hàng thất bại");
};
