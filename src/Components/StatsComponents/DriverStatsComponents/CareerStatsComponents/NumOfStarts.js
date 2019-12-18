import React, { Fragment } from "react";

const NumOfStarts = props => {
  const starts = props.allRaces.length;

  return <div id="num-of-starts">{starts}</div>;
};

export default NumOfStarts;
