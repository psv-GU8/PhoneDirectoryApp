import React, { Component } from "react";

class Header extends Component {
  Styles = {
    headerContainer: {
      background: "#000",
      color: "#fff"
    },
    headerTitle: {
      padding: 20,
      fontSize: 16
    }
  };
  render() {
    return (
      <div style={this.Styles.headerContainer}>
        <div style={this.Styles.headerTitle}>{this.props.title}</div>
      </div>
    );
  }
}

export default Header;
