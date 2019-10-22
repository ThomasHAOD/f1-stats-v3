import React, { Component } from "react";
import "./CheckBox.scss";

export default class CheckBox extends Component {
  render() {
    return (
      <label class="checker">
        <input class="checkbox" type="checkbox" />
        <div class="check-bg"></div>
        <div class="checkmark">
          <svg viewBox="0 0 100 100">
            <path
              d="M20,55 L40,75 L77,27"
              fill="none"
              stroke="#FFF"
              stroke-width="15"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </label>
    );
  }
}
