import './styles.css';
import {useNavigate} from "react-router-dom";


const Hero = ({


}) => {
    const navigate = useNavigate();


    const goToStore = () => {
        navigate("/Store");
      };
    
    return(
        <div>
          <div className="hero">
            <h4>This wekend</h4>

            <h2>Super Sale</h2>

            <h1>All products 40% off</h1>

            <p>watch out for uor next sales </p>

            <button onClick={goToStore}>¡¡¡Buy now!!!</button>
          </div>
        </div>
    )
}

export default Hero
