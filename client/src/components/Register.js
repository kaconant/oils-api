import React from 'react';
import { Link } from 'react-router-dom';


class Register extends React.Component {

  render() {

    return (
      <div>
        <div className="register" id="register" >
          <form action="/login" method="GET"> 
            <button className="btn-gp"> <i className="fa fa-fw fa-google-plus pull-left" aria-hidden="false"></i>
              Signup with Google  </button> <br />  
            <div className="signup-or-separator">
              <span className="h6 signup-or-separator--text">or</span>
              <hr />
            </div>
          </form>
          <form>
            <div className="form-group">
              <input type="email" className="form-control-form " id="signup-email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control-form " id="signup-password" placeholder="Password" />
            </div>  
            <button type="submit" className="btn-lgin" data-toggle="modal"  data-dismiss="modal" data-target="#at-signup-filling">Signup with Email</button> <hr />   
            <p>    By signing up, I agree to Tagged's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>. </p>
            <div className="modal-footer">
              <div className="row">   
                <div className="col-md-6">
                  <p className="text-left">Already a member? </p>
                </div>  
                <div className="col-md-4 col-md-offset-2">  
                <Link to='/login'><button className="btn-gst"  data-toggle="modal"  data-dismiss="modal" data-target="/login">Login</button></Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
