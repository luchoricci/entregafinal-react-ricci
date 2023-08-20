import React from "react";
import "./styles.css";
import Hero from "../../components/hero";


function Home() {
  
  return (
    <div>
      <Hero />

    
        <div className="section-p1">
          <div className="carac-box">
            <img src="https://media.gettyimages.com/id/1354206303/es/vector/icono-de-cami%C3%B3n-de-entrega-r%C3%A1pida.jpg?s=612x612&w=gi&k=20&c=8Y2CSbus_4hp_gr2Z8rUeBs68YmhRaQhS6-p8K1SY7c=" alt="envio gratis"/>
            <h6>Free Shipping</h6>
          </div>

          <div className="carac-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGbh0Z1sjfNKLRD1fM9bul0bEzZPUUYTtEZCZqn4iSDH_D4RPdoc8lwlDyv_gAhwawNY&usqp=CAU" alt="Order online" />
            <h6>Order Online</h6>
          </div>

          <div className="carac-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidcm84Nh4T03s9d7tOhVTDEPh9vhrqkPhcw&usqp=CAU" alt="Save Money" />
            <h6>Save money</h6>
          </div>

          <div className="carac-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zPrTe8UykS2vNzKsEGUg6m3J-ifYxfws5WjrHmxhZeUyvsSuFRIsMgoMoLuqQqGRllI&usqp=CAU" alt="envio gratis" />
            <h6>Lots of Promos </h6>
          </div>

          <div className="carac-box">
            <img src="https://previews.123rf.com/images/simmmax/simmmax1507/simmmax150700071/42785823-icon-in-flat-style-support-customer-service-icon.jpg" alt="envio gratis" />
            <h6>costumer service</h6>
          </div>
        </div>
   
    </div>
  );
}

export default Home;
