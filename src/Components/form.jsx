import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <div>
            <input type="text" name="city" placeholder="City. . ." />

            <input type="text" name="country" placeholder="Country. . ." />

            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
