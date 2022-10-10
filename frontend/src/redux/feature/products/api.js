import axios from "axios";
import { isLogin } from "./CommerceSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchAuth = createAsyncThunk("auth", async (payload, dispatch) => {
  try {
    if (payload.username && payload.password) {
      const response = await axios.post("http://localhost:4000/v1/auth/login", {
        username: payload.username,
        password: payload.password,
      });
      dispatch.dispatch(isLogin(response.data));
      payload.navigate("/");
      console.log(response.data);
      return response.data;
    } else {
      alert("Làm ơn điền đầy đủ thông tin");
    }
  } catch (e) {
    alert("Đăng nhập thất bại làm ơn kiểm tra lại");
  }
});
