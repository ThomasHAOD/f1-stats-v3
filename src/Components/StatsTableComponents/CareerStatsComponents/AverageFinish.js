import React, { Fragment } from "react";

const AverageFinish = props => {
  const races = props.allRaces;
  let averageFinish = 0;

  function getAverageFinish() {
    let count = 0;
    races.forEach(race => {
      if (parseInt(race.Results[0].position)) {
        count += parseInt(race.Results[0].position);
      }
    });
    return parseFloat((count / races.length).toFixed(2));
  }

  if (getAverageFinish()) {
    averageFinish = getAverageFinish();
  }

  return <div id="average-finish">{averageFinish}</div>;
};

export default AverageFinish;
