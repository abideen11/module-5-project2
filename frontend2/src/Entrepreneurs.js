import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Entrepreneurs extends React.Component {
    state = {
        loan: false 
    }
    handleLoan = () => {
        this.setState({loan: !this.state.loan})
    }
    redirectToLoanForm = () => {
        if(localStorage.token){
            this.props.setActiveEntrepreneur(this.props.entrepreneur)
            this.props.history.push(`/fillform`)
        } else {
            this.props.history.push('/login')
        }
    }
    render() {
        console.log(this.props.entrepreneur)
        return(
            <div className="div-entrp-contain">
                <div className="div-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.entrepreneur.name}</Card.Title>
                            <Card.Text>{this.props.entrepreneur.country}</Card.Text>
                            <Card.Text>{this.props.entrepreneur.continent}</Card.Text>
                            <Card.Text>{this.props.entrepreneur.reason}</Card.Text>
                            <Card.Text>$ {this.props.entrepreneur.amount}</Card.Text>
                            {localStorage.token ? <Button variant="primary" onClick={this.redirectToLoanForm}>Loan</Button> : <Button variant="primary" onClick={this.redirectToLoanForm}>Log in to submit a loan</Button>}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter(Entrepreneurs)