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
                        {/* <Link to='/home' className="logo"><a href="/"><img className="logo-footer" alt="footerLogo" src="./img/drop.png" height='85'/></a></Link> */}
                        <a href="./" className="logo"><img className="logo-footer" src="./img/drop.png" alt="footerLogo" height='85' /></a>
                    </div>
                    <div className="col-sm-2">
                        <h5>Get Started</h5>
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
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>Support</h5>
                        <ul>
                            <li><Link to='/FAQ' href="#" >FAQ</Link></li>
                            <li><Link to='/FAQ' href="#" >Help Desk</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <div className="social-networks">
                            <a href="https://www.instagram.com/myblendology" target="_blank" rel="noopener noreferrer" className="twitter"><i className="fa fa-instagram"></i></a>
                            <a href="https://plus.google.com" className="google"><i className="fa fa-google-plus"></i></a>
                        </div>
                        <a id="contact-us" href='mailto:hello@myblendology.com' className="btn btn-default">Contact Us</a>
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