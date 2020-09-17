import React from "react";
import { Container, Row, Col } from "reactstrap";
import OriginateImg from "../assets/originate.png";
import "./components.css";

const Originate = () => {
  return (
    <div className="container">
      <Container style={{ marginBottom: "50px" }}>
        <Row xs="6" lg="12" md="12" sm="12">
          <Col xs="6" style={{ marginTop: "40px" }} className="columnStyle">
            <h1
              style={{
                fontSize: "30px",
                color: "#0073e7",
                fontWeight: "500",
                paddingBottom: "20px",
              }}
            >
              Originate
            </h1>
            <h3 style={{ fontSize: "20px", fontWeight: "400px" }}>
              Digitize your credit value chain across all customer segments
            </h3>
            <ul>
              <li
                style={{
                  listStyleType: "square",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "2.15rem",
                  paddingBottom: "10px",
                }}
              >
                Optimize default rates with increased application acceptance
                rates
              </li>
              <li
                style={{
                  listStyleType: "square",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "2.15rem",
                  paddingBottom: "10px",
                }}
              >
                Originate and manage lending using digital technology and
                advanced analytics
              </li>
              <li
                style={{
                  listStyleType: "square",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "2.15rem",
                  paddingBottom: "10px",
                }}
              >
                We offer a data-driven approach to credit underwriting. Lenders
                (both Bank and Non-bank) can now underwrite risk intelligently
                at scale
              </li>
            </ul>
          </Col>
          <Col xs="6" className="columnStyle">
            <img
              src={OriginateImg}
              alt="Originate"
              style={{
                maxWidth: "100%",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Originate;
