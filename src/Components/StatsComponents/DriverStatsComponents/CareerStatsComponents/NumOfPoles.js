import React, { Fragment } from "react";

const NumOfPoles = props => {
  const races = props.allRaces;
  let numOfPoles = 0;
  races.forEach(race => {
    if (race.Results[0].grid === "1") {
      numOfPoles += 1;
    }
  });

  return <div id="num-of-poles">{numOfPoles}</div>;
};

export default NumOfPoles;
