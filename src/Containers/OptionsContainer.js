import React, { Component } from "react";

export default class OptionsContainer extends Component {
  render() {
    return (
      <div className="options-container">
        <h1>Options Go Here</h1>

        <div class="slide">
          <input
            type="checkbox"
            value="None"
            id="slide"
            name="check"
            checked
          />
          <label for="slide"></label>
        </div>
        <div class="slide">
          <input
            type="checkbox"
            value="None"
            id="slide"
            name="check"
            checked
          />
          <label for="slideTwo"></label>
        </div>
        <div class="slide">
          <input
            type="checkbox"
            value="None"
            id="slide"
            name="check"
            checked
          />
          <label for="slide"></label>
        </div>
      </div>
    );
  }
}
