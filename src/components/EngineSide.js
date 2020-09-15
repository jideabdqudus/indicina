import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./components.css";
import Engine from "../assets/model-engine.png";

const EngineSide = () => {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Container>
        <Row>
          <Col xs="6">
            <aside>
              <figure>
                <img src={Engine} alt="Engine" style={{ maxWidth: "100%" }} />
              </figure>
            </aside>
          </Col>
          <Col xs="6">
            <h1
              style={{
                fontSize: "30px",
                color: "#0073e7",
                fontWeight: "500",
                paddingBottom: "20px",
                marginTop: "50px",
              }}
            >
              Credit Scorecard and Decision Model Engine
            </h1>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              Our flagship product is a digitized credit analysis platform to
              drive a digitally-led consumer finance strategy. <br />
              <br />
              It uses statistically sound predictive modelling and machine
              learning techniques to more efficiently identify and reject
              potentially “bad” loans during the application and underwriting
              process.
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EngineSide;
