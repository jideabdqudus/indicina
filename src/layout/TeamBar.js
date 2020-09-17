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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { Link } from "react-router-dom";

import Logo from "../assets/indicina-logo.svg";
import "./layout.css";

const TeamBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);

  const toggle2 = () => setModal(!modal);

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
            <Link to="/" style={myItem}>
              Home
            </Link>
          </NavbarText>
          <NavbarText>
            <Link to="/products" style={myItem}>
              Products
            </Link>
          </NavbarText>
          <NavbarText>
            <Link to="/team" style={myActiveItem}>
              Team
            </Link>
          </NavbarText>
          <NavbarText>
            <Button
              style={{ backgroundColor: "#0073e7", color: "#fff" }}
              onClick={toggle2}
            >
              <span>Contact</span>
            </Button>
            <Modal isOpen={modal} toggle={toggle2}>
              <ModalHeader toggle={toggle2}>Contact the Developer</ModalHeader>
              <ModalBody>
                This website was built by{" "}
                <a href="https://abdulqudus.com" target="__blank">
                  Jide Abdul-Qudus
                </a>{" "}
                from scratch using React JS, Bootstrap & CSS. I spent
                approximately 16 hours writing the codes for this project.
                <br />
                <br />
                The code can be found in my github page, visit{" "}
                <a href="https://github.com/jideabdqudus">
                  https://github.com/jideabdqudus
                </a>
                <br />
                <br />
                For more projects check out{" "}
                <a href="https://abdulqudus.com" target="__blank">
                  my portfolio
                </a>
                <br />
                Gracias!
                <br />
              </ModalBody>
              <ModalFooter>© 2020 The Qoder</ModalFooter>
            </Modal>
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

export default TeamBar;
