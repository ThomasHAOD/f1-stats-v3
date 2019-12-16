import React from "react";

const NextRaceData = props => {
  const raceName = props.nextRace.raceName;
  const season = props.nextRace.season;
  return (
    <div>
      <h2>
        Next Race: The {season} {raceName}
      </h2>
    </div>
  );
};

export default NextRaceData;
