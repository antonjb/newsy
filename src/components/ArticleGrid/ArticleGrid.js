import glamorous from "glamorous";
import { mediaQueries } from "../../styling/media_queries";

const ArticleGrid = glamorous.div({
  display: "grid",
  gridColumn: "container",
  gridTemplateColumns: "1fr",
  gridGap: "0.5rem",
  [mediaQueries.sm]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [mediaQueries.md]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export default ArticleGrid;
