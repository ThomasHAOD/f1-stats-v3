import React, { Fragment } from "react";

const Retirements = props => {
  const races = props.allRaces;
  let retirements = 0;

  function getRetirements() {
    let count = 0;
    races.forEach(race => {
      if (race.Results[0].positionText === "R") {
        count += 1;
      }
    });
    return count;
  }

  if (getRetirements()) {
    retirements = getRetirements();
  }

  return <div id="average-finish">{retirements}</div>;
};

export default Retirements;
