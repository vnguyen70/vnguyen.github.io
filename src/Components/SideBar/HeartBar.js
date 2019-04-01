import React, { Component } from "react";

import heartOn from "../../Assets/heart-on.png";
import heartOff from "../../Assets/heart-off.png";

import "../../App.css";

var topIcon = heartOn;
var midIcon = heartOn;
var botIcon = heartOn;

class HeartBar extends Component {
  getIcons() {
    if (this.props.heartCount === 0) {
      topIcon = heartOff;
      midIcon = heartOff;
      botIcon = heartOff;
    } else if (this.props.heartCount === 1) {
      topIcon = heartOn;
      midIcon = heartOff;
      botIcon = heartOff;
    } else if (this.props.heartCount === 2) {
      topIcon = heartOn;
      midIcon = heartOn;
      botIcon = heartOff;
    } else if (this.props.heartCount === 3) {
      topIcon = heartOn;
      midIcon = heartOn;
      botIcon = heartOn;
    }
  }

  render() {
    this.getIcons();
    return (
      <div className="Side-bar" id="Hearts-bar">
        <img
          src={topIcon}
          className="Side-icon"
          id="Heart-icon"
          alt="heart icon"
        />
        <img
          src={midIcon}
          className="Side-icon"
          id="Heart-icon"
          alt="heart icon"
        />
        <img
          src={botIcon}
          className="Side-icon"
          id="Heart-icon"
          alt="heart icon"
        />
      </div>
    );
  }
}

export default HeartBar;
