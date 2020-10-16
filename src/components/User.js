import React, { Component } from 'react'
import './User.css'

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            info: null
        };
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.username}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        info: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    sayHello() {
        alert('Thanks for visiting!')
    }

    render() {
        const { error, isLoaded, info } = this.state;
        const styleWidth = {width : '100%'};
        if (error) {
            return <div>Error: { error.message }</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div class="card">
                    <img src={info.avatar_url} alt={info.login} style={styleWidth}/>
                    <h1>{info.name}</h1>
                    <p class="repos">{info.public_repos} Public Repos</p>
                    <p>{info.location}</p>
                    <p><a href={info.html_url}><button onClick={this.sayHello}>Find me on Github</button></a></p>
                </div>
            )
        }

    }
}
