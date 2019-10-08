import React from 'react'
import FillForm from './FillForm'
import { withRouter } from 'react-router-dom'

class LogIn extends React.Component {
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
   
    login = e => {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(r => r.json())
        .then(data => {
            localStorage.token = data.token
            localStorage.id = data.id
            this.props.history.push('/')
            console.log(data)
        })
    }
    render() {
        return(
            <div className="div-login">
                <h2>Log In</h2>
                <form onSubmit={(e) => this.login(e)}>
                <label>Username</label>{"  "}
                <input onChange={this.handleChange} name="username" placeholder="Username" type="username" />
                <br />
                <label>Password</label>{"  "}
                <input onChange={this.handleChange} name="password" placeholder="Password" type="password" />
                <br />
                <input type="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(LogIn)