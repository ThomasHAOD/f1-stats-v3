import React from "react";
import Table from "react-bootstrap/Table";

const DriverCareerStats = props => {
  return (
    <div className="stats-table" id="driver-stats-table">
      <Table striped bordered hover variant="dark">
        

        <tbody>
        <tr>
            <th>Career Wins</th>
            <td>##</td>
            
          </tr>
          <tr>
            <th>Career Poles</th>
            <td>99</td>
            
          </tr>
          <tr>
            <th>World Championships</th>
            <td>99</td>
            
          </tr>
          <tr>
            <th>Constructor's Championships</th>
            <td colSpan="">17</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DriverCareerStats;
