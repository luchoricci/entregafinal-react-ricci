import { useEffect, useState } from "react";
import "./styles.css";
import Counter from "../../components/counter";
import Input from "../../components/input";
import Card from "../../components/products/card";
import Details from "../../components/products/details";
import { useFetch } from "../../hooks/useFetch";
import { API_URLS } from "../../constants";
import Loader from "../../components/loader";
import { useNavigate } from "react-router-dom";

function Store() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [productFiletered, setProductFiltered] = useState([]);

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

  // const filterBySearch = (query) => {
  //   let updateProductList = [...products];

  //   updateProductList = updateProductList.filter((item) => {
  //     return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });

  //   setProductFiltered(updateProductList);
  // };

  // const onChange = (event) => {
  //   const value = event.target.value;
  //   setSearch(value);
  //   filterBySearch(value);
  // };

  // const onFocus = () => {
  //   setActive(false);
  // };

  // const onBlur = () => {
  //   setActive(true);
  // };

  const onShowDetails = (id) => {
    navigate(`/products/${id}`);
  };
  const onFilter = (name) => {
    setIsFiltered(true);
    const productsBycategory = products.filter((product) => product.category === name);
    setProductFiltered(productsBycategory)
  }


  return (
    <div className="All">
      {/* <div className="inputContainer">
        <Input
          placeholder="Buscar un producto"
          id="task"
          required={true}
          name="Buscar Producto"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          active={active}
        />
      </div> */}
      <h2 className="tproductos">Productos</h2>
      <div className="categoriesContainer">
        <button onClick={() => setIsFiltered(false)} type="button" ><p>All products</p></button>
        {loadingCategories && <Loader />}
        {errorCategories && <p>ERROR</p>}
        {categories.map((category) => (
          <button onClick={() => onFilter(category.name)} key={category.id} className="categoryContainer">
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

        {isFiltered ? (
         productFiletered.map((product) => (
              <Card
                key={product.id}
                {...product}
                onShowDetails={onShowDetails}
              />
            ))
          )  : ( products.map((product) => (
              <Card
                key={product.id}
                {...product}
                onShowDetails={onShowDetails}
              
              />
            )))}
      </div>
    </div>
  );
}

export default Store;
