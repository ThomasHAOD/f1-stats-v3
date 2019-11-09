import React, { Fragment } from "react";

const AverageFinishExcRetirements = props => {
  const races = props.allRaces;
  let averageFinish = 0;

  function getAverageFinish() {
    let count = 0;
    races.forEach(race => {
      if (race.Results[0].positionText === "R") {
        count += 0;
      } else {
        count += parseInt(race.Results[0].position);
      }
    });
    return parseFloat((count / races.length).toFixed(2));
  }

  if (getAverageFinish()) {
    averageFinish = getAverageFinish();
  }

  return <div id="average-finish-exc-retirements">{averageFinish}</div>;
};

export default AverageFinishExcRetirements;
