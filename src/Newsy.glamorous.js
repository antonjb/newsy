import glamorous from "glamorous";
import { rhythm } from "./styling/typography";
import { mediaQueries } from "./styling/media_queries";

export const StyledNewsy = glamorous.div({
  display: "grid",
  gridTemplateColumns:
    "[full-start container-start] 1fr [container-end full-end]",
  [mediaQueries.sm]: {
    gridTemplateColumns:
      "[full-start] 0.25fr [container-start] repeat(2, 1fr) [container-end] 0.25fr [full-end]",
  },
  [mediaQueries.md]: {
    gridTemplateColumns:
      "[full-start] 0.5fr [container-start] repeat(3, 1fr) [container-end] 0.5fr [full-end]",
  },
});

export const StyledTitle = glamorous.h1({
  gridColumn: "container",
  textAlign: "center",
  padding: rhythm(0.5),
  margin: 0,
});
