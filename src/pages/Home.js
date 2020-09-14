import React, { Fragment } from "react";
import "./pages.css";
import Topbar2 from "../layout/Topbar2";
import Landing from "../components/Landing";
import Fix from "../components/Fix";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Topbar2 />
        <Landing/>
        <Fix/>
      </div>
    </Fragment>
  );
};

export default Home;
