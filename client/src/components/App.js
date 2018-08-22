import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Axios from 'axios';
// import Home from './Home.js'
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
    isLoggedIn: false,
    user: {
      firstname: '',
      lastname: '',
      email: '',
      joined: '',
      blends: [], 
      id: ''
    }
  }
  this.handleMoodClick = this.handleMoodClick.bind(this);
  this.loggedIn = this.loggedIn.bind(this)
  this.signOut = this.signOut.bind(this)
  this.setLocalStorage =  this.setLocalStorage.bind(this) 
  this.updateBlends = this.updateBlends.bind(this)
}

loggedIn(data) {
  this.setState({isLoggedIn: !this.state.isLoggedIn});
  this.updateBlends();
  this.setState({
    user: {
      ...this.state.user,
      firstname: data.user.firstname,
      lastname: data.user.lastname,
      email: data.user.email,
      joined: data.user.createdAt.substring(0, 4),
      id: data.user.id
    }
  });
}

setLocalStorage() {
  console.log(this.state.user)
  let userData = this.state.user
  localStorage.setItem('userData', JSON.stringify(userData))
  localStorage.setItem('isLoggedIn', this.state.isLoggedIn)
}

updateBlends() {
  if (this.state.isLoggedIn) {
    Axios.get('/api/blend/user')
    .then(({data}) => {
      console.log("done")
      console.log(data)
      this.setState({
        user: {
          ...this.state.user,
          blends: data
        }
      }, () => {this.setLocalStorage()})
    })
  }

}

signOut(e) {
  e.preventDefault();
  localStorage.removeItem('userData');
  localStorage.removeItem('isLoggedIn');
  Axios.get('/auth/logout')
    .then(({data}) => {
    this.loggedIn();
    console.log('signed out')
    // remove user info from localStorage
    this.setState({
      user: {
        ...this.state.user,
        firstname: '',
        lastname: '',
      }
    })
  }).catch((err) => {
    console.log(err)
  })
  this.props.history.replace('/')
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
  console.log(localStorage.getItem('isLoggedIn'))
  let loggedInData = localStorage.getItem('isLoggedIn')
  if (localStorage.getItem('isLoggedIn') !== null) {
    this.setState({isLoggedIn: loggedInData})
  }
  if (localStorage.getItem('userData') !== null) {
    let checkData = localStorage.getItem('userData')
    let parsedData = JSON.parse(checkData)
    this.setState({
        user: {
          firstname: parsedData.firstname,
          lastname: parsedData.lastname,
          email: parsedData.email,
          joined: parsedData.joined,
          blends: parsedData.blends, 
          id: parsedData.id
        }
    })
  }
    Axios.get('/api/oils').then((res) => {
      this.setState({
        oilData: res.data,
  
      })
    })
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
          <Navbar username={this.state.user.firstname} isLoggedIn={this.state.isLoggedIn} signOut={this.signOut} updateBlends={this.updateBlends.bind(this)} getInfo={this.getInfo}/>
          <Switch>
            <Route exact path='/'render={ () => {return (
              <div>
                <Jumbotron handleMoodClick={this.handleMoodClick}/>
                <div id='base'></div>
                {this.state.toShow !== false && <Carousel isLoggedIn={this.state.isLoggedIn} history={history} mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="base" currentLevel={this.state.baseLevel} toShow={this.state.toShow} />}
                <div id='middle'></div>
                {this.state.toShow !== false && <Carousel isLoggedIn={this.state.isLoggedIn} history={history} mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="middle" currentLevel={this.state.midLevel} toShow={this.state.toShow} />}
                <div id='top'></div>
                {this.state.toShow !== false && <Carousel isLoggedIn={this.state.isLoggedIn} history={history} mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="top" currentLevel={this.state.topLevel} toShow={this.state.toShow} />}
                <div id="calculate"></div>
                {this.state.toShow !== false && <Calculation mood={this.state.mood} saveBlends={this.saveBlends} history={history} selected={this.state.selected} toShow={this.state.toShow} setOil={this.setOil.bind(this)} loggedIn={this.state.isLoggedIn}/>}
                <Modal selected={this.state.selected} mood={this.state.mood}/>
              </div>
            )}} />
            <Route path='/about' component={ About } />
            <Route path='/FAQ' component={ FAQ } />
            <Route path='/login' render={() => {return( <LogIn setLocalStorage={this.setLocalStorage} loggedIn={this.loggedIn} isLoggedIn={this.state.isLoggedIn} history={history} updateBlends={this.updateBlends.bind(this)}/> ) }}/>
            <Route path='/register' component={ Register } />
            <Route path='/user' render={() => {return( <User history={history} email={this.state.user.email} joined={this.state.user.joined} firstname={this.state.user.firstname} lastname={this.state.user.lastname} currentLevel={this.state.user.blends} isLoggedIn={this.state.isLoggedIn} updateBlends={this.updateBlends} /> ) }}/>
          </Switch>
          <Footer /> 
        </div>
    )
  }
}

export default App;
