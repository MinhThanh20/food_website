import axios from "axios";

export const updateCart = async (payload) => {
  const id = payload.id_cart;
  try {
    const updateCart = await axios.put(
      `http://localhost:4000/v1/cart/updatecart/${id}`,
      {
        qty: payload.qty,
      }
    );
    return updateCart;
  } catch (e) {
    alert(e);
  }
};
export const deleteCart = async (id) => {
  try {
    const deleteCart = await axios.delete(
      `http://localhost:4000/v1/cart/${id}`
    );
    return deleteCart;
  } catch (e) {
    alert(e);
  }
};
