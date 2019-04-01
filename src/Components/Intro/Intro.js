import React, { Component } from "react";

import "../../App.css";

import MainDialogue from "../Dialogue/MainDialogue";

import heartOn from "../../Assets/heart-on.png";
import heartOff from "../../Assets/heart-off.png";

import starOn from "../../Assets/star-on.png";
import starOff from "../../Assets/star-off.png";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.toggleIntro = this.toggleIntro.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setName = this.setName.bind(this);

    this.state = {
      currPage: "title",

      name: "",

      avatar1Disabled: true,
      avatar2Disabled: true,
      avatar3Disabled: true
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.name);
    // event.preventDefault();
  }

  getPageTitle() {
    return (
      <div>
        <div>
          <span className="dot" id="currDot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <div className="Summary-Header">
          <h3 className="Intro-TitleText">To Be a Friend</h3>
        </div>
        <h5 className="Intro-SubTitleText">
          Created by Vi Nguyen | MS Digital Media 2018 - 2019
        </h5>
        <div className="Intro-BodyDiv">
          <p className="Intro-BodyText">
            This project is a mental health application that simulates the
            experience of talking to and comforting a loved one going through
            depression. Depending on your choices, the experience will end in a
            variety of ways.
          </p>
          <br />
          <b className="Intro-BodyText">
            Warning: This experience mentions themes of mental health,
            depression, anxiety and suicide.
          </b>
          <br />
          <br />
          <br />
        </div>
        <button className="Intro-Button" onClick={() => this.getStateChange()}>
          Let's Get Started
        </button>
      </div>
    );
  }

  getPageName() {
    return (
      <div>
        <div>
          <span className="dot" />
          <span className="dot" id="currDot" />
          <span className="dot" />
        </div>
        <div className="Summary-Header">
          <h5 className="Intro-TitleText" id="SubHeaderText">
            Customize Your Profile
          </h5>

          {/* <p className="Intro-BodyText">
            To customize your experience, input your name below!
          </p> */}
        </div>
        <div className="Intro-InputDiv">
          <h5 className="Intro-InputLabel">Name</h5>
          <form>
            <input
              className="Intro-Input"
              type="text"
              name="name"
              placeholder="e.g. Quinn, John, Diane"
              autoComplete="off"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div className="Intro-InputDiv">
          <h5 className="Intro-InputLabel" id="AvatarText">
            Avatar (Future feature)
          </h5>
          <div className="Intro-InputDiv">
            <button
              className="Intro-Button"
              id="Avatar"
              disabled={this.state.avatar1Disabled}
            >
              <img
                src={starOn}
                className="Side-icon"
                id="Star-icon"
                alt="Avatar icon"
              />
            </button>
            <button
              className="Intro-Button"
              id="Avatar"
              disabled={this.state.avatar2Disabled}
            >
              <img
                src={starOn}
                className="Side-icon"
                id="Star-icon"
                alt="Avatar icon"
              />
            </button>
            <button
              className="Intro-Button"
              id="Avatar"
              disabled={this.state.avatar3Disabled}
            >
              <img
                src={starOn}
                className="Side-icon"
                id="Star-icon"
                alt="Avatar icon"
              />
            </button>
            <button
              className="Intro-Button"
              id="Avatar"
              disabled={this.state.avatar1Disabled}
            >
              <img
                src={starOn}
                className="Side-icon"
                id="Star-icon"
                alt="Avatar icon"
              />
            </button>
            <button
              className="Intro-Button"
              id="Avatar"
              disabled={this.state.avatar2Disabled}
            >
              <img
                src={starOn}
                className="Side-icon"
                id="Star-icon"
                alt="Avatar icon"
              />
            </button>
          </div>
        </div>
        <button className="Intro-Button" onClick={() => this.getStateChange()}>
          Next
        </button>
      </div>
    );
  }

  getPageIntro() {
    return (
      <div>
        <div>
          <span className="dot" />
          <span className="dot" />
          <span className="dot" id="currDot" />
        </div>
        <div className="Summary-Header">
          <h5 className="Intro-TitleText" id="SubHeaderText">
            Introductions
          </h5>
          <div className="Intro-InputDiv" id="SamIntroDiv">
            <br />
            <h5 className="Intro-InputLabel" id="SamIntroHeader">
              Sam Trevane
            </h5>
            <p className="Summary-Text">
              {" "}
              The first friend that you made in college. You fondly remember Sam
              sitting next to you during freshman orientation since you came in
              not knowing a single soul. Since then, your friendship grew as you
              bonded over playing video games and ultimate frisbee. Since you
              two graduated two years ago, you fell out of contact with Sam.
              Last you heard, Sam works as a graphic designer at a small firm
              out of state. You wonder how Sam's doing...?{" "}
            </p>
            <br />
          </div>
        </div>

        <button className="Intro-Button" onClick={() => this.startGame()}>
          Start the Experience
        </button>
      </div>
    );
  }

  getStateChange() {
    if (this.state.currPage === "title") {
      this.setState({
        currPage: "name"
      });
    } else if (this.state.currPage === "name") {
      this.handleSubmit();
      this.setState({
        currPage: "intro"
      });
    }
  }

  startGame() {
    this.toggleIntro(false);
    this.setName(this.state.name);
  }

  toggleIntro(introState) {
    this.props.toggleIntro(introState);
  }

  setName(newName) {
    this.props.setName(newName);
  }

  render() {
    return (
      <div className="Intro">
        <div className="Intro-Overlay-Box">
          {this.state.currPage === "title" && this.getPageTitle()}
          {this.state.currPage === "intro" && this.getPageIntro()}
          {this.state.currPage === "name" && this.getPageName()}
        </div>
      </div>
    );
  }
}

export default Intro;
