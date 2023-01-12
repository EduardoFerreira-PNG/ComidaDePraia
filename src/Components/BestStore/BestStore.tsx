import React, { Component } from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import "./BestStore.sass"


import CardStore from "./CardStore";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500,

    };
    return (
      <div className="slide_container">
        <h2>Lojas mais vistas 🔥</h2>
        <Slider {...settings}>
          <div>
            <CardStore logo={"https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"} tittle={"McDonalds"} description={"Lanches"} />
          </div>
          <div>
            <CardStore logo={"https://www.festivalmuellerbomgourmet.com.br/src/logos/LOGO_Outback.png"} tittle={"Outback"} description={"Lanches"} />

          </div>
          <div>
            <CardStore logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyfNuKY6rF1GAaA7DmzDR5Fod_pwnO5oU6D3_e2wplWCqsfcPoH9W54nCDCwhH1uaBNw&usqp=CAU"} tittle={"Habib's"} description={"Lanches"} />

          </div>
          <div>
            <CardStore logo={"https://seeklogo.com/images/K/kfc-new-logo-72E6348046-seeklogo.com.png"} tittle={"KFC"} description={"Lanches"} />

          </div>
          <div>
            <CardStore logo={"https://play-lh.googleusercontent.com/JHUqRUwV1ozgUNJHaOHcaGZUp_v-Yl9Ujca96Ojqiiy0R3JyrZZCgeVjVfP331J8TR4"} tittle={"Popeye's"} description={"Lanches"} />
          </div>
          <div>
            <CardStore logo={"https://upload.wikimedia.org/wikipedia/commons/9/95/Logo_Madero.jpg"} tittle={"Madero"} description={"Lanches"} />
          </div>
          <div>
            <CardStore logo={"https://play-lh.googleusercontent.com/wWXePJtJwa8slrpch_scAqld5hNDAQKx-KSLDo5uo69yfQv-_k6o5OPPjEQrdRHFHOo"} tittle={"TacoBell"} description={"Lanches"} />
          </div>
        </Slider>
      </div>
    );
  }
}