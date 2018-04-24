import "glamor/reset";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../Home";
import Footer from "../Footer/Footer";
import SingleArticle from "../SingleArticle/SingleArticle";
import { StyledNewsy, StyledTitle } from "./Newsy.glamorous";

const Newsy = () => (
  <StyledNewsy role="main">
    <StyledTitle>
      <a href="/">Newsy</a>
    </StyledTitle>
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={SingleArticle} />
      </Fragment>
    </Router>
    <Footer />
  </StyledNewsy>
);

export default Newsy;
