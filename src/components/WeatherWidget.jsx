import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherWidget extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.weathers.name}</h1>
        <h2>Temp: {Math.floor(this.props.weathers.main.temp - 273.15)}°</h2>
        <h3>Wind: {this.props.weathers.wind.speed} km/h</h3>
        <h3>Humidity:{this.props.weathers.main.humidity}</h3>
      </div>
    );
  }
}

export default connect()(WeatherWidget);
