import React from "react";

const RetirementPercentage = props => {
  const starts = props.allRaces.length;
  const races = props.allRaces;
  let retirementPercentage = 0;

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
    retirementPercentage = ((getRetirements() / starts) * 100).toFixed(2);
  }

  return <div id="retirement-percentage">{retirementPercentage}%</div>;
};

export default RetirementPercentage;
