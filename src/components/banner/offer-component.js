import React from 'react'

import './offer-component.scss'

import offerBg from '../../assets/offer-bg.png'

class OfferComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            isToggle: null
        }

        this.resizeScreen = this.resizeScreen.bind(this)
    }

    componentDidMount(){
        window.addEventListener("resize", this.resizeScreen())
    }

    resizeScreen(){
        this.setState({isToggle:window.innerWidth})
    }
    
    render(){
        if(this.state.isToggle >= 768){
            return(
                <div 
                    className="offerComponent-container"
                    style={{
                        backgroundImage: 'url('+offerBg+')'
                    }}
                    >
                    <div 
                        className="offerComponent-wrapper"
                    >
                        <p>Save 30% by subscribing to 2 minipacks for 1 year!</p>
                        <a className="link" href="details">VIEW DETAILS</a>
                    </div>
                </div>
            )
        }else{
            return(
                <React.Fragment>
                <div 
                    className="offerComponent-container"
                    >
                    <div 
                        className="offerComponent-wrapper"
                        style={{
                            backgroundImage: 'url('+offerBg+')'
                        }}
                    >
                    </div>
                    <div className="offerComponent-content">
                        <p>Save 30% by subscribing to 2 minipacks for 1 year!</p>
                        <a className="link" href="details">View Details</a>
                    </div>
                </div>
                </React.Fragment>
            )
        }
    }
}

export default OfferComponent