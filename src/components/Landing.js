import React from "react";
import { Row, Col, Button, Container } from "reactstrap";
import {HeroImg} from '../assets/indicina-hero-image.jpg'

const Landing = () => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <h1>Indicina is building Africa’s credit infrastructure</h1>
          <h4>
            Our vision is to unlock the massive African consumer credit
            opportunity by enabling much-needed risk innovation
          </h4>
          <Button>Contact</Button>
          <Button>Out Products</Button>
        </Col>
        <Col xs="6"><img src={HeroImg} alt="HeroImg"/></Col>
      </Row>
    </Container>
  );
};

export default Landing;
