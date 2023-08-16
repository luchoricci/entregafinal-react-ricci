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
    
      <div className="card" >
        <button className="pButton" type="button" onClick={() => onShowDetails(id)}>
        <img className="cardImage" src={image} alt={name} />
        <div>
          <h3 className="cardName">{name}</h3>
          <p className="cardCategory">{category}</p>
          <p className="cardDescription">{description}</p>
          <p className="cardPrice">${price}</p>
          <p className="cardStock">{stock} Left</p>
        </div>
        </button>
        <div className="cardbutton">
        <button onClick={() => onAddToCart(id)} className='cartButton'>Add to cart</button>
        </div>
      </div>
    
  );
};
export default Card;
