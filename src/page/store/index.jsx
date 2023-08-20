import { useEffect, useState, useContext } from "react";
import "./styles.css";
import Counter from "../../components/counter";
import Input from "../../components/input";
import Card from "../../components/products/card";
import Details from "../../components/products/details";
import { useFetch } from "../../hooks/useFetch";
import { API_URLS } from "../../constants";
import Loader from "../../components/loader";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart-context";

function Store() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [productFiletered, setProductFiltered] = useState([]);

  const{ setProducts, products: productsContext, onAddToCart, cart} = useContext(CartContext);

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);
  const {
    data: categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetch(API_URLS.CATEGORIES.url, API_URLS.CATEGORIES.config);

  useEffect(()=>{
if(products?.length > 0) {
  setProducts(products);
}
  }, [products, setProducts]) 

  const onShowDetails = (id) => {
    navigate(`/products/${id}`);
  };
  const onFilter = (name) => {
    setIsFiltered(true);
    const productsBycategory = products.filter(
      (product) => product.category === name
    );
    setProductFiltered(productsBycategory);
  };

  return (
    <div className="All">
     <div><h2 className="tproductos">Products</h2></div>
      <div className="categoriesContainer">
        <button onClick={() => setIsFiltered(false)} type="button">
          <p>All products</p>
        </button>
        {loadingCategories && <Loader />}
        {errorCategories && <p>ERROR</p>}
        {categories.map((category) => (
          <button
            onClick={() => onFilter(category.name)}
            key={category.id}
            className="categoryContainer"
          >
            <p className="categoryName">{category.name}</p>
          </button>
        ))}
      </div>

      <div className="cardContainer">
        {loadingProducts && <Loader />}
        {errorProducts && <p>ERROR</p>}

        {search.length > 0 && productFiletered.length === 0 && (
          <p>Product dont Found</p>
        )}

        {isFiltered
          ? productFiletered.map((product) => (
              <Card
                key={product.id}
                {...product}
                onShowDetails={onShowDetails}
                onAddToCart={onAddToCart}
              />
            ))
          : products.map((product) => (
              <Card
                key={product.id}
                {...product}
                onShowDetails={onShowDetails}
                onAddToCart={onAddToCart}
              />
            ))}
      </div>
    </div>
  );
}

export default Store;
