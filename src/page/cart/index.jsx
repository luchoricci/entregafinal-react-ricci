import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css'
import { CartContext } from '../../context/cart-context';
import { firebaseServices } from '../../services/firebase';



function Cart() {
  const navigate = useNavigate();
    const {cart,onAddToCart,onRemoveItem, onDecreaseItem, total, getTotalItemQuantity} = useContext(CartContext)
  
    const onHandlerCreateCart = async () => {
      const newCart ={
            buyer: {
            id: 1
            },
            items: cart,
            createdAt: new Date(),
            total: total,
            status: ' pending',
      }
const cartId = await firebaseServices.createCart(newCart)

return cartId
  }
    const onHandlerCheckout = async () => {
    const cartId = await onHandlerCreateCart()

    navigate('/Checkout', {state: {cartId: cartId.id}})
  }

    return (
      <div>
       <h2>Cart</h2>
      <div className="cartContainer">
        {cart.length === 0 && <h3>cart is empty</h3>}
        {cart?.length > 0 && cart.map((product) => (
            <div key={product.id} className="cartItem">
               <div className="cartImage"><img src={product.image} /></div>
                 <div className="cartContentContainer">
                   <p>{product.name}</p>  
                   <p>quantity: {product.quantity}</p>
                 <p>${product.price}</p> 
                   <p>{product.stock} left</p>
                 </div>
                <div className="cartActions">
                  <button onClick={() => onAddToCart(product.id)} className="cartButtonAdd">+</button>
                  <button onClick={() => onDecreaseItem(product.id)} className="cartButtonDecrease">-</button>
                  <button onClick={() => onRemoveItem(product.id)} className="cartButtonRemove">Remove</button>
               </div>

            
            </div>
            
           ))
         } 
         {
           cart?.length > 0 && (
           <div>
           <p className="cartTotal">Total:$ {total} </p>
           <p className='cartItemQuantity'>Items: {getTotalItemQuantity()}</p>
           <button onClick={onHandlerCheckout} className='cartButtonCheckout'>Checkout</button>
           </div>
           )
         }
       
       </div>
       </div>
    )
  
        }

  export default Cart;


