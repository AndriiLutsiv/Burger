import React from "react";
import classes from "./Layout.module.css";
import "./LayoutSpecial.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/Toolbar/SideDrawer/SideDrawer";
class Layout extends React.Component {
  state = {
    showSidebar: false,
  };
  removeSidebar = () => {
    this.setState({
      showSidebar: false,
    });
  };
  emergedSidebar = () => {
    this.setState({
      showSidebar: true,
    });
  };
  render() {
    return (
      <>
        <Toolbar emergedSidebar={this.emergedSidebar} />
        {/* <div
                  style={{
                    display: this.state.showSidebar ? "block" : "none",
                  }}
                > */}{" "}
        <SideDrawer
          removeSidebar={this.removeSidebar}
          showSidebar={this.state.showSidebar}
        />{" "}
        {/* </div> */}{" "}
        <main className={classes.Content}> {this.props.children} </main>{" "}
      </>
    );
  }
}
export default Layout;
