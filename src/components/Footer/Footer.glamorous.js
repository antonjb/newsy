import glamorous from "glamorous";
import { rhythm, Colors } from "../../styling/";

export const StyledFooter = glamorous.footer({
  gridColumn: "-4 / -1",
  padding: rhythm(1),
  marginTop: rhythm(1),
  backgroundColor: Colors.grey100,
});
