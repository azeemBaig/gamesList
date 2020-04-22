import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card card-width">
    <div className="card-body">
      <h5 className="card-title">{props.game.title}</h5>
      <p className="card-text">Platform : {props.game.platform}</p>
      <p className="card-text">Score : {props.game.score}</p>
      <p className="card-text">Genre : {props.game.genre}</p>
      <p className="card-text">Editors Choice : {props.game.editors_choice}</p>
      <p className="card-text">Release Year : {props.game.release_year}</p>
    </div>
  </div>
);
