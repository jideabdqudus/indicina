import React, { Fragment } from "react";
import { Row, Col, Button, Container } from "reactstrap";
import HeroImg from "../assets/indicina-hero-image.jpg";
import "./components.css";

const Landing = () => {
  return (
    <Fragment>
      <div
        className="backGroundHero"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="containerHero">
          <Container>
            <div style={{ maxWidth: "42.6%" }}>
              <h1 style={fontStyle}>
                Indicina is building Africa’s credit infrastructure
              </h1>
              <p style={paraStyle}>
                Our vision is to unlock the massive African consumer credit
                opportunity by enabling much-needed risk innovation
              </p>
              <Button>Contact</Button>
              <Button>Our Products</Button>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

const fontStyle = {
  paddingTop: "150px",
  fontSize: "4.25rem",
  fontWeight: "700",
  lineHeight: "1.2em",
  margin: "0 0 1.2rem",
  color: "#0073e7",
};

const paraStyle = {
  fontSize: "2rem",
  lineHeight: "1.3em",
  margin: "0 0 3rem",
};

export default Landing;
