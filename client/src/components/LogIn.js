import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class LogIn extends React.Component {

  signIn(e) {
    e.preventDefault();
    console.log(e.target);
    Axios.post('/auth/login', {
      email: document.getElementById('signup-email').value,
      password: document.getElementById('signup-password').value
    // }).then(({data}) => {
    //   // destructuring the data allows us not to type res.data
    //   // if successfully login > react router to user page
    //   // else alert login taken on screen
    // }).catch((err) => {
    //   // alert message that something went wrong
    //   // sowwy
    })
  }


  render() {

    return (
      <div>
        <div className="login" id="login" >
          <form action="/login" method="GET">
            <button className="btn-gp"> <i className="fa fa-fw fa-google-plus pull-left" aria-hidden="false"></i>
              Login with Google  </button> <br />  
            <div className="signup-or-separator">
              <span className="h6 signup-or-separator--text">or</span>
              <hr />
            </div>
          </form>
          <form onSubmit={this.signIn.bind(this)}>
            <div className="form-group">
              <input type="email" className="form-control-form " id="signup-email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control-form " id="signup-password" placeholder="Password" />
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
