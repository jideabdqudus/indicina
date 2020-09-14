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

import Logo from "../assets/indicina-logo.svg";

const Topbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar color="#fff" light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} alt="Indicina Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavbarText>
            <a href="/" style={myActiveItem}>
              Home
            </a>
          </NavbarText>
          <NavbarText>
            {" "}
            <a href="/" style={myItem}>
              Products
            </a>
          </NavbarText>
          <NavbarText>
            <a href="/" style={myItem}>
              Team
            </a>
          </NavbarText>
          <NavbarText>
            <Button style={{ backgroundColor: "#0073e7", color: "#fff" }}>
              <span style={{padding:"20px", fontSize:"16px", fontWeight:"bold"}}>Contact</span>
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
