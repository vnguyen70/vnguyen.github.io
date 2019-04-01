import React, { Component } from "react";

import logo from "../../Assets/logo.svg";
import responseBubble from "../../Assets/response-bubble.png";

import "../../App.css";

import Intro from "../Intro/Intro";

import Summary from "../Summary/Summary";
import { summaryText } from "../Summary/summaryText";

import SamDialogue from "./SamDialogue";
import { samDialogue } from "./DialogueText/SamText";

import UserDialogue from "./UserDialogue";
import { userDialogue } from "./DialogueText/UserText";

import HeartBar from "../SideBar/HeartBar";
import StarBar from "../SideBar/StarBar";
import { delay } from "q";

// import { CSSTransitionGroup } from "react-transition-group"; // ES6

var CSSTransitionGroup = require("react-transition-group/CSSTransitionGroup"); // ES5 with npm

var month = 0;
var starCount = 1;
var heartCount = 3;
var exchange = 1;

var personality = 0;
var askedSuicide = false;
var followDream = false;
var goodEnding = false;

var debug = "hi";

var responseID1 = "u1a";
var responseID2 = "u1b";
var responseID3 = "u1c";

class MainDialogue extends Component {
  constructor() {
    super();

    this.state = {
      showIntro: true,

      nameFinal: "Quinn",

      button1Disable: false,
      button2Disable: false,
      button3Disable: false,

      hideExchange1: true,
      hideExchange2: true,
      hideExchange3: true,
      hideExchange4: true,
      hideExchange5: true,
      hideExchange6: true,
      hideExchange7: true,
      hideExchange8: true,
      hideExchange9: true,
      hideExchange10: true,
      hideExchange11: true,
      hideExchange12: true,
      hideExchange13: true,
      hideExchange14: true,
      hideExchange15: true,
      hideExchange16: true,
      hideExchange17: true,
      hideExchange18: true,
      hideExchange19: true,
      hideExchange20: true,
      hideExchange21: true,
      hideExchange22: true,
      hideExchange23: true,

      hideSam1: true,
      hideSam2: true,
      hideSam3: true,
      hideSam4: true,
      hideSam5: true,
      hideSam6: true,
      hideSam7: true,
      hideSam8: true,
      hideSam9: true,
      hideSam10: true,
      hideSam11: true,
      hideSam12: true,
      hideSam13: true,
      hideSam14: true,
      hideSam15: true,
      hideSam16: true,
      hideSam17: true,
      hideSam18: true,
      hideSam19: true,
      hideSam20: true,
      hideSam21: true,
      hideSam22: true,
      hideSam23: true,

      exchange1: " ",
      exchange2: " ",
      exchange3: " ",
      exchange4: " ",
      exchange5: " ",
      exchange6: " ",
      exchange7: " ",
      exchange8: " ",
      exchange9: " ",
      exchange10: " ",
      exchange11: " ",
      exchange12: " ",
      exchange13: " ",
      exchange14: " ",
      exchange15: " ",
      exchange16: " ",
      exchange17: " ",
      exchange18: " ",
      exchange19: " ",
      exchange20: " ",
      exchange21: " ",
      exchange22: " ",
      exchange23: " ",

      hideSummary0: true,
      hideSummary6: true,
      hideSummary12: true,
      hideSummary18: true,
      hideSummary24: true,

      shownSummary0: false,
      shownSummary6: false,
      shownSummary12: false,
      shownSummary18: false,
      shownSummary24: false,

      summary0: " ",
      summary6: " ",
      summary12: " ",
      summary18: " ",
      summary24: " ",

      props: {
        summary: this.getSummaryText,
        retryMonth: this.retryMonth
      }
    };
  }

  toggleIntro = introState => {
    this.setState({
      showIntro: introState
    });
  };

  setName = newName => {
    if (newName === "") {
      newName = "Quinn";
    }
    this.setState({
      nameFinal: newName
    });
  };

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getDateBar(text) {
    return (
      <div className="Date-bar">
        <p>{text}</p>
      </div>
    );
  }

  getUserDialogue(id) {
    return userDialogue.find(x => x.id === id).text;
  }

  getSamDialogue(id) {
    var dialogueTemp = samDialogue.find(x => x.id === id).text;
    var dialogueFinal = "";

    if (
      id === "s7a" ||
      id === "s13a2" ||
      id === "s13b2" ||
      id === "s13c2" ||
      id === "s13d3" ||
      id === "s14bD" ||
      id === "s18pre" ||
      id === "s19b2" ||
      id === "s20a" ||
      id === "s21b"
    ) {
      dialogueFinal = dialogueTemp.replace("Quinn", this.state.nameFinal);
    } else if (id === "s14preN") {
      var name = this.state.nameFinal;
      var lastLetter = name[name.length - 1];
      var combined = "";
      for (var i = 0; i < 10; i++) {
        combined = combined.concat(lastLetter);
      }
      dialogueFinal = dialogueTemp.replace(
        "Quinnnnnnnnnnnnnnn",
        name + combined
      );
    } else {
      dialogueFinal = dialogueTemp;
    }

    return dialogueFinal;
  }

  getSummaryText(id) {
    return summaryText.find(x => x.id === id).text;
  }

  samDialogueDelay(entry) {
    setTimeout(
      function() {
        this.getSamDialogue(entry);
      }.bind(this),
      3000
    );
  }

  dialogueDelay(entry) {
    // setTimeout(
    // function() {
    this.changeDialogueState(entry);
    // }.bind(this),
    // 0
    // );
  }

  toggleResponse1() {
    this.dialogueDelay(responseID1);
    // this.changeDialogueState(responseID1);
  }
  toggleResponse2() {
    this.dialogueDelay(responseID2);
    // this.changeDialogueState(responseID2);
  }
  toggleResponse3() {
    this.dialogueDelay(responseID3);
    // this.changeDialogueState(responseID3);
  }

  resetResponses() {
    this.setState({
      button1Disable: false,
      button2Disable: false,
      button3Disable: false
    });
  }

  delayDialogue() {
    var time = Math.random(5);
    var dialogue = document.querySelector(".Sam-dialogue");
    dialogue.style.setProperty("--animation-time", time + "s");
  }

  populateResponses(a, b, c) {
    this.resetResponses();

    if (a === " " || b === " " || c === " ") {
      responseID1 = a;
      responseID2 = b;
      responseID3 = c;
      if (a === " ") {
        this.setState({
          button1Disable: true
        });
      }
      if (b === " ") {
        this.setState({
          button2Disable: true
        });
      }
      if (c === " ") {
        this.setState({
          button3Disable: true
        });
      }
    } else {
      var random = this.getRandomInt(3);

      if (random === 0) {
        responseID1 = a;
        responseID2 = b;
        responseID3 = c;
      } else if (random === 1) {
        responseID1 = c;
        responseID2 = a;
        responseID3 = b;
      } else if (random === 2) {
        responseID1 = b;
        responseID2 = c;
        responseID3 = a;
      }
    }

    exchange++;
  }

  retryMonth = currMonth => {
    this.resetResponses();

    if (currMonth === 0) {
      this.setState({
        hideExchange1: true,
        hideExchange2: true,
        hideExchange3: true,
        hideExchange4: true,
        hideExchange5: true,
        hideExchange6: true,
        hideExchange7: true,

        hideSummary0: true
      });
      exchange = 1;
      month = 0;
      starCount = 1;

      responseID1 = "u1a";
      responseID2 = "u1b";
      responseID3 = "u1c";
    } else if (currMonth === 6) {
      this.setState({
        hideExchange7: true,
        hideExchange8: true,
        hideExchange9: true,
        hideExchange10: true,
        hideExchange11: true,
        hideExchange12: true,
        hideExchange13: true,

        hideSummary6: true
      });
      exchange = 7;
      month = 6;
      starCount = 1;
      heartCount = 3;

      responseID1 = "u7a";
      responseID2 = "u7b";
      responseID3 = "u7c";
    } else if (currMonth === 12) {
      this.setState({
        hideExchange13: true,
        hideExchange14: true,
        hideExchange15: true,
        hideExchange16: true,
        hideExchange17: true,

        hideSummary12: true
      });
      exchange = 14;
      month = 12;
      starCount = 1;

      if (followDream) {
        responseID1 = "u14aD";
        responseID2 = "u14bD";
        responseID3 = "u14cD";
      } else {
        responseID1 = "u14aN";
        responseID2 = "u14bN";
        responseID3 = "u14cN";
      }
    } else if (currMonth === 18) {
      this.setState({
        hideExchange17: true,
        hideExchange18: true,
        hideExchange19: true,
        hideExchange20: true,
        hideExchange21: true,

        hideSummary18: true
      });
      exchange = 18;
      month = 18;
      starCount = 1;

      responseID1 = "u18a";
      responseID2 = "u18b";
      responseID3 = " ";
    } else if (currMonth === 24) {
      this.setState({
        hideExchange21: true,
        hideExchange22: true,
        hideExchange23: true,

        hideSummary24: true
      });
      exchange = 22;
      month = 24;
      starCount = 1;

      if (goodEnding) {
        responseID1 = "u22goodA";
        responseID2 = "u22goodB";
        responseID3 = " ";
      } else {
        responseID1 = "u22badA";
        responseID2 = "u22badB";
        responseID3 = " ";
      }
    }
  };

  continueMonth = currMonth => {
    this.resetResponses();

    if (currMonth === 0) {
      this.setState({
        hideSummary0: true,
        shownSummary0: true
      });

      month = 6;
      starCount = 1;

      responseID1 = "u7a";
      responseID2 = "u7b";
      responseID3 = "u7c";
    } else if (currMonth === 6) {
      this.setState({
        hideSummary6: true,
        shownSummary6: true
      });

      month = 12;
      starCount = 1;

      if (followDream) {
        responseID1 = "u14aD";
        responseID2 = "u14bD";
        responseID3 = "u14cD";
      } else {
        responseID1 = "u14aN";
        responseID2 = "u14bN";
        responseID3 = "u14cN";
      }
    } else if (currMonth === 12) {
      this.setState({
        hideSummary12: true,
        shownSummary12: true
      });

      month = 18;
      starCount = 1;

      responseID1 = "u18a";
      responseID2 = "u18b";
      responseID3 = " ";
    } else if (currMonth === 18) {
      this.setState({
        hideSummary18: true,
        shownSummary18: true
      });

      month = 24;
      starCount = 1;

      if (goodEnding) {
        responseID1 = "u22goodA";
        responseID2 = "u22goodB";
        responseID3 = " ";
      } else {
        responseID1 = "u22badA";
        responseID2 = "u22badB";
        responseID3 = " ";
      }
    }
  };

  checkGameOver() {
    if (heartCount === 0) {
      if (month === 6) {
        this.setState({
          hideSummary6: false,
          summary6: "m6-end1"
        });
      }
    }
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  changeDialogueState(entry) {
    // *************************************************//
    // ****************** Month 0 **********************//
    // *************************************************//
    if (exchange === 1) {
      if (entry === "u1a") {
        this.setState({
          hideExchange1: false,
          exchange1: "u1a"
        });
        personality++;
      } else if (entry === "u1b") {
        this.setState({
          hideExchange1: false,
          exchange1: "u1b"
        });
        personality++;
      } else if (entry === "u1c") {
        this.setState({
          hideExchange1: false,
          exchange1: "u1c"
        });
      }
      this.populateResponses("u2a", "u2b", "u2c");
    } else if (exchange === 2) {
      if (entry === "u2a") {
        this.setState({
          hideExchange2: false,
          exchange2: "u2a"
        });
        this.populateResponses("u3a", "u3b", "u3c");
      } else if (entry === "u2b") {
        this.setState({
          hideExchange2: false,
          exchange2: "u2b"
        });
        this.populateResponses("u3d", "u3e", "u3c");
      } else if (entry === "u2c") {
        this.setState({
          hideExchange2: false,
          exchange2: "u2c"
        });
        this.populateResponses("u3f", "u3g", "u3h");
      }
    } else if (exchange === 3) {
      if (entry === "u3a") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3a"
        });
        this.populateResponses("u4a", "u4b", "u4c2");
      } else if (entry === "u3b") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3b"
        });
        this.populateResponses("u4a", "u4b", "u4c2");
      } else if (entry === "u3c") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3c"
        });
        this.populateResponses("u4c", "u4d", "u4d2");
      } else if (entry === "u3d") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3d"
        });
        this.populateResponses("u4e", "u4f", "u4g");
      } else if (entry === "u3e") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3e"
        });
        this.populateResponses("u4a", "u4b", "u4c2");
      } else if (entry === "u3f") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3f"
        });
        this.populateResponses("u4h", "u4i", "u4j");
      } else if (entry === "u3g") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3g"
        });
        personality++;
        this.populateResponses("u4h", "u4i", "u4k");
      } else if (entry === "u3h") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3h"
        });
        personality += 2;
        this.populateResponses("u4h", "u4i", "u4l");
      }
    } else if (exchange === 4) {
      if (entry === "u4a") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4a"
        });
      } else if (entry === "u4b") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4b"
        });
      } else if (entry === "u4c") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4c"
        });
      } else if (entry === "u4c2") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4c2"
        });
      } else if (entry === "u4d") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4d"
        });
      } else if (entry === "u4d2") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4d2"
        });
      } else if (entry === "u4e") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4e"
        });
      } else if (entry === "u4f") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4f"
        });
      } else if (entry === "u4g") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4g"
        });
      } else if (entry === "u4h") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4h"
        });
      } else if (entry === "u4i") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4i"
        });
      } else if (entry === "u4j") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4j"
        });
      } else if (entry === "u4k") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4k"
        });
      } else if (entry === "u4l") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4l"
        });
      }
      this.populateResponses("u5a", "u5b", "u5c");
    } else if (exchange === 5) {
      if (entry === "u5a") {
        this.setState({
          hideExchange5: false,
          exchange5: "u5a"
        });
      } else if (entry === "u5b") {
        this.setState({
          hideExchange5: false,
          exchange5: "u5b"
        });
      } else if (entry === "u5c") {
        this.setState({
          hideExchange5: false,
          exchange5: "u5c"
        });
      }
      this.populateResponses("u6a", " ", " ");
    } else if (exchange === 6) {
      if (entry === "u6a") {
        this.setState({
          hideExchange6: false,
          exchange6: "u6a"
        });
        this.populateResponses("gn", " ", " ");
      }

      // *************************************************//
      // ****************** Month 6 **********************//
      // *************************************************//
    } else if (exchange === 7) {
      if (entry === "gn") {
        this.setState({
          hideSummary0: false
        });
      } else if (entry === "u7a") {
        this.setState({
          hideExchange7: false,
          exchange7: "u7a"
        });
        this.populateResponses("u8a", "u8b", "u8c");
      } else if (entry === "u7b") {
        this.setState({
          hideExchange7: false,
          exchange7: "u7b"
        });
        this.populateResponses("u8a", "u8b", "u8c");
      } else if (entry === "u7c") {
        this.setState({
          hideExchange7: false,
          exchange7: "u7c"
        });
        this.populateResponses("u8a", "u8b", "u8c");
      }
    } else if (exchange === 8) {
      if (entry === "u8a") {
        this.setState({
          hideExchange8: false,
          exchange8: "u8a"
        });
        this.populateResponses("u9a", "u9b", "u9c");
      } else if (entry === "u8b") {
        this.setState({
          hideExchange8: false,
          exchange8: "u8b"
        });
        this.populateResponses("u9a", "u9b", "u9c");
      } else if (entry === "u8c") {
        this.setState({
          hideExchange8: false,
          exchange8: "u8c"
        });
        this.populateResponses("u9a", "u9b", "u9c");
      }
    } else if (exchange === 9) {
      if (entry === "u9a") {
        this.setState({
          hideExchange9: false,
          exchange9: "u9a"
        });
        starCount++;
        this.populateResponses("u10a", "u10b", " ");
      } else if (entry === "u9b") {
        this.setState({
          hideExchange9: false,
          exchange9: "u9b"
        });
        this.populateResponses("u10b", " ", " ");
      } else if (entry === "u9c") {
        // Bad ending
        this.setState({
          hideExchange9: false,
          exchange9: "u9c"
        });
        heartCount = 0;
        starCount = 0;
        this.populateResponses("gn", " ", " ");
      }
    } else if (exchange === 10) {
      if (entry === "gn") {
        this.setState({
          hideSummary6: false,
          summary6: "m6-end1"
        });
      } else if (entry === "u10a") {
        this.setState({
          hideExchange10: false,
          exchange10: "u10a"
        });
        this.populateResponses("u11a", "u11b", " ");
      } else if (entry === "u10b") {
        this.setState({
          hideExchange10: false,
          exchange10: "u10b"
        });
        this.populateResponses("u11a", "u11b", " ");
      }
    } else if (exchange === 11) {
      if (entry === "u11a") {
        this.setState({
          hideExchange11: false,
          exchange11: "u11a"
        });
        askedSuicide = true;
        starCount++;
        this.populateResponses("u12a", "u12b", "u12c");
      } else if (entry === "u11b") {
        this.setState({
          hideExchange11: false,
          exchange11: "u11b"
        });
        this.populateResponses("u12a", "u12b", " ");
      }
    } else if (exchange === 12) {
      if (entry === "u12a") {
        this.setState({
          hideExchange12: false,
          exchange12: "u12a"
        });
        starCount++;
        this.populateResponses("u13a", "u13b", " ");
      } else if (entry === "u12b") {
        this.setState({
          hideExchange12: false,
          exchange12: "u12b"
        });
        this.populateResponses("u13c", "u13d", " ");
      } else if (entry === "u12c") {
        this.setState({
          hideExchange12: false,
          exchange12: "u12c"
        });
        this.populateResponses("u13a", "u13b", " ");
      }
    } else if (exchange === 13) {
      if (entry === "u13a") {
        this.setState({
          hideExchange13: false,
          exchange13: "u13a"
        });
        followDream = true;
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u13b") {
        this.setState({
          hideExchange13: false,
          exchange13: "u13b"
        });
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u13c") {
        this.setState({
          hideExchange13: false,
          exchange13: "u13c"
        });
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u13d") {
        this.setState({
          hideExchange13: false,
          exchange13: "u13d"
        });
        this.populateResponses("gn", " ", " ");
      }
      // *************************************************//
      // ****************** Month 12 *********************//
      // *************************************************//
    } else if (exchange === 14) {
      if (entry === "gn") {
        if (askedSuicide) {
          this.setState({
            hideSummary6: false,
            summary6: "m6-good"
          });
        } else {
          this.setState({
            hideSummary6: false,
            summary6: "m6-ok"
          });
        }
      } else if (entry === "u14aD") {
        this.setState({
          hideExchange14: false,
          exchange14: "u14aD"
        });
        this.populateResponses("u15aD", "u15bD", " ");
      } else if (entry === "u14bD") {
        this.setState({
          hideExchange14: false,
          exchange14: "u14bD"
        });
        this.populateResponses("u15aD", "u15bD", " ");
      } else if (entry === "u14cD") {
        this.setState({
          hideExchange14: false,
          exchange14: "u14cD"
        });
        this.populateResponses("u15aD", "u15bD", " ");
      } else if (entry === "u14aN") {
        this.setState({
          hideExchange14: false,
          exchange14: "u14aN"
        });
        this.populateResponses("u15aN", "u15bN", " ");
      } else if (entry === "u14bN") {
        this.setState({
          hideExchange14: false,
          exchange14: "u14bN"
        });
        this.populateResponses("u15aN", "u15bN", " ");
      } else if (entry === "u14cN") {
        this.setState({
          hideExchange14: false,
          exchange14: "u14cN"
        });
        this.populateResponses("u15aN", "u15bN", " ");
      }
    } else if (exchange === 15) {
      if (entry === "u15aD") {
        this.setState({
          hideExchange15: false,
          exchange15: "u15aD"
        });
        followDream = false;
        this.populateResponses("u16aD", "u16bD", "u16cD");
      } else if (entry === "u15bD") {
        this.setState({
          hideExchange15: false,
          exchange15: "u15bD"
        });
        this.populateResponses("u16aD", "u16bD", "u16cD");
      } else if (entry === "u15aN") {
        this.setState({
          hideExchange15: false,
          exchange15: "u15aN"
        });
        this.populateResponses("u16aN", "u16bN", "u16cN");
      } else if (entry === "u15bN") {
        this.setState({
          hideExchange15: false,
          exchange15: "u15bN"
        });
        this.populateResponses("u16aN", "u16bN", "u16cN");
      }
    } else if (exchange === 16) {
      if (entry === "u16aD") {
        this.setState({
          hideExchange16: false,
          exchange16: "u16aD"
        });
        starCount++;
        this.populateResponses("u17a", "u17b", "u17g");
      } else if (entry === "u16bD") {
        this.setState({
          hideExchange16: false,
          exchange16: "u16bD"
        });
        this.populateResponses("u17c", "u17d", "u17f");
      } else if (entry === "u16cD") {
        this.setState({
          hideExchange16: false,
          exchange16: "u16cD"
        });
        this.populateResponses("u17a", "u17b", "u17e");
      } else if (entry === "u16aN") {
        this.setState({
          hideExchange16: false,
          exchange16: "u16aN"
        });
        starCount++;
        this.populateResponses("u17a", "u17b", "u17g");
      } else if (entry === "u16bN") {
        this.setState({
          hideExchange16: false,
          exchange16: "u16bN"
        });
        this.populateResponses("u17c", "u17d", "u17f");
      } else if (entry === "u16cN") {
        this.setState({
          hideExchange16: false,
          exchange16: "u16cN"
        });
        this.populateResponses("u17a", "u17b", "u17e");
      }
    } else if (exchange === 17) {
      if (entry === "u17a") {
        this.setState({
          hideExchange17: false,
          exchange17: "u17a"
        });
        starCount++;
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u17b") {
        this.setState({
          hideExchange17: false,
          exchange17: "u17b"
        });
        starCount++;
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u17c") {
        this.setState({
          hideExchange17: false,
          exchange17: "u17c"
        });
        starCount++;
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u17d") {
        this.setState({
          hideExchange17: false,
          exchange17: "u17d"
        });
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u17e") {
        this.setState({
          hideExchange17: false,
          exchange17: "u17e"
        });
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u17f") {
        this.setState({
          hideExchange17: false,
          exchange17: "u17f"
        });
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u17g") {
        this.setState({
          hideExchange17: false,
          exchange17: "u17g"
        });
        this.populateResponses("gn", " ", " ");
      }
      // *************************************************//
      // ****************** Month 18 *********************//
      // *************************************************//
    } else if (exchange === 18) {
      if (entry === "gn") {
        if (
          this.state.exchange16 === "u16bN" ||
          this.state.exchange16 === "u16bD"
        ) {
          if (
            this.state.exchange17 === "u17d" ||
            this.state.exchange17 === "u17e" ||
            this.state.exchange17 === "u17f" ||
            this.state.exchange17 === "u17g"
          ) {
            this.setState({
              hideSummary12: false,
              summary12: "m12-end1"
            });
            heartCount = 0;
            starCount = 0;
          } else {
            this.setState({
              hideSummary12: false,
              summary12: "m12-better"
            });
          }
        } else if (starCount === 3) {
          this.setState({
            hideSummary12: false,
            summary12: "m12-best"
          });
        } else if (starCount === 2) {
          this.setState({
            hideSummary12: false,
            summary12: "m12-better"
          });
        } else if (starCount === 1) {
          this.setState({
            hideSummary12: false,
            summary12: "m12-ok"
          });
        }
      } else if (entry === "u18a") {
        this.setState({
          hideExchange18: false,
          exchange18: "u18a"
        });
        this.populateResponses("u19a", "u19b", " ");
      } else if (entry === "u18b") {
        this.setState({
          hideExchange18: false,
          exchange18: "u18b"
        });
        this.populateResponses("u19a", "u19b", " ");
      }
    } else if (exchange === 19) {
      if (entry === "u19a") {
        this.setState({
          hideExchange19: false,
          exchange19: "u19a"
        });
        starCount++;
        this.populateResponses("u20a", "u20b", "u20c");
      } else if (entry === "u19b") {
        this.setState({
          hideExchange19: false,
          exchange19: "u19b"
        });
        this.populateResponses("u20a", "u20b", "u20c");
      }
    } else if (exchange === 20) {
      if (entry === "u20a") {
        this.setState({
          hideExchange20: false,
          exchange20: "u20a"
        });
        this.populateResponses("u21c", " ", " ");
      } else if (entry === "u20b") {
        this.setState({
          hideExchange20: false,
          exchange20: "u20b"
        });
        starCount = 0;
        this.populateResponses("u21d", " ", " ");
      } else if (entry === "u20c") {
        this.setState({
          hideExchange20: false,
          exchange20: "u20c"
        });
        starCount++;
        goodEnding = true;
        this.populateResponses("u21a", "u21b", " ");
      }
    } else if (exchange === 21) {
      if (entry === "u21a") {
        this.setState({
          hideExchange21: false,
          exchange21: "u21a"
        });
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u21b") {
        this.setState({
          hideExchange21: false,
          exchange21: "u21b"
        });
        starCount++;
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u21c") {
        this.setState({
          hideExchange21: false,
          exchange21: "u21c"
        });
        this.populateResponses("gn", " ", " ");
      } else if (entry === "u21d") {
        this.setState({
          hideExchange21: false,
          exchange21: "u21d"
        });
        this.populateResponses("gn", " ", " ");
      }
      // *************************************************//
      // ****************** Month 24 *********************//
      // *************************************************//
    } else if (exchange === 22) {
      if (entry === "gn") {
        if (this.state.exchange20 === "u20a") {
          this.setState({
            hideSummary18: false,
            summary18: "m18-end1"
          });
          heartCount = 0;
          starCount = 1;
        } else if (this.state.exchange20 === "u20b") {
          this.setState({
            hideSummary18: false,
            summary18: "m18-end2"
          });
          heartCount = 0;
          starCount = 0;
        } else {
          this.setState({
            hideSummary18: false,
            summary18: "m18-good"
          });
        }
      } else if (entry === "u22badA") {
        this.setState({
          hideExchange22: false,
          exchange22: "u22badA"
        });
        this.populateResponses(":(", " ", " ");
      } else if (entry === "u22badB") {
        this.setState({
          hideExchange22: false,
          exchange22: "u22badB"
        });
        this.populateResponses(":(", " ", " ");
      } else if (entry === "u22goodA") {
        this.setState({
          hideExchange22: false,
          exchange22: "u22goodA"
        });
        starCount = 3;
        this.populateResponses(":)", " ", " ");
      } else if (entry === "u22goodB") {
        this.setState({
          hideExchange22: false,
          exchange22: "u22goodB"
        });
        starCount = 3;
        this.populateResponses(":)", " ", " ");
      }
    } else if (exchange === 23) {
      if (entry === ":)") {
        this.setState({
          hideSummary24: false,
          summary24: "m24-GoodEnding"
        });
      } else if (entry === ":(") {
        this.setState({
          hideSummary24: false,
          summary24: "m24-BadEnding"
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="Dialogue-main">
          {this.state.showIntro && (
            <Intro toggleIntro={this.toggleIntro} setName={this.setName} />
          )}
          <div className="Side-bar-container">
            {/* <HeartBar heartCount={heartCount} /> */}
            <StarBar starCount={starCount} month={month} />
          </div>
          <div className="Box">
            <div className="Box-content" id="Dialogue">
              {/* ********************************************************************************** */}
              {/* ***********************************  MONTH 0 ************************************* */}
              {/* ********************************************************************************** */}
              <div className="Date-bar" id="Month0">
                <p>Month 0</p>
              </div>
              <SamDialogue dialogue={"Hey " + this.state.nameFinal} />,
              {!this.state.hideExchange1 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange1)}
                />
              )}
              {!this.state.hideExchange1 && this.state.exchange1 === "u1a" && (
                <SamDialogue dialogue={this.getSamDialogue("s1a")} />
              )}
              {!this.state.hideExchange1 && this.state.exchange1 === "u1b" && (
                <SamDialogue dialogue={this.getSamDialogue("s1b")} />
              )}
              {!this.state.hideExchange1 && this.state.exchange1 === "u1c" && (
                <SamDialogue dialogue={this.getSamDialogue("s1c")} />
              )}
              {!this.state.hideExchange2 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange2)}
                />
              )}
              {!this.state.hideExchange2 && this.state.exchange2 === "u2a" && (
                <SamDialogue dialogue={this.getSamDialogue("s2a")} />
              )}
              {!this.state.hideExchange2 && this.state.exchange2 === "u2b" && (
                <SamDialogue dialogue={this.getSamDialogue("s2b")} />
              )}
              {!this.state.hideExchange2 && this.state.exchange2 === "u2b" && (
                <SamDialogue dialogue={this.getSamDialogue("s2b2")} />
              )}
              {!this.state.hideExchange2 && this.state.exchange2 === "u2c" && (
                <SamDialogue dialogue={this.getSamDialogue("s2c")} />
              )}
              {!this.state.hideExchange3 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange3)}
                />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3a" && (
                <SamDialogue dialogue={this.getSamDialogue("s3a")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3b" && (
                <SamDialogue dialogue={this.getSamDialogue("s3b")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3c" && (
                <SamDialogue dialogue={this.getSamDialogue("s3c")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3c" && (
                <SamDialogue dialogue={this.getSamDialogue("s3c2")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3d" && (
                <SamDialogue dialogue={this.getSamDialogue("s3d")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3e" && (
                <SamDialogue dialogue={this.getSamDialogue("s3e")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3f" && (
                <SamDialogue dialogue={this.getSamDialogue("s3f")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3g" && (
                <SamDialogue dialogue={this.getSamDialogue("s3g")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3h" && (
                <SamDialogue dialogue={this.getSamDialogue("s3h")} />
              )}
              {!this.state.hideExchange4 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange4)}
                />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4a" && (
                <SamDialogue dialogue={this.getSamDialogue("s4a")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4b" && (
                <SamDialogue dialogue={this.getSamDialogue("s4b")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4c" && (
                <SamDialogue dialogue={this.getSamDialogue("s4c")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4c2" && (
                <SamDialogue dialogue={this.getSamDialogue("s4c")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4d" && (
                <SamDialogue dialogue={this.getSamDialogue("s4d")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4e" && (
                <SamDialogue dialogue={this.getSamDialogue("s4e")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4f" && (
                <SamDialogue dialogue={this.getSamDialogue("s4e")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4g" && (
                <SamDialogue dialogue={this.getSamDialogue("s4f")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4h" && (
                <SamDialogue dialogue={this.getSamDialogue("s4g")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4i" && (
                <SamDialogue dialogue={this.getSamDialogue("s4h")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4j" && (
                <SamDialogue dialogue={this.getSamDialogue("s4i")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4k" && (
                <SamDialogue dialogue={this.getSamDialogue("s4j")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4l" && (
                <SamDialogue dialogue={this.getSamDialogue("s4k")} />
              )}
              {!this.state.hideExchange4 && (
                <SamDialogue dialogue={this.getSamDialogue("s4all")} />
              )}
              {!this.state.hideExchange5 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange5)}
                />
              )}
              {!this.state.hideExchange5 && this.state.exchange5 === "u5a" && (
                <SamDialogue dialogue={this.getSamDialogue("s5a")} />
              )}
              {!this.state.hideExchange5 && this.state.exchange5 === "u5b" && (
                <SamDialogue dialogue={this.getSamDialogue("s5b")} />
              )}
              {!this.state.hideExchange5 && this.state.exchange5 === "u5c" && (
                <SamDialogue dialogue={this.getSamDialogue("s5c")} />
              )}
              {!this.state.hideExchange6 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange6)}
                />
              )}
              {!this.state.hideExchange6 && this.state.exchange6 === "u6a" && (
                <SamDialogue dialogue={this.getSamDialogue("s6a")} />
              )}
              {!this.state.hideExchange6 && this.state.exchange6 === "u6a" && (
                <SamDialogue dialogue={this.getSamDialogue("s6b")} />
              )}
              {!this.state.hideSummary0 && (
                <Summary
                  summary={this.getSummaryText("m0-default")}
                  intermission={this.getSummaryText("m0-intermission")}
                  retryMonth={this.retryMonth}
                  continueMonth={this.continueMonth}
                  month={month}
                  starCount={starCount}
                />
              )}
              {/* ********************************************************************************** */}
              {/* ***********************************  MONTH 6 ************************************* */}
              {/* ********************************************************************************** */}
              {this.state.shownSummary0 && this.getDateBar("Month 6")}
              {this.state.shownSummary0 && (
                <SamDialogue dialogue={"Helloooo..."} />
              )}
              {!this.state.hideExchange7 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange7)}
                />
              )}
              {!this.state.hideExchange7 && (
                <SamDialogue dialogue={this.getSamDialogue("s7a")} />
              )}
              {!this.state.hideExchange8 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange8)}
                />
              )}
              {!this.state.hideExchange8 && (
                <SamDialogue dialogue={this.getSamDialogue("s8a")} />
              )}
              {!this.state.hideExchange9 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange9)}
                />
              )}
              {!this.state.hideExchange9 && this.state.exchange9 === "u9a" && (
                <SamDialogue dialogue={this.getSamDialogue("s9a")} />
              )}
              {!this.state.hideExchange9 && this.state.exchange9 === "u9b" && (
                <SamDialogue dialogue={this.getSamDialogue("s9b")} />
              )}
              {!this.state.hideExchange9 && this.state.exchange9 === "u9c" && (
                <SamDialogue dialogue={this.getSamDialogue("s9c")} />
              )}
              {!this.state.hideExchange10 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange10)}
                />
              )}
              {!this.state.hideExchange10 &&
                this.state.exchange10 === "u10a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s10a")} />
                )}
              {!this.state.hideExchange10 &&
                this.state.exchange10 === "u10b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s10b")} />
                )}
              {!this.state.hideExchange10 && (
                <SamDialogue dialogue={this.getSamDialogue("s10a2")} />
              )}
              {!this.state.hideExchange10 && (
                <SamDialogue dialogue={this.getSamDialogue("s10a3")} />
              )}
              {!this.state.hideExchange10 && (
                <SamDialogue dialogue={this.getSamDialogue("s10a4")} />
              )}
              {!this.state.hideExchange11 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange11)}
                />
              )}
              {!this.state.hideExchange11 &&
                this.state.exchange11 === "u11a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s11a")} />
                )}
              {!this.state.hideExchange11 &&
                this.state.exchange11 === "u11a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s11a2")} />
                )}
              {!this.state.hideExchange11 &&
                this.state.exchange11 === "u11b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s11b")} />
                )}
              {!this.state.hideExchange11 &&
                this.state.exchange11 === "u11b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s11b2")} />
                )}
              {!this.state.hideExchange12 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange12)}
                />
              )}
              {!this.state.hideExchange12 &&
                this.state.exchange12 === "u12a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s12a")} />
                )}
              {!this.state.hideExchange12 &&
                this.state.exchange12 === "u12b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s12b")} />
                )}
              {!this.state.hideExchange12 &&
                this.state.exchange12 === "u12c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s12c")} />
                )}
              {!this.state.hideExchange12 &&
                this.state.exchange12 === "u12c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s12c2")} />
                )}
              {!this.state.hideExchange12 &&
                this.state.exchange12 === "u12c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s12c3")} />
                )}
              {!this.state.hideExchange12 &&
                this.state.exchange12 === "u12c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s12a")} />
                )}
              {!this.state.hideExchange13 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange13)}
                />
              )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13a")} />
                )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13a2")} />
                )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13b")} />
                )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13b2")} />
                )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13c")} />
                )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13c2")} />
                )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13d" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13d")} />
                )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13d" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13d2")} />
                )}
              {!this.state.hideExchange13 &&
                this.state.exchange13 === "u13d" && (
                  <SamDialogue dialogue={this.getSamDialogue("s13d3")} />
                )}
              {!this.state.hideExchange13 && (
                <SamDialogue dialogue={this.getSamDialogue("s13all")} />
              )}
              {!this.state.hideSummary6 && (
                <Summary
                  summary={this.getSummaryText(this.state.summary6)}
                  intermission={this.getSummaryText("m6-intermission")}
                  retryMonth={this.retryMonth}
                  continueMonth={this.continueMonth}
                  month={month}
                  starCount={starCount}
                />
              )}
              {/* ********************************************************************************** */}
              {/* ********************************  MONTH 12  ************************************** */}
              {/* ********************************************************************************** */}
              {this.state.shownSummary6 && this.getDateBar("Month 12")}
              {this.state.shownSummary6 && followDream && (
                <SamDialogue dialogue={this.getSamDialogue("s14preD")} />
              )}
              {this.state.shownSummary6 && !followDream && (
                <SamDialogue dialogue={this.getSamDialogue("s14preN")} />
              )}
              {!this.state.hideExchange14 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange14)}
                />
              )}
              {!this.state.hideExchange14 &&
                this.state.exchange14 === "u14aD" && (
                  <SamDialogue dialogue={this.getSamDialogue("s14aD")} />
                )}
              {!this.state.hideExchange14 &&
                this.state.exchange14 === "u14bD" && (
                  <SamDialogue dialogue={this.getSamDialogue("s14bD")} />
                )}
              {!this.state.hideExchange14 &&
                this.state.exchange14 === "u14cD" && (
                  <SamDialogue dialogue={this.getSamDialogue("s14cD")} />
                )}
              {!this.state.hideExchange14 &&
                this.state.exchange14 === "u14aN" && (
                  <SamDialogue dialogue={this.getSamDialogue("s14aN")} />
                )}
              {!this.state.hideExchange14 &&
                this.state.exchange14 === "u14bN" && (
                  <SamDialogue dialogue={this.getSamDialogue("s14bN")} />
                )}
              {!this.state.hideExchange14 &&
                this.state.exchange14 === "u14cN" && (
                  <SamDialogue dialogue={this.getSamDialogue("s14cN")} />
                )}
              {!this.state.hideExchange14 && (
                <SamDialogue dialogue={this.getSamDialogue("s14allN")} />
              )}
              {!this.state.hideExchange14 && (
                <SamDialogue dialogue={this.getSamDialogue("s14all2N")} />
              )}
              {!this.state.hideExchange15 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange15)}
                />
              )}
              {!this.state.hideExchange15 &&
                this.state.exchange15 === "u15aD" && (
                  <SamDialogue dialogue={this.getSamDialogue("s15aD")} />
                )}
              {!this.state.hideExchange15 &&
                this.state.exchange15 === "u15bD" && (
                  <SamDialogue dialogue={this.getSamDialogue("s15bD")} />
                )}
              {!this.state.hideExchange15 &&
                this.state.exchange15 === "u15aN" && (
                  <SamDialogue dialogue={this.getSamDialogue("s15aN")} />
                )}
              {!this.state.hideExchange15 &&
                this.state.exchange15 === "u15bN" && (
                  <SamDialogue dialogue={this.getSamDialogue("s15bN")} />
                )}
              {!this.state.hideExchange15 && (
                <SamDialogue dialogue={this.getSamDialogue("s15allD")} />
              )}
              {!this.state.hideExchange16 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange16)}
                />
              )}
              {!this.state.hideExchange16 &&
                (this.state.exchange16 === "u16aD" ||
                  this.state.exchange16 === "u16aN") && (
                  <SamDialogue dialogue={this.getSamDialogue("s16a")} />
                )}
              {!this.state.hideExchange16 &&
                (this.state.exchange16 === "u16bD" ||
                  this.state.exchange16 === "u16bN") && (
                  <SamDialogue dialogue={this.getSamDialogue("s16b")} />
                )}
              {!this.state.hideExchange16 &&
                (this.state.exchange16 === "u16cD" ||
                  this.state.exchange16 === "u16cN") && (
                  <SamDialogue dialogue={this.getSamDialogue("s16c")} />
                )}
              {!this.state.hideExchange17 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange17)}
                />
              )}
              {!this.state.hideExchange17 &&
                this.state.exchange17 === "u17a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s17a")} />
                )}
              {!this.state.hideExchange17 &&
                this.state.exchange17 === "u17a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s17a2")} />
                )}
              {!this.state.hideExchange17 &&
                this.state.exchange17 === "u17b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s17b")} />
                )}
              {!this.state.hideExchange17 &&
                this.state.exchange17 === "u17c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s17c")} />
                )}
              {!this.state.hideExchange17 &&
                this.state.exchange17 === "u17d" && (
                  <SamDialogue dialogue={this.getSamDialogue("s17d")} />
                )}
              {!this.state.hideExchange17 &&
                this.state.exchange17 === "u17e" && (
                  <SamDialogue dialogue={this.getSamDialogue("s17e")} />
                )}
              {!this.state.hideExchange17 && (
                <SamDialogue dialogue={this.getSamDialogue("s17all")} />
              )}
              {!this.state.hideSummary12 && (
                <Summary
                  summary={this.getSummaryText(this.state.summary12)}
                  intermission={this.getSummaryText("m12-intermission")}
                  retryMonth={this.retryMonth}
                  continueMonth={this.continueMonth}
                  month={month}
                  starCount={starCount}
                />
              )}
              {/* ********************************************************************************** */}
              {/* ********************************  MONTH 18  ************************************** */}
              {/* ********************************************************************************** */}
              {this.state.shownSummary12 && this.getDateBar("Month 18")}
              {this.state.shownSummary12 && (
                <SamDialogue dialogue={this.getSamDialogue("s18pre")} />
              )}
              {this.state.shownSummary12 && (
                <SamDialogue dialogue={this.getSamDialogue("s18pre2")} />
              )}
              {!this.state.hideExchange18 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange18)}
                />
              )}
              {!this.state.hideExchange18 && (
                <SamDialogue dialogue={this.getSamDialogue("s18a")} />
              )}
              {!this.state.hideExchange19 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange19)}
                />
              )}
              {!this.state.hideExchange19 &&
                this.state.exchange19 === "u19a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s19a")} />
                )}
              {!this.state.hideExchange19 &&
                this.state.exchange19 === "u19b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s19b")} />
                )}
              {!this.state.hideExchange19 && (
                <SamDialogue dialogue={this.getSamDialogue("s19b2")} />
              )}
              {!this.state.hideExchange20 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange20)}
                />
              )}
              {!this.state.hideExchange20 &&
                this.state.exchange20 === "u20a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s20a")} />
                )}
              {!this.state.hideExchange20 &&
                this.state.exchange20 === "u20a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s20a2")} />
                )}
              {!this.state.hideExchange20 &&
                this.state.exchange20 === "u20b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s20b")} />
                )}
              {!this.state.hideExchange20 &&
                this.state.exchange20 === "u20c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s20c")} />
                )}
              {!this.state.hideExchange20 &&
                this.state.exchange20 === "u20c" && (
                  <SamDialogue dialogue={this.getSamDialogue("s20c2")} />
                )}
              {!this.state.hideExchange21 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange21)}
                />
              )}
              {!this.state.hideExchange21 &&
                this.state.exchange21 === "u21a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s21a")} />
                )}
              {!this.state.hideExchange21 &&
                this.state.exchange21 === "u21a" && (
                  <SamDialogue dialogue={this.getSamDialogue("s21a2")} />
                )}
              {!this.state.hideExchange21 &&
                this.state.exchange21 === "u21b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s21b")} />
                )}
              {!this.state.hideExchange21 &&
                this.state.exchange21 === "u21b" && (
                  <SamDialogue dialogue={this.getSamDialogue("s21b2")} />
                )}
              {!this.state.hideSummary18 && (
                <Summary
                  summary={this.getSummaryText(this.state.summary18)}
                  intermission={this.getSummaryText("m18-intermission")}
                  retryMonth={this.retryMonth}
                  continueMonth={this.continueMonth}
                  month={month}
                  starCount={starCount}
                />
              )}
              {/* ********************************************************************************** */}
              {/* ********************************  MONTH 24  ************************************** */}
              {/* ********************************************************************************** */}
              {this.state.shownSummary18 && this.getDateBar("Month 24")}
              {this.state.shownSummary18 && !goodEnding && (
                <SamDialogue dialogue={this.getSamDialogue("s22pre-bad")} />
              )}
              {this.state.shownSummary18 && goodEnding && (
                <SamDialogue dialogue={this.getSamDialogue("s22pre-good")} />
              )}
              {this.state.shownSummary18 && goodEnding && (
                <SamDialogue dialogue={this.getSamDialogue("s22pre-good2")} />
              )}
              {!this.state.hideExchange22 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange22)}
                />
              )}
              {!this.state.hideExchange22 && !goodEnding && (
                <SamDialogue dialogue={this.getSamDialogue("s22bad")} />
              )}
              {!this.state.hideExchange22 && goodEnding && (
                <SamDialogue dialogue={this.getSamDialogue("s22good")} />
              )}
              {!this.state.hideExchange22 && goodEnding && followDream && (
                <SamDialogue dialogue={this.getSamDialogue("s22good2D")} />
              )}
              {!this.state.hideExchange22 && goodEnding && !followDream && (
                <SamDialogue dialogue={this.getSamDialogue("s22good2N")} />
              )}
              {!this.state.hideExchange22 && goodEnding && (
                <SamDialogue dialogue={this.getSamDialogue("s22good3")} />
              )}
              {!this.state.hideExchange22 && goodEnding && (
                <SamDialogue dialogue={this.getSamDialogue("s22good4")} />
              )}
              {!this.state.hideExchange22 && goodEnding && (
                <SamDialogue dialogue={this.getSamDialogue("s22good5")} />
              )}
              {!this.state.hideExchange23 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange23)}
                />
              )}
              {!this.state.hideSummary24 && (
                <Summary
                  summary={this.getSummaryText(this.state.summary24)}
                  intermission={""}
                  retryMonth={this.retryMonth}
                  continueMonth={this.continueMonth}
                  month={month}
                  starCount={starCount}
                />
              )}
              <div
                style={{ float: "left", clear: "both" }}
                ref={el => {
                  this.messagesEnd = el;
                }}
              />
            </div>
          </div>
        </div>
        <div className="Response-button-row">
          <img
            src={responseBubble}
            className="Response-bubble"
            alt="response bubble"
          />
          <div className="Response-text-div">
            <p>
              Click <br />
              to
              <br />
              respond!
            </p>
          </div>
        </div>
        <div className="Response-row">
          <button
            className="Response-button"
            id="Response1"
            disabled={this.state.button1Disable}
            onClick={this.toggleResponse1.bind(this)}
          >
            {userDialogue.find(x => x.id === responseID1).text}
          </button>
          <button
            className="Response-button"
            id="Response2"
            disabled={this.state.button2Disable}
            onClick={this.toggleResponse2.bind(this)}
          >
            {userDialogue.find(x => x.id === responseID2).text}
          </button>
          <button
            className="Response-button"
            id="Response3"
            disabled={this.state.button3Disable}
            onClick={this.toggleResponse3.bind(this)}
          >
            {userDialogue.find(x => x.id === responseID3).text}
          </button>
        </div>
      </div>
    );
  }
}

export default MainDialogue;
