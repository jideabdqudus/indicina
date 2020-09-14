import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const Fix = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>What we're trying to fix</h1>
      <Row>
        <Col sm="6">
          <Card body className="cardHero">
            <CardTitle className="cardTitle">11%</CardTitle>
            <CardText style={{ fontSize: "2rem", lineHeight: "1.3em" }}>
              Only 11% of Africa’s population have their credit information
              recorded by private credit bureaus vs 17% in Emerging Asia and 79%
              in Latin America
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body className="cardHero">
            <CardTitle className="cardTitle">11%</CardTitle>
            <CardText style={{ fontSize: "2rem", lineHeight: "1.3em" }}>
              Only 11% of Africa’s population have their credit information
              recorded by private credit bureaus vs 17% in Emerging Asia and 79%
              in Latin America
            </CardText>
          </Card>
        </Col>
        <Card body className="cardHero">
          <CardTitle className="cardTitle">11%</CardTitle>
          <CardText style={{ fontSize: "2rem", lineHeight: "1.3em" }}>
            Only 11% of Africa’s population have their credit information
            recorded by private credit bureaus vs 17% in Emerging Asia and 79%
            in Latin America
          </CardText>
        </Card>
      </Row>
    </div>
  );
};

export default Fix;
