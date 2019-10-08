import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome, FaHandshake } from 'react-icons/fa'
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


class NavBar extends React.Component {
    state = {
        isOpen: false,
        query: "",
        searchResult: []
    }
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    handleQuery = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleResult = () => {
        if(this.props.entrepreneurs.map(all => all.name.includes(this.state.query) || all.country.includes(this.state.query) || all.continent.includes(this.state.query) || all.reason.includes(this.state.query) || all.amount.includes(this.state.query))) {
            this.props.history.push('/entrepreneurs')
        }
        else {
            this.props.history.push('/*')
        }

    }
    directToDonate = () => {
        this.props.history.push('/donate')
    }
    logOut = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    render() {
        return(
        <div className="div-bar">
        <div className="logo-tmp">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={<FaHandshake />}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            <FaHandshake />
            {'Yoon'}
            </Navbar.Brand>
            <div className="div-reglog">
            {localStorage.token ? <DropdownButton id="dropdown-basic-button" title="Log Out / Home">
                <Dropdown.Item onClick={this.logOut}> <Navbar.Brand>  Log Out </Navbar.Brand> </Dropdown.Item>
                <Dropdown.Item > <Navbar.Brand>  <Link to="/">Home</Link> </Navbar.Brand> </Dropdown.Item>
            </DropdownButton> : <DropdownButton id="dropdown-basic-button" title="Register / Log In">
                <Dropdown.Item > <Navbar.Brand>  <Link to="/login">Log In</Link> </Navbar.Brand> </Dropdown.Item>
                <Dropdown.Item > <Navbar.Brand>  <Link to="/signup">Register </Link> </Navbar.Brand> </Dropdown.Item>
            </DropdownButton>}
            </div>
        </div>
        <nav className="navbar">
            <Nav className="mr-auto">
                <Navbar.Brand>  <Link to="/"><font color="blue"></font><FaHome /> Home </Link></Navbar.Brand>
                <Navbar.Brand>  <Link to="/entrepreneurs">Entrepreneurs </Link> </Navbar.Brand>
                <Form inline>
                <FormControl type="text" name="query" value={this.state.query} onChange={this.handleQuery} placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info" onClick={this.handleResult} >Search</Button>
            </Form>
            </Nav>
            <Form inline>
                <Button variant="outline-info" onClick={this.directToDonate}>Donate</Button>
            </Form>
        </nav>
        </div>
        )
    }
}

export default withRouter(NavBar)