import React from 'react';
import axios from 'axios';

class Modal extends React.Component {
    
    state = {
        submitted: false,
        isModalOpen: true
    }

    clearModal() {
        document.getElementById("formInfo").reset(),
        window.close()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submitted: true,
            isModalOpen: true,
        })
        const oils = {
            top: this.props.selected.top,
            middle: this.props.selected.middle,
            base: this.props.selected.base,
            mood: this.props.mood
            // middleImage: this.props.selected.middle.url
        }
        axios.post("/api/mail",{
            userName: e.target.userName.value,
            blendName: e.target.blendName.value,
            recName: e.target.recName.value,
            recEmail: e.target.recEmail.value,
            oils: oils,
        })
        .then((response) => {
            this.setState({
                submitted: false,
                isModalOpen: false
            })
            console.log('the modal will close now');
            
        })
        .catch((error) => {
            alert('Try again later!')
            this.setState({
                submitted: false,
                isModalOpen: true
            })
            console.log(error);
        }); 

    }

    render() {
        return (
            <div>
                <form action="/login" method="GET" id="modalDiv">
                    <div className={ this.state.isModalOpen ? "modal fade show" : "modal fade"} id="share" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="modal-header">Share Your Blend</h2>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={this.handleSubmit.bind(this)}id="formInfo">
                                        <div className="form-group">
                                            <input type="text" className="form-control-form " required id="userName" name="userName" placeholder="Your Name" />                                            
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control-form " required id="blendName" name="blendName" placeholder="Name of Your Blend" />
                                        </div>
                                        {/* <div className="checkbox">
                                            <label>
                                                <input id="remember-me" type="checkbox" />Remember Me? 
                                            </label>
                                        </div>    */}
                                        <div className="form-group">
                                            <input type="text" className="form-control-form " required id="recName" name="recName" placeholder="Recepient's Name" />
                                        </div>
                                        <div id="vehicle-info">
                                            <div className="form-group">
                                                <input type="text" className="form-control-form " required id="recEmail" name="recEmail" placeholder="Recepient's Email" />
                                            </div>  
                                        </div>  
                                        <p>By sharing my blends, I agree to Blendology's <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>. </p>
                                        {this.state.submitted ? (
                                            <button type="submit" className="modalBtn" id="signup-button" disabled="disabled" onClick={this.clearModal()}>Submitted</button> 
                                        ) : (
                                            <button type="submit" className="modalBtn" id="signup-button" >Share Now</button>
                                        )}
                                    </form>
                                </div>
                                {/* <div className="modal-footer">
                                    <div className="row">   
                                        <div className="col-md-6">
                                            <p className="ta-r">Already a Blendologist? </p>
                                        </div>  
                                        <div className="col-md-4 col-md-offset-2">  
                                            <button className="btn-gst"  data-toggle="modal"  data-dismiss="modal" data-target="#at-login">Login</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Modal;