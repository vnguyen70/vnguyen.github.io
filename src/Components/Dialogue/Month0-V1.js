  toggleResponse1() {
//      if(exchange === 1) {
//        this.setState({
//          hideExchange1: false,
//          exchange1: 'u1a',
//        })
//        this.populateResponses('u2a', 'u2b', 'u2c');
//      } else if (exchange === 2) {
//        this.setState({
//          hideExchange2: false,
//          exchange2: 'u2a',
//        }); 
//        this.populateResponses('u3a', 'u3b', 'u3c');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2a') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3a',
//        })  
//        this.populateResponses('u4a', 'u4b', 'u4c2');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2b') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3d',
//        })  
//        this.populateResponses('u4e', 'u4f', 'u4g');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2c') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3f',
//        })  
//        this.populateResponses('u4h', 'u4i', 'u4j');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3a') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4a',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3b') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4a',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3c') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4c',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3d') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4e',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3e') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4a',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && (this.state.exchange3 === 'u3f' || this.state.exchange3 === 'u3g' || this.state.exchange3 === 'u3h')) {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4g',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 5) {
//        this.setState({
//          hideExchange5: false,
//          exchange5: 'u5a',
//        })  
//        this.populateResponses('u6a', ' ', ' ');
//      } else if (exchange === 6) {
//        this.setState({
//          hideExchange6: false,
//          exchange6: 'u6a',
//        })  
//        this.populateResponses(' ', ' ', ' ');
//      } 
      this.changeDialogueState(responseID1); 
  } 
  toggleResponse2() {
//      if(exchange === 1) {
//        this.setState({
//          hideExchange1: false,
//          exchange1: 'u1b',
//        })
//        this.populateResponses('u2a', 'u2b', 'u2c');
//      } else if (exchange === 2) {
//        this.setState({
//          hideExchange2: false,
//          exchange2: 'u2b',
//        }); 
//        this.populateResponses('u3d', 'u3e', 'u3c');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2a') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3b',
//        })  
//        this.populateResponses('u4a', 'u4b', 'u4c2');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2b') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3e',
//        })  
//        this.populateResponses('u4a', 'u4b', 'u4c2');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2c') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3g',
//        })  
//        this.populateResponses('u4h', 'u4i', 'u4k');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3a') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4b',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3b') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4b',
//        })  
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3c') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4d',
//        })  
//        this.populateResponses('u5a', 'u5b', 'u5c'); 
//      } else if (exchange === 4 && this.state.exchange3 === 'u3d') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4f',
//        })  
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3e') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4b',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && (this.state.exchange3 === 'u3f' || this.state.exchange3 === 'u3g' || this.state.exchange3 === 'u3h')) {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4i',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 5) {
//        this.setState({
//          hideExchange5: false,
//          exchange5: 'u5b',
//        })  
//        this.populateResponses('u6a', ' ', ' ');
//      } else if (exchange === 6) {
//        this.setState({
//          hideExchange6: false,
//          exchange6: 'u6a',
//        })  
//        this.populateResponses(' ', ' ', ' ');
//      }
      this.changeDialogueState(responseID2); 
  }
  toggleResponse3() {
//      if(exchange === 1) {
//        this.setState({
//          hideExchange1: false,
//          exchange1: 'u1c',
//        })
//        this.populateResponses('u2a', 'u2b', 'u2c');
//      } else if (exchange === 2) {
//        this.setState({
//          hideExchange2: false,
//          exchange2: 'u2c',
//        }) 
//        this.populateResponses('u3f', 'u3g', 'u3h');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2a') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3c',
//        })  
//        this.populateResponses('u4c', 'u4d', 'u4d2');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2b') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3c',
//        })  
//        this.populateResponses('u4c', 'u4d', 'u4d2');
//      } else if (exchange === 3 && this.state.exchange2 === 'u2c') {
//        this.setState({
//          hideExchange3: false,
//          exchange3: 'u3h',
//        })  
//        this.populateResponses('u4h', 'u4i', 'u4l');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3a') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4c',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3b') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4c',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3c') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4c2',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3d') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4g',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3e') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4b',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3f') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4j',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3g') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4k',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 4 && this.state.exchange3 === 'u3h') {
//        this.setState({
//          hideExchange4: false,
//          exchange4: 'u4l',
//        })   
//        this.populateResponses('u5a', 'u5b', 'u5c');
//      } else if (exchange === 5) {
//        this.setState({
//          hideExchange5: false,
//          exchange5: 'u5c',
//        })  
//        this.populateResponses('u6a', ' ', ' ');
//      } else if (exchange === 6) {
//        this.setState({
//          hideExchange6: false,
//          exchange6: 'u6a',
//        })  
//        this.populateResponses(' ', ' ', ' ');
//      }
      this.changeDialogueState(responseID3); 
  }
  
  
