import React, { Component } from "react";

class Weather extends Component {
  state = {};
  render() {
    return (
      <div className="weather__info">
        {this.props.Weather.city && (
          <p className="weather__key">
            Temerature :-
            <span className="weather__value">
              {this.props.Weather.temerature}{" "}
            </span>
            <br />
            City :-
            <span className="weather__value">{this.props.Weather.city}</span>
            <br />
            Country :-
            <span className="weather__value">{this.props.Weather.country}</span>
            <br />
            description :-
            <span className="weather__value">
              {this.props.Weather.description}
            </span>
          </p>
        )}

        <br />
        <p className="weather__error">{this.props.Weather.error}</p>
      </div>
    );
  }
}

export default Weather;
