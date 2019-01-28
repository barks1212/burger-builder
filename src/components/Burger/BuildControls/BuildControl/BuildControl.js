import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = ({ label, added, removed }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less} onClick={removed}>
      Less
    </button>
    <button className={classes.More} onClick={added}>
      More
    </button>
  </div>
);

export default buildControl;
