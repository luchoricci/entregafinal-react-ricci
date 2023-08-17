import './styles.css'
import { useLocation } from 'react-router-dom'

const SuccessOrder =() => {
    const location = useLocation();
    const{orderId} = location.state;
return(
    <div>
        <h2>thanks Come Again</h2>
        <p>Order Id: {orderId}</p>
    </div>
)


}


export default SuccessOrder