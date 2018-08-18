import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return(
        <div>
            <footer id="myFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <Link to='/home' className="logo"><a href="#"><img className="logo-footer" src="./img/drop.png" height='85'/></a></Link>
                        {/* <h2 className="logo"><a href="#"><img className="logo-footer" src="./img/drop.png" height='85' /></a></h2> */}
                    </div>
                    <div className="col-sm-2">
                        <h5>Get started</h5>
                        <ul>
                            <li><Link to='/' href="#" >Home</Link></li>
                            <li><Link to='/login' href="#" >Log In</Link></li>
                            <li><Link to='/register' href="#" >Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>About Us</h5>
                        <ul>
                            <li><Link to='/about' href="#" >Who We Are</Link></li>
                            <li><a href="mailto:hello@myblendology.com" >Contact Us</a></li>
                            {/* <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Contact Us</a></li> */}
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>Support</h5>
                        <ul>
                            <li><Link to='/FAQ' href="#" >FAQ</Link></li>
                            <li><Link to='/FAQ' href="#" >Help Desk</Link></li>
                            {/* <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help Desk</a></li> */}
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <div className="social-networks">
                            <a href="https://www.instagram.com/myblendology" target="_blank" className="twitter"><i className="fa fa-instagram"></i></a>
                            <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                        </div>
                        <a href='mailto:hello@myblendology.com' type="button" className="btn btn-default">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2018 myBlendology, inc. </p>
            </div>
        </footer>
        </div>
        )
}
}
export default Footer;