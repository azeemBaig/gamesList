import React from "react";

import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list-container">
      <div className="display">
        {props.games.map((game, key) => (
          <Card game={game} key={key} />
        ))}
      </div>
    </div>
  );
};
