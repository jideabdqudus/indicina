import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavbarText,
  Container,
} from "reactstrap";

import { Link } from "react-router-dom";

import Logo from "../assets/indicina-logo.svg";
import "./layout.css";

const Topbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar color="#fff" light expand="md" className="sticky">
        <NavbarBrand
          href="/"
          style={{
            paddingRight: "15px",
            paddingLeft: "13rem",
          }}
        >
          <img src={Logo} alt="Indicina Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavbarText>
            <Link to="/" style={myActiveItem}>
              Home
            </Link>
          </NavbarText>
          <NavbarText>
            <Link to="/products" style={myItem}>
              Products
            </Link>
          </NavbarText>
          <NavbarText>
            <Link to="/team" style={myItem}>
              Team
            </Link>
          </NavbarText>
          <NavbarText
            style={{
              paddingLeft: "15px",
              paddingRight: "13rem",
            }}
          >
            <Button style={{ backgroundColor: "#0073e7", color: "#fff" }}>
              <span
                style={{
                  padding: "20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Contact
              </span>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  );
};

const myActiveItem = {
  float: "right",
  fontSize: "15px",
  marginRight: "40px",
  fontWeight: "bold",
  color: "#0073e7",
  textDecoration: "none",
};

const myItem = {
  float: "right",
  fontSize: "15px",
  marginRight: "40px",
  fontWeight: "bold",
  color: "#7f8791",
  textDecoration: "none",
};

export default Topbar2;
