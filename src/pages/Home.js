import React, { Fragment } from "react";
import "./pages.css";
import Topbar2 from "../layout/Topbar2";
import Landing from "../components/Landing";
import Fix from "../components/Fix";
import Originate from "../components/Originate";
import PreFooter from "../components/PreFooter";
import Footer from "../layout/Footer";
import EngineSide from "../components/EngineSide";
const Home = () => {
  return (
    <Fragment>
      <div>
        <Topbar2 />
        <Landing />
        <div className="fixBg">
          <Fix />
        </div>
        <div className="originateBg">
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "100px",
              paddingTop:"100px",
              color: "#0073e7",
              fontWeight: "600",
            }}
          >
            How we're trying to fix it
          </h1>
          <Originate />
          <EngineSide />
        </div>
        <div className="preFooterBg">
          <PreFooter />
        </div>
        <div className="FooterBg">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
