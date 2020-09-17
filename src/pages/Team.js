import React from "react";
import "./pages.css";
import TeamBar from "../layout/TeamBar";
import PreFooter from "../components/PreFooter";
import Footer from "../layout/Footer";
import { Container } from "reactstrap";
import TeamHead from "../components/TeamHead";
import Members from "../components/Members";
import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team - Indicina Technolgies</title>
        <link rel="canonical" href="http://abdulqudus.com" />
      </Helmet>
      <Container>
        <TeamBar />
      </Container>
      <div>
        <TeamHead />
      </div>
      <div className="middleSect" style={{ paddingBottom: "100px" }}>
        <Members />
      </div>
      <div>
        <div className="preFooterBg">
          <PreFooter />
        </div>
        <div className="FooterBg">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Team;
