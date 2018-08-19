import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';

let history = createHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
  <Route to='/' component={App} />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
