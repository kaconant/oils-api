import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class LogIn extends Component {
  constructor(props) {
    super(props)
  }

  signIn(e) {
    e.preventDefault();
    Axios.get('/api/user', {
      user: document.getElementById('signup-email').value,
      password: document.getElementById('signup-password').value
    }).then(({data}) => {
      console.log(data);
    // destructuring the data allows us not to type res.data
    // if successfully login > react router to user page
    // else alert login taken on screen
    }).catch((err) => {
      console.log(err)
    // alert message that something went wrong
    })
    
    Axios.post('/auth/login', {
      email: document.getElementById('signup-email').value,
      password: document.getElementById('signup-password').value
    }).then(({data}) => {
      this.props.loggedIn(data);
      this.props.history.replace('/');
      // destructuring the data allows us not to type res.data
      // if successfully login > react router to user page
      // else alert login taken on screen
    }).catch((err) => {
      console.log(err)
      // alert message that something went wrong
      alert("Email and/or password do not match our records. Please try again or be sure to sign up!")
    // sowwy
    })
  }

  googleSubmit(e) {
    e.preventDefault();
    Axios.get('/auth/google')
    .then((res) => {
      console.log("google logged in")
      
    // alert('This login is taken!')
    // destructuring the data allows us not to type res.data
    // if successfully login > react router to user page
    // else alert login taken on screen
    }).catch((err) => {
      console.log(err)
      alert('Try again later!')
    })
  }

  render() {
    return (
      <div>
        <div className="login" id="login" >
          <form onSubmit={this.googleSubmit.bind(this)}>
            <button className="btn-gp"> <i className="fa fa-fw fa-google-plus pull-left" aria-hidden="false"></i>
              Login with Google  </button> <br />  
            <div className="signup-or-separator">
              <span className="h6 signup-or-separator--text">or</span>
              <hr />
            </div>
          </form>
          <form onSubmit={this.signIn.bind(this)}>
            <div className="form-group">
              <input type="email" className="form-control-forms " id="signup-email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control-forms " id="signup-password" placeholder="Password" />
            </div> 
            <button type="submit" className="btn-lgin" data-toggle="modal"  data-dismiss="modal" data-target="#at-signup-filling">Login</button> <hr />  
            <div className="modal-footer">
              <div className="row">   
                <div className="col-md-6">
                  <p className="text-left">Not yet a member? </p>
                </div>  
                <div className="col-md-4 col-md-offset-2">  
                <Link to='/register'><button className="btn-gst"  data-toggle="modal"  data-dismiss="modal" data-target="#at-login">Sign Up</button></Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LogIn;
