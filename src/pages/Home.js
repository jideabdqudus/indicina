import React, { Fragment } from "react";
import "./pages.css";
import Topbar2 from "../layout/Topbar2";
import Landing from "../components/Landing";
import Fix from "../components/Fix";
import Originate from "../components/Originate";
import PreFooter from "../components/PreFooter";
import Footer from "../layout/Footer";
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
          <Originate />
        </div>
        <div className="preFooterBg">
          <PreFooter/>
        </div>
        <div className="FooterBg">
          <Footer/>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
