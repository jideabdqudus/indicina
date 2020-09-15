import React, { Fragment } from "react";
import { Button, Container } from "reactstrap";
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
              <Button style={Btn1}>Contact</Button>
              <Button style={Btn2}>Our Products</Button>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

const fontStyle = {
  fontSize: "50px",
  fontWeight: "700",
  lineHeight: "1.2em",
  margin: "0 0 1.2rem",
  color: "#0073e7",
};

const Btn1 = {
  background: "#0073e7",
  color: "#fff",
  fontWeight: "600",
  border: "1px solid transparent",
  borderRadius: "5px",
  cursor: "pointer",
  width: "140px",
};

const Btn2 = {
  background: "white",
  color: "#0073e7",
  fontWeight: "600",
  border: "1px solid #0073e7",
  borderRadius: "5px",
  cursor: "pointer",
  width: "140px",
  marginLeft: "20px",
};

const paraStyle = {
  fontSize: "25px",
  lineHeight: "1.3em",
  margin: "0 0 3rem",
};

export default Landing;
