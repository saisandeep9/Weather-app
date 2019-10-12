import React, { Component } from "react";

class Titles extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="itle-container__title">Weather Finder </h1>
        <p className="title-container__subtitle">find out temperature, conditions and more</p>
      </div>
    );
  }
}

export default Titles;
