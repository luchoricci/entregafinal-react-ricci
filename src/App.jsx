
import "./App.css";
import Header from "./components/header";
import {Route, Routes } from "react-router-dom";
import Store from "./page/store";
import ProductDetail from "./page/product-detail";




function App() {
  return (
    <div>
      <Header logo="Un Traguito" cartwidget={<i className="bi bi-bag"></i>}/>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path='/products/:productId' element={<ProductDetail />} />

      </Routes>
      
    </div>
  );
}

export default App;
