import React from "react";
import classes from "./goodsCard.module.css";

function GoodsCard(props) {
  return (
    <div className={classes.card}>
      <div className={`${classes.imageContainer} image-container`}>
        <a href="">
          <img src={props.img} className={classes.image} alt="Зображення" />
        </a>
      </div>
      <div className={`${classes.cardText} name`}>{props.name}</div>
      <div className={`${classes.cardText} price`}>Cost: {props.price}</div>
    </div>
  );
}

export default GoodsCard;
