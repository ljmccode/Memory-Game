import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card" onClick={() => props.ClickCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default AnimalCard;