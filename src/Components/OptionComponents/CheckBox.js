import React, { Component } from "react";
import "./CheckBox.scss";

 const CheckBox = props => {

    return (
      <label className="checker">
        <input className="checkbox" type="checkbox" />
        <div className="check-bg"></div>
        <div className="checkmark">
          <svg viewBox="0 0 100 100">
            <path
              d="M20,55 L40,75 L77,27"
              fill="none"
              stroke="#FFF"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </label>
    );
  }


export default CheckBox;