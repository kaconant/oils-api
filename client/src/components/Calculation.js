import React, { Component } from 'react';
var smoothScroll = require('smoothscroll');

class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toShow: false,
        }
    }

    refreshPage(e) {
        e.preventDefault();
        this.setState({
            toShow: false
        })
        this.props.setOil("base", '');
        this.props.setOil("middle", '');
        this.props.setOil("top", '');
        let navbar = document.getElementById('navbar');
        smoothScroll(navbar);
        console.log("reset");

    }

    handleChange(e) {
        e.preventDefault();
        if (this.props.selected.base !== "" && this.props.selected.middle !== '' && this.props.selected.top !== "") {
            this.setState({toShow: true}) 
        } else {
            alert('You must select a base, middle, and top oil to calculate your blend!');
        }
        let moveTo = document.getElementById('results')
        smoothScroll(moveTo)
    }

    // // saveBlend() {
    //     e.preventDefault();
    //     Axios.get() 
    //         // getting api/users to see if logged in?
    //         // if logged in, get id back - need for blends table
    //         // hey log in you loser - bamboozling
    //     Axios.post()
    //         // will hit up end point that will - backend to create new row in blends table
    //         // describe the three oils 
    //         // need to add three oils to our blends table 
    // // }

    render() {
        return (
        <div className="Calc">
            {this.props.toShow === true && <button id="button" className="blendCalc" onClick={this.handleChange.bind(this)}>Calculate My Blend</button>}
            {this.state.toShow === true && <h5 className="calcIntro">For this blend, you'll need:</h5>}
            <div className="blendResults" id="results">
            {this.state.toShow === true && <h5 className="calcOils">5 Drops of <span className="calcColor">{ this.props.selected.base}</span> for your base oil</h5>}
            {this.state.toShow === true && <h5 className="calcOils">4 Drops of <span className="calcColor">{ this.props.selected.middle}</span> for your middle oil</h5>}
            {this.state.toShow === true && <h5 className="calcOils">3 Drops of <span className="calcColor">{ this.props.selected.top}</span> for your top oil</h5>}
            </div>
            <div className="share-row">
            {/* <div className="row flex-row justify-content-center buttons"> */}
            {this.state.toShow === true && <a href="/" className="shareBlend transparent_btn" data-toggle="modal" data-target="#share">share your blend</a>}
            {this.state.toShow === true && <a href="/login" className="shareBlend transparent_btn" data-target="#save">save your blend</a>}
            {this.state.toShow === true && <a href="/" className="shareBlend transparent_btn"  onClick={this.refreshPage.bind(this)}>make a new blend</a>}
            </div>
        </div>
        )
    }
}
export default Calculation;
