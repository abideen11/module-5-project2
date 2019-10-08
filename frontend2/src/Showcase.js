import React from 'react'
import { Carousel } from 'react-bootstrap'

export default class Showcase extends React.Component {
    render() { 
        console.log("the props are:", this.props.entrepreneur[0])
        return(
            this.props.entrepreneur[0] ?
            <div className="div-show">
                                   

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block-w-100"
                    src={this.props.entrepreneur[0].img_url}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{this.props.entrepreneur[0].name}</h3>
                    <p>{this.props.entrepreneur[0].reason}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block-w-100"
                    src={this.props.entrepreneur[2].img_url}
                    alt="Third slide"
                    />
    
                    <Carousel.Caption>
                    <h3>{this.props.entrepreneur[2].name}</h3>
                    <p>{this.props.entrepreneur[2].reason}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block-w-100"
                    src={this.props.entrepreneur[3].img_url}
                    alt="Third slide"
                    />
    
                    <Carousel.Caption>
                    <h3>{this.props.entrepreneur[3].name}</h3>
                    <p>{this.props.entrepreneur[3].reason}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div> : <div>is loading</div>
        )
    }
    
}