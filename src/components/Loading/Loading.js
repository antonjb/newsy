import React from "react";
import { H1 } from "glamorous";
import { GridFull } from "../../styling/grid";

const Loading = () => (
  <H1 className={GridFull} css={{ textAlign: "center" }}>
    Newsy is loading&hellip;
  </H1>
);

export default Loading;
