import React, { Fragment } from "react";
import "./pages.css";
import Topbar2 from "../layout/Topbar2";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Topbar2 />
        <Landing/>
      </div>
    </Fragment>
  );
};

export default Home;
