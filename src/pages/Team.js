import React from "react";
import "./pages.css";
import Topbar2 from "../layout/Topbar2";
import PreFooter from "../components/PreFooter";
import Footer from "../layout/Footer";
import { Container } from "reactstrap";
import TeamHead from "../components/TeamHead";
import Members from "../components/Members";

const Team = () => {
  return (
    <div>
      <Container>
        <Topbar2 />
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
