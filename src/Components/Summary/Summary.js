import React, { Component } from "react";

import "../../App.css";

import MainDialogue from "../Dialogue/MainDialogue";

import heartOn from "../../Assets/heart-on.png";
import heartOff from "../../Assets/heart-off.png";

import starOn from "../../Assets/star-on.png";
import starOff from "../../Assets/star-off.png";

var leftIcon = heartOn;
var middleIcon = heartOn;
var rightIcon = heartOn;
var state = "Complete!";
var disableContinue = false;

class Summary extends Component {
  constructor(props) {
    super(props);
    this.retryMonth = this.retryMonth.bind(this);
    this.continueMonth = this.continueMonth.bind(this);
  }

  retryMonth(month) {
    this.props.retryMonth(month);
  }

  continueMonth(month) {
    this.props.continueMonth(month);
  }

  getIcons(month, starCount) {
    if (month === 0) {
      // leftIcon = heartOn;
      // middleIcon = heartOn;
      // rightIcon = heartOn;
      leftIcon = starOn;
      middleIcon = starOn;
      rightIcon = starOn;
    } else {
      if (starCount === 0) {
        leftIcon = starOff;
        middleIcon = starOff;
        rightIcon = starOff;
        state = "Failed";
        disableContinue = true;
      }
      if (starCount === 1) {
        leftIcon = starOn;
        middleIcon = starOff;
        rightIcon = starOff;
        state = "Complete!";
        disableContinue = false;
      }
      if (starCount === 2) {
        leftIcon = starOn;
        middleIcon = starOn;
        rightIcon = starOff;
        state = "Complete!";
        disableContinue = false;
      }
      if (starCount >= 3) {
        leftIcon = starOn;
        middleIcon = starOn;
        rightIcon = starOn;
        state = "Complete!";
        disableContinue = false;
      }
      if (month === 24) {
        disableContinue = true;
      }
    }
  }

  render() {
    this.getIcons(this.props.month, this.props.starCount);
    return (
      <div className="Summary">
        <div className="Summary-Overlay-Box">
          <div className="Summary-Header">
            <img
              src={leftIcon}
              className="Summary-Icon"
              id="Summary-L"
              alt="heart icon"
            />
            <img
              src={middleIcon}
              className="Summary-Icon"
              id="Summary-M"
              alt="heart icon"
            />
            <img
              src={rightIcon}
              className="Summary-Icon"
              id="Summary-R"
              alt="heart icon"
            />
          </div>
          <p className="Summary-Month">Month</p>
          <p className="Summary-Num">{this.props.month}</p>
          <p className="Summary-Complete">{state}</p>
          <p className="Summary-Text">{this.props.summary}</p>
          <p className="Summary-Text">{this.props.intermission}</p>
          <div>
            <button
              className="Summary-Button"
              id="Retry"
              onClick={() => this.retryMonth(this.props.month)}
            >
              Retry
            </button>
            <button
              className="Summary-Button"
              id="Continue"
              disabled={disableContinue}
              onClick={() => this.continueMonth(this.props.month)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
