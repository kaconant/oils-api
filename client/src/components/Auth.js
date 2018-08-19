
// {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
// // google button

// import React, { Component } from 'react';
// import './Auth.css';
// import { BrowserHistory } from 'react-router';

// class Auth extends Component {

// constructor() {
//     super();
//     this.state = { isAuthenticated: false, user: null, token: ''};
// }

// logout = () => {
//     this.setState({isAuthenticated: false, token: '', user: null})
// };

// onFailure = (error) => {
// alert(error);
// };

// render() {
// let content = !!this.state.isAuthenticated ?
//     (
//     <div>
//         <p>Authenticated</p>
//         <div>
//             {this.state.user.email}
//         </div>
//         <div>
//             <button onClick={this.logout} 
//             className="button">
//                 Log out
//             </button>
//         </div>
//     </div>
// ) :
// (
//     <div>
//     <div className="row">
//         <div className="col-md-6">
//             <div className="facebook">
//                 <button><a href="http://localhost:3001/auth/facebook">Login with Facebook</a></button>
//             </div>
//         </div> 

//             <div className="col-1">
//         <div className="vl"></div> 
//         </div>

//         <div className="col-6">
//             <div className="google">
//                 <button><a href="http://localhost:3001/auth/google">Login with Google</a></button>
//                 </div>

//         </div>
//     </div>
// </div>
// );

//         return (
//             <div>
//                 {content}
//             </div>
//         );
//     }
// }

// export default Auth;