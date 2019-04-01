import React, { Component } from "react";

class SamDialogue extends Component {
  render() {
    return (
      <div className="Sam-div">
        <p className="Sam-dialogue">{this.props.dialogue}</p>
      </div>
    );
  }
}

export default SamDialogue;
