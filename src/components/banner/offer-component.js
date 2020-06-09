import React from 'react'

import './offer-component.scss'

import offerBg from '../../assets/offer-bg.png'

function OfferComponent(props) {
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
}

export default OfferComponent