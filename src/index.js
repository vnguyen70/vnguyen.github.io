import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainDialogue from './Components/Dialogue/MainDialogue';
import SamDialogue from './Components/Dialogue/SamDialogue';
import UserDialogue from './Components/Dialogue/UserDialogue';
import HeartBar from './Components/SideBar/HeartBar';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
