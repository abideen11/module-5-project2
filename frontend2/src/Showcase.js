import React from 'react'
import { Carousel } from 'react-bootstrap'
import Logo from './logo.svg'


export default class Showcase extends React.Component {
    render() { 
        console.log("the props are:", this.props.entrepreneur[0])
        // debugger
        return(
            this.props.entrepreneur[0] ?
            <div className="div-show">
                                   

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block-w-100"
                    src={Logo}
                    alt="First slide"
                    />
                    {/* <br/> */}
                    <Carousel.Caption>
                    <h3>{this.props.entrepreneur[0].name}</h3>
                    <p>{this.props.entrepreneur[0].reason}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block-w-100"
                    src={Logo}
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
                    // src="holder.js/800x400?text=Third slide&bg=20232a"
                    src={Logo}
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