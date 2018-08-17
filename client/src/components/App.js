import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Home from './Home.js'
import About from './About.js'
import FAQ from './FAQ.js'
import LogIn from './LogIn.js'
import User from './User.js'

// Nav bar > Jumbotron > MoodSelector > Base > Middle > Top > Combine > Calculation > Footer
// lets try to render with it all on one page and then break it out later
class App extends Component {

  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/'component={ Home } />
            <Route path="/home" component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/FAQ' component={ FAQ } />
            <Route path='/login' component={ LogIn } />
            <Route path='/:id' component={ User } />
          </Switch>
        </div>
    )
  }
}

export default App;
