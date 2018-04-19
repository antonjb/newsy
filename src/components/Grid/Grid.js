import glamorous from "glamorous";
import { mediaQueries } from "../../styling/media_queries";

const Grid = glamorous.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "0.5rem",
  [mediaQueries.sm]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export default Grid;
