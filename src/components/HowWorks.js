import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const HowWorks = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Card body className="cardHero" style={{ height: "400px" }}>
            <CardTitle className="works">Customer Acquisiton</CardTitle>
            <b>PRODUCT DESIGN & DEVELOPMENT</b>
            <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
              <ul style={{ paddingLeft: "20px" }}>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Identification of target client segments
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Product value proposition
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Pricing
                </li>
              </ul>
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body className="cardHero" style={{ height: "400px" }}>
            <CardTitle className="works">Loss Management</CardTitle>
            <b>FRAUD MANAGEMENT & COLLECTIONS</b>
            <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
              <ul style={{ paddingLeft: "20px" }}>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Fraud detection
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Collection policies
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Collection measures
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Early warning framework
                </li>
              </ul>
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body className="cardHero" style={{ height: "430px" }}>
            <CardTitle className="works">Operations & Underwriting</CardTitle>
            <b>RISK ASSESSMENT</b>
            <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
              <ul style={{ paddingLeft: "20px" }}>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Risk Analysis Critetia
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Scoring Models
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Behavioral Underwriting
                </li>
              </ul>
              <b>PROCESSING</b>
              <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
                <ul style={{ paddingLeft: "20px" }}>
                  <li
                    style={{
                      listStyleType: "square",
                      fontSize: "17px",
                      lineHeight: "1.2rem",
                      paddingBottom: "5px",
                      paddingTop: "5px",
                    }}
                  >
                    Application processing
                  </li>
                  <li
                    style={{
                      listStyleType: "square",
                      fontSize: "17px",
                      lineHeight: "1.2rem",
                      paddingBottom: "5px",
                      paddingTop: "5px",
                    }}
                  >
                    Authorization / Credit approval
                  </li>
                </ul>
              </CardText>
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body className="cardHero" style={{ height: "430px" }}>
            <CardTitle className="works">Portfolio Management</CardTitle>
            <b>CUSTOMER CARE</b>
            <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
              <ul style={{ paddingLeft: "20px" }}>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Credit line managemet
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Cross-sell / up-sell
                </li>
              </ul>
            </CardText>
            <b>ACCOUNT MANAGEMENT</b>
            <CardText style={{ fontSize: "1.3rem", lineHeight: "1.1em" }}>
              <ul style={{ paddingLeft: "20px" }}>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Results measurement
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Incident resolution
                </li>
                <li
                  style={{
                    listStyleType: "square",
                    fontSize: "17px",
                    lineHeight: "1.2rem",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                  }}
                >
                  Customer information system
                </li>
              </ul>
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HowWorks;
