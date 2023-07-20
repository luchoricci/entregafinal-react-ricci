import "./styles.css";

const Details = ({
  id,
  image,
  name,
  category,
  description,
  price,
  stock,
  onAddToCart,
}) => {
  return (
    <div className="cardDetail">
      <img className="detailCardImage" src={image} alt={name} />
      <div className="detailCarac">
        <h3 className="detailCardName">{name}</h3>
        <p className="detailCardCategory">{category}</p>
        <p className="detailCardDescription">{description}</p>
        <p className="detailCardPrice">${price}</p>
        <p className="detailCardStock">{stock} Left</p>
      

      <button onClick={() => onAddToCart(id)} className="detailCardButton">
        Add to cart
      </button>
      </div>
    </div>
  );
};
export default Details;
