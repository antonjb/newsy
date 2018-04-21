import glamorous from "glamorous";
import { MediaQueries, Grid } from "../../styling";

const ArticleGrid = glamorous.div(Grid.GridContainer, {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: "0.5rem",
  maxWidth: MediaQueries.breakpoints.lg,
  margin: "0 auto",
  [MediaQueries.minWidth.sm]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [MediaQueries.minWidth.md]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export default ArticleGrid;
