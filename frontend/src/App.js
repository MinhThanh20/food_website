import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import CutomerReview from "./cutomerreview/CutomerReview";
import PayUp from "./components/payup/PayUp";
import Popular from "./components/popular/Popular";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route index element={<Layout />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="review" element={<CutomerReview />} />
            <Route path="popular" element={<Popular />} />
            <Route path="payup" element={<PayUp />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
