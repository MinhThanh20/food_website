import axios from "axios";

export const handleAddtocart = async (payload, userID) => {
  try {
    const addToCart = await axios.post(
      `http://localhost:4000/v1/cart/${userID}`,
      {
        name: payload.name,
        qty: 1,
        price: payload.price,
        image: payload.image,
      }
    );
    return addToCart;
  } catch (e) {
    alert(e);
  }
};
