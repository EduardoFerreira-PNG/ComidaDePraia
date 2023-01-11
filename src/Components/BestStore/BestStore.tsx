import React, { Component } from "react";
import Slider from "react-slick";

import "./slick.css"; 
import "./slick-theme.css";
import "./BestStore.sass"


import CardStore from "./CardStore";

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="slide_container">
        <h2>Lojas mais visitadas 🔥</h2>
        <Slider {...settings}>
          <div>
            <CardStore logo={"https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"} tittle={"McDonalds"} description={"Peça e seja mais feliz"}/>
          </div>
          <div>
          <CardStore logo={"https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"} tittle={"McDonalds"} description={"Peça e seja mais feliz"}/>

          </div>
          <div>
          <CardStore logo={"https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"} tittle={"McDonalds"} description={"Peça e seja mais feliz"}/>

          </div>
          <div>
          <CardStore logo={"https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"} tittle={"McDonalds"} description={"Peça e seja mais feliz"}/>

          </div>
          <div>
          <CardStore logo={"https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"} tittle={"McDonalds"} description={"Peça e seja mais feliz"}/>
          </div>
          <div>
          <CardStore logo={"https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"} tittle={"McDonalds"} description={"Peça e seja mais feliz"}/>
          </div>
          <div>
          <CardStore logo={"https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"} tittle={"McDonalds"} description={"Peça e seja mais feliz"}/>
          </div>
        </Slider>
      </div>
    );
  }
}