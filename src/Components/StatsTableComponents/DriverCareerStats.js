import React from "react";
import Table from "react-bootstrap/Table";
import AverageFinish from "./CareerStatsComponents/AverageFinish";
import AverageGrid from "./CareerStatsComponents/AverageGrid";
import NumOfPoles from "./CareerStatsComponents/NumOfPoles";
import NumOfStarts from "./CareerStatsComponents/NumOfStarts";
import NumOfWins from "./CareerStatsComponents/NumOfWins";
import Retirements from "./CareerStatsComponents/Retirements";

const DriverCareerStats = props => {
  return (
    <div className="stats-table" id="driver-stats-table">
      <Table striped bordered variant="light">
        <tbody>
          <tr>
            <th>Career Starts</th>
            <td>
              <NumOfStarts allRaces={props.allRaces} />
            </td>
            <th>Average Grid</th>
            <td>
              <AverageGrid allRaces={props.allRaces} />
            </td>
          </tr>
          <tr>
            <th>Career Poles</th>
            <td>
              <NumOfPoles allRaces={props.allRaces} />
            </td>
            <th>Average Finish</th>
            <td>
              <AverageFinish allRaces={props.allRaces} />
            </td>
          </tr>
          <tr>
            <th>Career Wins</th>
            <td>
              <NumOfWins allRaces={props.allRaces} />
            </td>
          </tr>
          <tr>
            <th>Retirements</th>
            <td>
              <Retirements allRaces={props.allRaces} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DriverCareerStats;
