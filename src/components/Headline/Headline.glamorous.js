import glamorous from "glamorous";
import { rhythm } from "../../styling/typography";
import { mediaQueries } from "../../styling/media_queries";
import { dark, light, primary } from "../../styling/colors";

export const StyledHeadline = glamorous.article({
  gridColumn: "1 / -1",
  marginBottom: rhythm(1),
});

export const StyledHeadlineAnchor = glamorous.a({
  display: "grid",
  gridTemplateAreas: `
    "heading"
    "image"
    "subHeading";
  `,
  textDecoration: "none",
  [mediaQueries.sm]: {
    gridGap: rhythm(0.25),
    gridTemplateAreas: `
      "... ... ... ..."
      "... heading subHeading subHeading"
      "... ... subHeading subHeading"
      "... ... topic ..."
      "... ... ... ...";
    `,
  },
  "& .bgHover": {
    transition: "transform 0.1s ease-in",
  },
  "&:hover .bgHover, &:focus .bgHover": {
    transform: "translateY(-2px)",
  },
});

export const StyledHeadlineImage = glamorous.img({
  gridArea: "image",
  margin: 0,
  [mediaQueries.sm]: {
    gridArea: "1 / 1 / -1 / -1",
  },
});

export const StyledHeadKicker = glamorous.h2({
  gridArea: "heading",
  alignSelf: "start",
  padding: rhythm(0.25),
  margin: 0,
  color: light,
  backgroundColor: dark,
});

export const StyledSubHeading = glamorous.h3({
  gridArea: "subHeading",
  padding: rhythm(0.5),
  margin: 0,
  color: light,
  backgroundColor: dark,
});

export const StyledTopic = glamorous.span({
  display: "none",
  gridArea: "topic",
  alignSelf: "start",
  padding: rhythm(0.25),
  color: dark,
  backgroundColor: light,
  [mediaQueries.sm]: {
    display: "block",
  },
});
