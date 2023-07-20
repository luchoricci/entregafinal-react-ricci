import "./styles.css";

const Card = ({
  id,
  image,
  name,
  category,
  description,
  price,
  stock,
  onAddToCart,
  onShowDetails,
}) => {
  return (
    
      <div className="card" onClick={() => onShowDetails(id)}>
        <img className="cardImage" src={image} alt={name} />
        <div>
          <h3 className="cardName">{name}</h3>
          <p className="cardCategory">{category}</p>
          <p className="cardDescription">{description}</p>
          <p className="cardPrice">${price}</p>
          <p className="cardStock">{stock} Left</p>
        </div>
        
          <button onClick={() => onAddToCart(id)} className="cardButton">
            Add to cart
          </button>
        
      </div>
    
  );
};
export default Card;
