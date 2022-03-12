import { useState } from "react";
import "./App.css";
import cartOne from "./img/01.png";
import cartTwo from "./img/02.png";
import cartThree from "./img/03.png";
import cartFour from "./img/04.png";
import cartFive from "./img/05.png";
import cartSix from "./img/06.png";

export function App() {
  const arrImg = [cartOne, cartTwo, cartThree, cartFour, cartFive, cartSix];
  const g = arrImg.map((elem, index) => {
    return (
      <div className="elem">
        <div
          id={index}
          key={index}
          className="cart"
          onClick={(props) => {
            const elem = props.target.offsetParent;
            Number(elem.id) < 3
              ? elem.className === "cart"
                ? (elem.className = "b")
                : (elem.className = "cart")
              : elem.className === "cart"
              ? (elem.className = "a")
              : (elem.className = "cart");
          }}
        >
          <img id={index} className="img" src={elem}></img>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="selector">
        <div className="container">{g}</div>
      </div>
    </>
  );
}
