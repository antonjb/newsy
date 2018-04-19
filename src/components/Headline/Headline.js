import React from "react";
import PropTypes from "prop-types";
import {
  StyledHeadline,
  StyledHeadlineAnchor,
  StyledHeadlineImage,
  StyledHeadKicker,
  StyledSubHeading,
  StyledTopic,
} from "./Headline.glamorous";

const Headline = ({ content }) => {
  const titleId = `title-${content.id}`;

  return (
    <StyledHeadline>
      <StyledHeadlineAnchor href={content.slug} aria-labelledby={titleId}>
        <StyledHeadlineImage src={content.mainImage.reference} alt="" />
        <StyledHeadKicker className="bgHover" id={titleId}>
          {content.headKicker}
        </StyledHeadKicker>
        <StyledSubHeading className="bgHover">
          {content.heading}
        </StyledSubHeading>
        <StyledTopic>{content.primaryTopic}</StyledTopic>
      </StyledHeadlineAnchor>
    </StyledHeadline>
  );
};

Headline.propTypes = {
  content: PropTypes.object,
};

export default Headline;
