import React, { Component } from 'react';

class UserDialogue extends Component {
  render() {
    return (
      <div className="User-div">
        <p className="User-dialogue">{this.props.dialogue}</p>
      </div>
    );
  }
}

export default UserDialogue;