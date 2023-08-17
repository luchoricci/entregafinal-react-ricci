
import "./App.css";
import Header from "./components/header";
import {Route, Routes } from "react-router-dom";
import Store from "./page/store";
import ProductDetail from "./page/product-detail";
import { CartProvider } from "./context/cart-context";
import Cart from "./page/cart";
import Checkout from "./page/checkout";
import SuccessOrder from "./page/success-order";




function App() {
  return (
    <div>
      <CartProvider>
      <Header logo="Un Traguito" cartwidget={<i className="bi bi-bag"></i>}/>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/success-order" element={<SuccessOrder/>} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
