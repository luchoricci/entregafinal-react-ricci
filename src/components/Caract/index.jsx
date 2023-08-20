const Caract = ({
image1,
image2,
image3,
image4,
image5,

}) => {



    return(
      

      <div className="section-p1">
        <div className="carac-box">
          <img src="../../imagen/envio-gratis.jpg" />
          <h6>Envio Gratis</h6>
        </div>

        <div className="carac-box">
          <img src={image2} alt="envio gratis" />
          <h6>Ordenes Online</h6>
        </div>

        <div className="carac-box">
          <img src={image3} alt="envio gratis" />
          <h6>Ahorra Plata</h6>
        </div>

        <div className="carac-box">
          <img src={image4} alt="envio gratis" />
          <h6>Muchas Promociones</h6>
        </div>

        <div className="carac-box">
          <img src={image5} alt="envio gratis" />
          <h6>Atencion al Cliente</h6>
        </div>
      </div>
    
    )
}
export default Caract