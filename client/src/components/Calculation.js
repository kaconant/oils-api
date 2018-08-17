import React, { Component } from 'react';

class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toShow: false,
        }
    }

    handleChange(e) {
        e.preventDefault();
        if (this.props.selected.base !== "" && this.props.selected.middle !== '' && this.props.selected.top !== "") {
            this.setState({toShow: true}) 
        } else {
            alert('You must select a base, middle, and top oil to calculate your blend!');
        }

    }

    // handleModalClick(e) {
    //     e.preventDefault();
    // }

    render() {
        return (
        <div className="Calc">
            {this.props.toShow === true && <button id="button" className="blendCalc" onClick={this.handleChange.bind(this)}>Time to Calculate</button>}
            <div className="blendResults">
            {this.state.toShow === true && <h5 className="calcIntro">For this blend, you'll need:</h5>}
            {this.state.toShow === true && <h5 className="calcOils">5 Drops:<div className="calcColor">{ this.props.selected.base} Essential Oil</div> </h5>}
            {this.state.toShow === true && <h5 className="calcOils">4 Drops:<div className="calcColor">{ this.props.selected.middle} Essential Oil</div> </h5>}
            {this.state.toShow === true && <h5 className="calcOils">3 Drops:<div className="calcColor">{ this.props.selected.top} Essential Oil</div></h5>}
            </div>
            {this.state.toShow === true && <a href="/" className="shareBlend transparent_btn" data-toggle="modal" data-target="#share">Share Your Blend</a>}
            {/* {this.props.toShow === true && <button id="refreshButton" className="refreshBtn" onClick="window.location.reload()">Make A New Blend</button>} */}
        </div>
        )
}
}
export default Calculation;
