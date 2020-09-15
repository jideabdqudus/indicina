import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const Fix = () => {
  return (
    <div
      className="container"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <h1
        style={{
          textAlign: "center",
          paddingBottom: "100px",
          color: "#0073e7",
          fontWeight: "600",
        }}
      >
        What we're trying to fix
      </h1>
      <Row>
        <Col sm="6">
          <Card body className="cardHero">
            <CardTitle className="cardTitle">11%</CardTitle>
            <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
              Only 11% of Africa’s population have their credit information
              recorded by private credit bureaus vs 17% in Emerging Asia
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body className="cardHero">
            <CardTitle className="cardTitle">17%</CardTitle>
            <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
              Only 17% of African banking customers have consumer loans,
              compared to over 97% with a transactional product
            </CardText>
          </Card>
        </Col>
        <Col>
          <Card body className="cardHero">
            <CardTitle className="cardTitle">8%</CardTitle>
            <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
              Credit bureau coverage in Nigeria is only 8% - this puts a major
              brake on consumer lending and creates a need for improved consumer
              credit models
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Fix;
