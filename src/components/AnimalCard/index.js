import React from "react";
import "./animalCard.css";

function AnimalCard(props) {
  return (
    <div className="card" onClick={props.animalClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default AnimalCard;