import axios from "axios";

export const register = async (payload) => {
  try {
    const register = await axios
      .post(`http://localhost:4000/v1/auth/register`, {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      })
      .then(() => alert("Đăng ký tài khoản thành công"));
    return register;
  } catch (e) {
    alert("Đăng ký thất bại làm ơn lại");
  }
};
