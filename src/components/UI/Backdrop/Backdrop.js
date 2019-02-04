import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = ({ show }) =>
  show ? <div className={classes.Backdrop} /> : null;

export default backdrop;
