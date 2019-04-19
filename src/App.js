import React, { Component } from "react";
import InputBox from "./components/InputBox";
import WeatherWidget from "./components/WeatherWidget";

import { Card, Container, Row, Col } from "reactstrap";
import CardBody from "reactstrap/lib/CardBody";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Container className="center">
        <Row>
          <Col xs="6">
            <Card>
              <CardBody>
                <InputBox />
              </CardBody>
            </Card>
          </Col>
          <Col xs="6">
            <Card>
              <CardBody>
                {this.props.weather.map((post,i) => (
                  <WeatherWidget key={i} weathers={post} />
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state
  };
};
export default connect(mapStateToProps)(App);
