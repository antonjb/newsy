import React from "react";
import PropTypes from "prop-types";

const Article = ({ content }) => (
  <article>
    <h2>{content.homepageHead}</h2>
    <p>{content.homepageTeaser}</p>
  </article>
);

Article.propTypes = {
  content: PropTypes.object,
  isHighlighted: PropTypes.bool,
};

Article.defaultProps = {
  isHighlighted: false,
};

export default Article;
