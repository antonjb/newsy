import React from "react";
import PropTypes from "prop-types";
import { StyledHeadline } from "./Headline.glamorous";

const Headline = ({ content }) => (
  <StyledHeadline>
    <h2>{content.homepageHead}</h2>
    <p>{content.homepageTeaser}</p>
  </StyledHeadline>
);

Headline.propTypes = {
  content: PropTypes.object,
};

export default Headline;
