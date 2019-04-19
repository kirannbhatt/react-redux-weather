import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import fetchWeather from "../actions/weather-action";
import { bindActionCreators } from "redux";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Kathmandu",
      country: "np"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  loadWeather = e => {
    e.preventDefault();

    let city = this.state.city;
    let country = this.state.country;
    this.props.fetchWeather(city, country);
  };
  render() {
    return (
      <Form onSubmit={this.loadWeather}>
        <FormGroup>
          <Label>City</Label>
          <Input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Country</Label>
          <Input
            type="text"
            name="country"
            placeholder="Country"
            value={this.state.country}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch)
}
export default connect(null, mapDispatchToProps)(InputBox);
