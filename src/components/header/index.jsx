import { useContext } from "react";
import "./styles.css";
import { CartContext } from "../../context/cart-context";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ logo, cartwidget }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };
  const goToStore = () => {
    navigate("/Store");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        {logo}
      </Link>
      <input type="checkbox" className="side-menu" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <li>
            <button onClick={goToHome}>Home</button>
          </li>
          <li onClick={goToStore}>
            <button>Store</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>About us</button>
          </li>
          <li>
            <button>Contact us</button>
          </li>
          <li onClick={goToCart} className="menuCartContainer">
            <button className="buttonCart">{cartwidget}</button>
            <div className="menuCountContainer">
              <span className="CartCount">{cart.length}</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
