import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';

let history = createHistory();

ReactDOM.render(
  <Router history={history}>
  <Route to='/' component={App} />
  </Router>, document.getElementById('root'));
registerServiceWorker();
