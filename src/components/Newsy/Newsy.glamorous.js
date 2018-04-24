import glamorous from "glamorous";
import { rhythm, MediaQueries, Colors, Grid } from "../../styling/";

export const StyledNewsy = glamorous.main({
  display: "grid",
  gridTemplateColumns:
    "[full-start] 0.05fr [container-start] 1fr [container-end] 0.05fr [full-end]",
  marginBottom: rhythm(1),
  [MediaQueries.minWidth.sm]: {
    gridTemplateColumns:
      "[full-start] 0.25fr [container-start] repeat(2, 1fr) [container-end] 0.25fr [full-end]",
  },
  [MediaQueries.minWidth.md]: {
    gridTemplateColumns:
      "[full-start] 0.5fr [container-start] repeat(3, 1fr) [container-end] 0.5fr [full-end]",
  },
});

export const StyledTitle = glamorous.h1(Grid.GridContainer, {
  textAlign: "center",
  padding: rhythm(0.5),
  margin: 0,
  "& a": {
    display: "inline-block",
    color: Colors.dark,
    textDecoration: "none",
    transition: "transform 0.2s ease-in",
    "&:hover, &:focus": {
      transform: "scale(1.1)",
    },
  },
});
