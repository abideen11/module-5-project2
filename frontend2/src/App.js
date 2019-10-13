import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Footer from './Footer'
import Home from './Home'
import Error from './Error'
import FillForm from './FillForm'
import EntrepreneursContainer from './EntrepreneursContainer';
import Donate from './Donate'
import Newsletter from './Newsletter';

class App extends React.Component {
  state = {
    user: {},
    activeUser: null,
    activeEntrepreneur: null,
    entrepreneurs: [],
    isLoaded: false,
    displayEntrepreneurs: []
  }
  componentDidMount() {
    fetch("http://localhost:3000/entrepreneurs")
    .then(r => r.json())
    .then(data => {
      this.setState({
        entrepreneurs: data, 
        isLoaded: true,
      })
    })
  }
  updateAmount = (entrepreneur_id, loanAmount) => {
    this.setState({
      entrepreneurs: this.state.entrepreneurs.map((e)=>{
        if(e.id === entrepreneur_id){
          e.amount = e.amount - loanAmount
        }
        return e
      })
    })
  }
  setActiveEntrepreneur = (entrepreneur) => {
    this.setState({activeEntrepreneur: entrepreneur})
  }
  render() {
    return (
      <BrowserRouter>
      <div>
          <NavBar entrepreneurs={this.state.entrepreneurs}/>
          <Switch>
            <Route exact path="/" render={() => <Home entrepreneurs={this.state.entrepreneurs}/>} />
            <Route path="/signup" render={() => <SignUp handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn}/>}/>
            <Route path="/login" component={LogIn} />
            <Route path="/entrepreneurs" render={() => <EntrepreneursContainer entrepreneurs={this.state.entrepreneurs} filterEntrep={this.filterEntrep} setActiveEntrepreneur={this.setActiveEntrepreneur}/>} />
            <Route path="/fillform" render={() => <FillForm updateAmount={this.updateAmount} activeEntrepreneur={this.state.activeEntrepreneur} agreeLoan={this.agreeLoan}/>} /> 
            <Route path="/donate" component={Donate} />
            <Route path="/newsletter" component={Newsletter} />
            <Route path="*" component={Error} />
          </Switch>
          <Route component={Footer} />
        </div>
    </BrowserRouter>
    );
  }
 
}

export default App;
