import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../img/logo.png'
// import drop from '../img/drop.png'
class Navbar extends Component {

    render() {
        return(
        <div>
            <nav className="navbar navbar-expand-sm sticky-top">
            <button className="navbar-toggler collapsed mr-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar "></span>
                <span className="sr-only">Toggle navigation</span>
            </button>

            <Link to='/' className="navbar-brand" href="#"><img className="logo" src="./img/logo.png" height='55' /><img className="logo-small" src="./img/drop.png" height='40' /></Link>
            {/* <a className="navbar-brand" href="#"><img className="logo" src="./img/logo.png" height='55' /><img className="logo-small" src="./img/drop.png" height='40' /></a>  */}
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to='/register' className="nav-link hvr-hang" href="#"  data-target="#register">SIGN UP</Link>
                    {/* <a className="nav-link hvr-hang" href="#"  data-target="#about">ABOUT</a> */}
                </li>
                <li className="nav-item">
                    <Link to='/FAQ' className="nav-link hvr-hang" href="#" >FAQ</Link>
                    {/* <a className="nav-link hvr-hang" href="#">FAQ</a> */}
                </li>
                <li className="nav-item">
                    <Link to='/login' className="nav-link hvr-hang" href="#" >LOGIN</Link>
                    {/* <a className="nav-link hvr-hang" href="#" data-toggle="modal" data-target="#at-login">LOGIN</a> */}
                </li>
                </ul>
            </div>
            </nav>
        </div>
        )
}
}

export default Navbar;