import React, { Fragment } from "react";

const NumOfWins = props => {
  const races = props.allRaces;
  let numOfWins = 0;
  races.forEach(race => {
    if (race.Results[0].position === "1") {
      numOfWins += 1;
    }
  });

  return <div id="num-of-wins">{numOfWins}</div>;
};

export default NumOfWins;
