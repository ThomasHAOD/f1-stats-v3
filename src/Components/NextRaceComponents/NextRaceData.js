import React from "react";

const NextRaceData = props => {
  return (
    <div>
      <h1>
        Next Race: {props.nextRace.raceName} - {props.nextRace.season}
      </h1>
    </div>
  );
};

export default NextRaceData;
