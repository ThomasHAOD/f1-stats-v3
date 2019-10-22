import React, { Component } from "react";
import "./OptionsContainer.scss";

export default class OptionsContainer extends Component {
  render() {
    return (
      <div className="options-container">
        <h1>Options Go Here</h1>

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
      </div>
    );
  }
}
