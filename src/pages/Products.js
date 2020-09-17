import React, { Fragment } from "react";
import "./pages.css";
import Originate from "../components/Originate";
import PreFooter from "../components/PreFooter";
import Footer from "../layout/Footer";
import EngineSide from "../components/EngineSide";
import ProductHead from "../components/ProductHead";
import HowWorks from "../components/HowWorks";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import ProductsBar from "../layout/ProductsBar";

const Products = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products - Indicina Technolgies</title>
        <link rel="canonical" href="http://abdulqudus.com" />
      </Helmet>
      <Container>
        <ProductsBar/>
      </Container>
      <div>
        <ProductHead />
      </div>
      <div className="middleSect" style={{ paddingBottom: "100px" }}>
        <Originate />
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "100px",
            paddingTop: "100px",
            color: "#0073e7",
            fontWeight: "600",
          }}
        >
          How it works
        </h1>
        <Container>
          <HowWorks />
        </Container>
      </div>
      <div style={{ paddingTop: "100px" }}>
        <EngineSide />
      </div>
      <div>
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

export default Products;
