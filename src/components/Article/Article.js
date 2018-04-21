import React from "react";
import PropTypes from "prop-types";
import {
  StyledArticle,
  StyledArticleAnchor,
  StyledArticlePoster,
  StyledArticleTitle,
} from "./Article.glamorous";

const Article = ({ content }) => (
  <StyledArticle>
    <StyledArticleAnchor href={`/article/${content.id}`}>
      <StyledArticlePoster src={content.mainImage.reference} alt="" />
      <StyledArticleTitle>{content.homepageHead}</StyledArticleTitle>
      <p>{content.homepageTeaser}</p>
    </StyledArticleAnchor>
  </StyledArticle>
);

Article.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Article;
