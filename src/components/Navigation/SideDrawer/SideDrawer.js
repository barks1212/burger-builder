import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

import classes from "./SideDrawer.module.css";

const sideDrawer = ({ open, clicked, isAuth }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={open} clicked={clicked} />
      <div className={attachedClasses.join(" ")} onClick={clicked}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={isAuth}/>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
