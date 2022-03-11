import { useState } from "react";
import "./App.css";
import cartOne from "./img/01.png";
import cartTwo from "./img/02.png";
import cartThree from "./img/03.png";
import cartFour from "./img/04.png";
import cartFive from "./img/05.png";
import cartSix from "./img/06.png";

export function App() {
  const [container, setCart] = useState("container");
  const arrImg = [cartOne, cartTwo, cartThree, cartFour, cartFive, cartSix];
  const g = arrImg.map((elem, index) => {
    return (
      <div
        key={index}
        className="cart"
        onClick={() =>
          setCart(container === "container" ? "container a" : "container")
        }
      >
        <img className="img" src={elem}></img>
      </div>
    );
  });
  return (
    <>
      <div className="selector">
        <div className={container}>{g}</div>
      </div>
    </>
  );
}
