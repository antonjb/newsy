import glamorous from "glamorous";
import { Colors, rhythm } from "../../styling";

export const StyledArticle = glamorous.article({
  display: "flex",
});

export const StyledArticleAnchor = glamorous.a({
  display: "flex",
  flexDirection: "column",
  padding: rhythm(0.5),
  margin: 0,
  textDecoration: "none",
  color: Colors.dark,
  border: `1px solid ${Colors.grey100}`,
  borderRadius: 4,
  outline: 0,
  transition: "border-color 0.3s ease-in",
  "& p": {
    marginBottom: rhythm(0.5),
  },
  "&:hover, &:focus": {
    borderColor: Colors.primary,
  },
});

export const StyledArticlePoster = glamorous.img({
  marginBottom: rhythm(0.2),
  height: 150,
  objectFit: "cover",
  objectPosition: "50%",
});

export const StyledArticleTitle = glamorous.h2({
  marginBottom: rhythm(0.25),
});
