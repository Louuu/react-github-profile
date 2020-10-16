import React, { Component } from 'react'
import User from './components/User'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Louuu"
        };
    }

    render() {
        return (
            <div className="App">
                <div className="content">
                    <User username={this.state.username}></User>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
