import React from "react";
import "./Card.css";

function Card({ image, title, follows, likes, type = "album" }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt="cover" className="card-image" />
        <div className="card-footer">
          <div className="card-pill">
            {type === "song" ? `${likes} Likes` : `${follows} Follows`}
          </div>
        </div>
      </div>
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;
