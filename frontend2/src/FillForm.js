import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class FillForm extends React.Component {
    constructor() {
        super()

        this.state = {
            filledOut: false,
            amount: "",
            duration: "",
            enable: false
        }
    }
    updateAmount = () => {
        fetch("http://localhost:3000/agreements", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}` 
            }, 
            body: JSON.stringify({
                amount: parseInt(this.state.amount),
                entrepreneur_id: this.props.activeEntrepreneur.id
            })
        })
        .then(r => r.json())
        .then(agreement => {
            this.props.updateAmount(agreement.entrepreneur_id, agreement.amount)
        })
    } 
    handleChangeAmount = (e) => {
        console.log("the e.target.value = ", e.target.value)
        console.log(typeof test)
        this.setState({
            amount: e.target.value,
            
        })
    }
    handleChangeDuration = (e) => {
        console.log(e.target.value)
        this.setState({
            duration: e.target.value
        })
    }
    toggleEnable = (e) => {
        this.setState({
            enable: e.target.value <= this.props.activeEntrepreneur.amount ? true : false
        })
    }
    handleForm = () => {
        this.setState({filledOut: !this.state.filledOut})
    }

    handleRefresh = () => {
        if(this.props.activeEntrepreneur){

            console.log(this.props.activeEntrepreneur)
        
            return(
                this.state.filledOut ? <div className="after-form"><p>Thank you for your for loan, we are grateful for your act of empowerment.</p>
                </div> :
                <div className="div-fil">
                    <h1>{this.props.activeEntrepreneur.name}</h1>
                    <p>{this.props.activeEntrepreneur.country}</p>
                    <p>{this.props.activeEntrepreneur.continent}</p>
                    <p>{this.props.activeEntrepreneur.reason}</p>
                    <p>$ {this.props.activeEntrepreneur.amount}</p>
                    <form>
                        
                        <label>
                            Amount
                            {" "}<input type="integer" name="amount" value={this.state.amount} onChange={e => {this.handleChangeAmount(e); this.toggleEnable(e)} } ></input>
                        </label>
                        <br />
                        <label>
                            Duration of loan (Year(s))
                            {" "}<select type="integer" name="duration" value={this.state.duration} onChange={(e) => this.handleChangeDuration(e)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </label>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                        {this.state.enable ? 
    
                            <Button type="submit" onClick={() => {this.handleForm() ; this.updateAmount()}} >Accept</Button>
                            : <Button type="submit" disabled>Accept</Button>}
                            </Col>
                        </Form.Group>
                    </form>
                </div>
            )
        }else{
            this.props.history.replace("/entrepreneurs")
            return <div/>
        }
    }
    render() {
        return (this.handleRefresh())
    }
}

export default withRouter(FillForm)