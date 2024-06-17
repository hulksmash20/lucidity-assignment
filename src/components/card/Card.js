import React from "react";
import classes from "./Card.module.css";

function Card({ icon, heading, data }) {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.headingDiv}>
        <div className={classes.heading}>{heading}</div>
        <div className={classes.value}>{data}</div>
      </div>
    </div>
  );
}

export default Card;
