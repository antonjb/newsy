import typography from "typography";

const systemFont = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
];

const typo = new typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerWeight: 100,
  headerFontFamily: systemFont,
  bodyFontFamily: systemFont,
});

typo.injectStyles();

const rhythm = typo.rhythm;

export default typo;

export { rhythm };
