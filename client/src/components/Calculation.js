import React, { Component } from 'react';
import Axios from 'axios';
var smoothScroll = require('smoothscroll');

class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toShow: false,
        }
    }

    saveBlend(e) {
        e.preventDefault();
        if (this.props.loggedIn) {
            // logged in
            // axios.post
            Axios.post('api/blend/new', {
                baseOil: this.props.selected.base,
                middleOil: this.props.selected.middle,
                topOil: this.props.selected.top, 
                mood: this.props.mood
            }).then((res) => {
                alert('Your blend has been saved!')
                this.props.history.replace('/user')
                this.props.updateBlends
            })
        } else {
            // not logged in
            // go to login page
            this.props.history.replace('/login')
            console.log('not logged in')
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

    render() {
        return (
        <div className="Calc">
            {this.props.toShow === true && <button id="button" className="blendCalc" onClick={this.handleChange.bind(this)}>Calculate My Blend</button>}
            {this.state.toShow === true && <h5 className="calcIntro">For this <span>{ this.props.mood }</span> blend, you'll need:</h5>}
            <div className="blendResults" id="results">
                {this.state.toShow === true && <h5 className="calcOils">5 Drops of <span className="calcColor">{ this.props.selected.base}</span> for your base oil</h5>}
                {this.state.toShow === true && <h5 className="calcOils">4 Drops of <span className="calcColor">{ this.props.selected.middle}</span> for your middle oil</h5>}
                {this.state.toShow === true && <h5 className="calcOils">3 Drops of <span className="calcColor">{ this.props.selected.top}</span> for your top oil</h5>}
            </div>
            <div className="share-row">
                {this.state.toShow === true && <a href="#" className="shareBlend transparent_btn" data-toggle="modal" data-target="#share">share your blend</a>}
                {this.state.toShow === true && <a href="#" className="shareBlend transparent_btn" onClick={this.saveBlend.bind(this)} data-target="save">save your blend</a>}
                {this.state.toShow === true && <a href="#" className="shareBlend transparent_btn" onClick={this.refreshPage.bind(this)}>make a new blend</a>}
            </div>
        </div>
        )
    }
}
export default Calculation;
