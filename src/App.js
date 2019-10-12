import React from "react";

import Titles from "./Components/titles";
import Form from "./Components/form";
import Weather from "./Components/weather";

import Sm from "./Components/sm";

const API_KEY = "4ad3593a5feaa5b99d9936ee87e4abd4";

class App extends React.Component {
  state = {
    temerature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    
    e.preventDefault();
    this.setState({temerature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      error: undefined})
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data.message);
    console.log(data);

    if (city && country && data.message === undefined) {
      this.setState({
        temerature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter the city and country"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className=" title-container">
                <Titles />
              </div>
              <div className=" form-container">
                <Form getWeather={this.getWeather} />
                <Weather Weather={this.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
