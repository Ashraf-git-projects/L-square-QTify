import React from "react";
import "./Card.css";
import Chip from "@mui/material/Chip";
import dummyImage from "../Assets/album a.png";

function Card({ image, title, follows }) {
  return (
    <div className="card">
      <img src={image} alt="album-cover" className="card-image" />
      <div className="card-footer">
        <Chip label={`${follows} Follows`} size="small" className="card-chip" />
        <div className="card-title">{title}</div>
      </div>
    </div>
  );
}


export default Card;
