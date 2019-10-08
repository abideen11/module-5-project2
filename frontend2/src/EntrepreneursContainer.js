import React from 'react'
import Entrepreneurs from './Entrepreneurs'

export default class EntrepreneursContainer extends React.Component {
    render() {
        return(
            <div className="div-entrp">
                <div className="content-entrp-header">
                    <h1>Our Esteemed Entrepreneurs</h1>
                    {/* <Filter filterEntrep={this.props.filterEntrep}/> */}
                </div>
                <div className="content-entrp">
                </div>
                {this.props.entrepreneurs.map(entrepreneur => <Entrepreneurs entrepreneur={entrepreneur} setActiveEntrepreneur={this.props.setActiveEntrepreneur}/>)}
            </div>
        )
    }
}