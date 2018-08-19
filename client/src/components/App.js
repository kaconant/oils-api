import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Axios from 'axios';
import Home from './Home.js'
import About from './About.js'
import FAQ from './FAQ.js'
import LogIn from './LogIn.js'
import User from './User.js'
import Navbar from './Navbar';
import Jumbotron from './Jumbotron.js';
import Footer from './Footer';
import Carousel from './Carousels.js';
import Calculation from './Calculation.js'
import Modal from './Modal';
import Register from './Register';
var smoothScroll = require('smoothscroll');

// Nav bar > Jumbotron > MoodSelector > Base > Middle > Top > Combine > Calculation > Footer
// lets try to render with it all on one page and then break it out later
class App extends Component {
  constructor() {
    super();
  this.state = {
    mood: null, 
    baseLevel: [], 
    midLevel: [], 
    topLevel: [],
    oilData: [],
    selected: {
      base: '',
      middle: '',
      top: '',
    },
    toShow: false,
    isLoggedIn: false
  }
  this.handleMoodClick = this.handleMoodClick.bind(this);
  this.loggedIn = this.loggedIn.bind(this)
  this.signOut = this.signOut.bind(this)

}

loggedIn() {
  this.setState({isLoggedIn: !this.state.isLoggedIn});
}

signOut(e) {
  e.preventDefault();
  Axios.get('/auth/logout', {
  }).then(({data}) => {
    localStorage.setItem('username', '')
    this.loggedIn();
    console.log('signed out')
    this.props.history.replace('/');
  //   // destructuring the data allows us not to type res.data
  //   // if successfully login > react router to user page
  //   // else alert login taken on screen
  }).catch((err) => {
    console.log(err)
  //   // alert message that something went wrong
  //   // sowwy
  })

}

handleMoodClick(e) {
  e.preventDefault();
  this.setState({
    mood: e.target.dataset.mood
  }, function() {
    let baseOilList = this.state.oilData.filter(oil => {
      return oil.level === 'base' && oil.mood === this.state.mood
    });
    let midOilList = this.state.oilData.filter(oil => {
      return oil.level === 'middle' && oil.mood === this.state.mood
    });
    let topOilList = this.state.oilData.filter(oil => {
      return oil.level === 'top' && oil.mood === this.state.mood
    });
    this.setState({ 
      baseLevel: baseOilList, 
      midLevel: midOilList, 
      topLevel: topOilList,
      toShow: true, 
    }, function () {
      console.log("The Current Mood is: " + this.state.mood)
    })
  })
  let base = document.getElementById('base')
  smoothScroll(base)
}

componentDidMount() {
Axios.get('/api/oils').then((res) => {
  this.setState({
    oilData: res.data
  })
})
console.log("app says: " +this.state.isLoggedIn)
}

setOil(level, oil) {
let state = { ...this.state };
state.selected[level] = oil;
this.setState(state);
}

  render() {
    let { history } = this.props;
    return (
      <div>
          <Navbar isLoggedIn={this.state.isLoggedIn} signOut={this.signOut} />
          <Switch>
            <Route exact path='/'render={ () => {return (
              <div>
                <Jumbotron handleMoodClick={this.handleMoodClick}/>
                <div id='base'></div>
                {this.state.toShow !== false && <Carousel mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="base" currentLevel={this.state.baseLevel} toShow={this.state.toShow} />}
                <div id='middle'></div>
                {this.state.toShow !== false && <Carousel mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="middle" currentLevel={this.state.midLevel} toShow={this.state.toShow} />}
                <div id='top'></div>
                {this.state.toShow !== false && <Carousel mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="top" currentLevel={this.state.topLevel} toShow={this.state.toShow} />}
                <div id="calculate"></div>
                <Calculation selected={this.state.selected} toShow={this.state.toShow} />
                <Modal selected={this.state.selected} mood={this.state.mood}/>
              </div>
            )}} />
            <Route path='/about' component={ About } />
            <Route path='/FAQ' component={ FAQ } />
            <Route path='/login' render={() => {return( <LogIn loggedIn={this.loggedIn} isLoggedIn={this.state.isLoggedIn} history={history} /> ) }}/>
            <Route path='/register' component={ Register } />
            <Route path='/users/:id' component={ User } />
          </Switch>
          <Footer /> 
        </div>
    )
  }
}

export default App;
