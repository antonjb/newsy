import React from "react";
import { css } from "glamor";
import { H1 } from "glamorous";
import Grid from "../Grid/Grid";

const Loading = ({ className }) => (
  <Grid
    className={css({
      height: "100vh",
      width: "100vw",
      alignItems: "center",
    })}
  >
    <H1 className={className} css={{ textAlign: "center" }}>
      Newsy is loading&hellip;
    </H1>
  </Grid>
);

export default Loading;
