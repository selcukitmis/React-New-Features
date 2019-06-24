import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NoteApp from './NoteApp';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App count={23} />, document.getElementById('root'));
ReactDOM.render(<NoteApp />, document.getElementById('root'));

serviceWorker.unregister();
