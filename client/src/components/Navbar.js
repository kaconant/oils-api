import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../img/logo.png'
// import drop from '../img/drop.png'
class Navbar extends Component {
constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: this.props.isLoggedIn
    }
}

    componentDidMount() {
        this.forceUpdate();
        console.log("navbar says: " + this.props.isLoggedIn)
    }

    render() {
        let isLoggedIn = this.props.isLoggedIn
        // let username = localStorage.getItem('username')
        return(
        <div>
            <nav className="navbar navbar-expand-sm sticky-top" id="navbar">
            <button className="navbar-toggler collapsed mr-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar "></span>
                <span className="sr-only">Toggle navigation</span>
            </button>

            <Link to='/' className="navbar-brand" href="/"><img className="logo" src="./img/logo.png" alt="logo" height='55' /><img className="logo-small" src="./img/drop.png" alt="logo-small" height='40' /></Link>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                {!isLoggedIn ? 
                    <Link to='/register' className="nav-link hvr-hang" href="#"  data-target="#register">Sign Up</Link>
                    : 
                    <Link to='/user' className="nav-link hvr-hang">{this.props.username}'s Blends</Link>
                }
                </li>
                <li className="nav-item">
                    <Link to='/FAQ' className="nav-link hvr-hang" href="#" >FAQ</Link>
                </li>
                <li className="nav-item">
                {!isLoggedIn ? 
                    <Link to='/login' className="nav-link hvr-hang" >Login</Link>
                    : 
                    <Link onClick={this.props.signOut} to='/logout' className="nav-link hvr-hang"  >Log Out</Link>
                }
                </li>
                </ul>
            </div>
            </nav>
        </div>
        )
}
}

export default Navbar;