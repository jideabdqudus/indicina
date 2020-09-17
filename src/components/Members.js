import React from "react";
import { Container, Row, Col } from "reactstrap";
import Yvonne from "../assets/yvonne-johnson.png";
import Yemi from "../assets/yemi-ajao.png";
import Jacob from "../assets/jacob-ayokunle.png";
import Carlos from "../assets/carlos-del-carpio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./components.css";

const Members = () => {
  return (
    <Container>
      <Row>
        <Col xs="6" className="columnStyle">
          <Row>
            <Col xs="6" className="columnStyle">
              {" "}
              <figure className="backPaper">
                <img
                  src={Yvonne}
                  alt="Yvonne"
                  height="300px"
                  style={{ borderRadius: "10px" }}
                />
              </figure>
            </Col>
            <Col xs="6" className="columnStyle">
              <h1
                className="figureStyle"
                style={{
                  color: "#0073e7",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Yvonne Johnson
              </h1>
              <p>CEO/Co-Founder</p>
              <a href="https://linkedin.com/in/jideabdqudus" target="__blank">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#0073e7"
                  size="2x"
                  className="iconStyle"
                />
              </a>
            </Col>
          </Row>{" "}
        </Col>
        <Col xs="6" className="columnStyle">
          <Row>
            <Col xs="6" className="columnStyle">
              {" "}
              <figure className="backPaper">
                <img
                  src={Yemi}
                  alt="Yemi"
                  height="300px"
                  style={{ borderRadius: "10px" }}
                />
              </figure>
            </Col>
            <Col xs="6" className="columnStyle">
              <h1
                className="figureStyle"
                style={{
                  color: "#0073e7",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Yemi Ajao
              </h1>
              <p>CFO/Co-Founder</p>{" "}
              <a href="https://linkedin.com/in/jideabdqudus" target="__blank">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#0073e7"
                  size="2x"
                  className="iconStyle"
                />
              </a>
            </Col>
          </Row>{" "}
        </Col>
      </Row>
      <Row>
        <Col xs="6" className="columnStyle">
          <Row>
            <Col xs="6" className="columnStyle">
              {" "}
              <figure className="backPaper">
                <img
                  src={Jacob}
                  alt="Jacob"
                  height="300px"
                  style={{ borderRadius: "10px" }}
                />
              </figure>
            </Col>
            <Col xs="6" className="columnStyle">
              <h1
                className="figureStyle"
                style={{
                  color: "#0073e7",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Jacob Ayokunle
              </h1>
              <p>CTO</p>{" "}
              <a href="https://linkedin.com/in/jideabdqudus" target="__blank">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#0073e7"
                  size="2x"
                  className="iconStyle"
                />
              </a>
            </Col>
          </Row>{" "}
        </Col>
        <Col xs="6" className="columnStyle">
          <Row>
            <Col xs="6" className="columnStyle">
              {" "}
              <figure className="backPaper">
                <img
                  src={Carlos}
                  alt="Carlos"
                  height="300px"
                  style={{ borderRadius: "10px" }}
                />
              </figure>
            </Col>
            <Col xs="6" className="columnStyle">
              <h1
                className="figureStyle"
                style={{
                  color: "#0073e7",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Carlos Del Carpio
              </h1>
              <p>CDO</p>{" "}
              <a href="https://linkedin.com/in/jideabdqudus" target="__blank">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#0073e7"
                  size="2x"
                  className="iconStyle"
                />
              </a>
            </Col>
          </Row>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Members;
