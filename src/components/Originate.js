import React from "react";
import { Container, Row, Col } from "reactstrap";
import OriginateImg from "../assets/originate.png";
import "./components.css";

const Originate = () => {
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
        How we're trying to fix it
      </h1>
      <Container>
        <Row>
          <Col xs="6">
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
                  fontSize: "17px",
                  fontWeight: "500",
                  lineHeight:"2.15rem",
                  paddingBottom:"10px"
                }}
              >
                Optimize default rates with increased application acceptance
                rates
              </li>
              <li
                style={{
                  listStyleType: "square",
                  fontSize: "17px",
                  fontWeight: "500",
                  lineHeight:"2.15rem",
                  paddingBottom:"10px"
                }}
              >
                Originate and manage lending using digital technology and
                advanced analytics
              </li>
              <li
                style={{
                  listStyleType: "square",
                  fontSize: "17px",
                  fontWeight: "500",
                  lineHeight:"2.15rem",
                  paddingBottom:"10px"
                }}
              >
                We offer a data-driven approach to credit underwriting. Lenders
                (both Bank and Non-bank) can now underwrite risk intelligently
                at scale
              </li>
            </ul>
          </Col>
          <Col xs="6">
            <aside>
              <figure>
                <img
                  src={OriginateImg}
                  alt="Originate"
                  style={{ maxWidth: "100%" }}
                />
              </figure>
            </aside>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Originate;
