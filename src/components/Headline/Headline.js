import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  StyledHeadline,
  StyledHeadlineAnchor,
  StyledHeadlineImage,
  StyledHeadKicker,
  StyledSubHeading,
  StyledTopic,
} from "./Headline.glamorous";

function HeadlineWrapper({ href, labelledby, children }) {
  return href ? (
    <StyledHeadlineAnchor href={href} aria-labelledby={labelledby}>
      {children}
    </StyledHeadlineAnchor>
  ) : (
    <Fragment>{children}</Fragment>
  );
}

const Headline = ({ id, heading, image, topic, headKicker, alt, href }) => {
  const titleId = `title-${id}`;

  return (
    <StyledHeadline>
      <HeadlineWrapper href={href} aria-labelledby={titleId}>
        <StyledHeadlineImage src={image} alt={alt} />
        <StyledHeadKicker className="bgHover" id={titleId}>
          {headKicker}
        </StyledHeadKicker>
        <StyledSubHeading className="bgHover">{heading}</StyledSubHeading>
        <StyledTopic>{topic.id}</StyledTopic>
      </HeadlineWrapper>
    </StyledHeadline>
  );
};

Headline.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  topic: PropTypes.object.isRequired,
  headKicker: PropTypes.string.isRequired,
  alt: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Headline.defaultProps = {
  alt: "",
  href: false,
};

export default Headline;
