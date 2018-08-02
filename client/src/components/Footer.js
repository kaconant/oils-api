import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
        <div>
            <footer id="myFooter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h2 className="logo"><a href="#"><img className="logo-footer" src="./img/drop.png" height='85' /></a></h2>
                    </div>
                    <div className="col-sm-2">
                        <h5>Get started</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>About Us</h5>
                        <ul>
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>Support</h5>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help Desk</a></li>
                            <li><a href="#">Work With Us</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <div className="social-networks">
                            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                        </div>
                        <button type="button" className="btn btn-default">Contact us</button>
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