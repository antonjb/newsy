import glamorous from "glamorous";
import { rhythm } from "../../styling/typography";
import { GridFull } from "../../styling/grid";
import { minWidth } from "../../styling/media_queries";
import { dark, light } from "../../styling/colors";

export const StyledHeadline = glamorous.article(GridFull, {
  marginBottom: rhythm(1),
  display: "grid",
  gridTemplateAreas: `
    "heading"
    "image"
    "subHeading"
  `,
  [minWidth.sm]: {
    gridGap: rhythm(0.25),
    gridTemplateAreas: `
      "... ... ... ..."
      "... heading subHeading subHeading"
      "... ... subHeading subHeading"
      "... ... topic ..."
      "... ... ... ..."
    `,
    "&:hover .bgHover, &:focus .bgHover": {
      transform: "translateY(-2px)",
    },
  },
  "& .bgHover": {
    transition: "transform 0.1s ease-in",
  },
});

export const StyledHeadlineAnchor = glamorous.a({
  display: "contents",
  textDecoration: "none",
});

export const StyledHeadlineImage = glamorous.img({
  gridArea: "image",
  width: "100%",
  maxHeight: "60vh",
  objectFit: "cover",
  margin: 0,
  [minWidth.sm]: {
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
  [minWidth.sm]: {
    display: "block",
  },
});
