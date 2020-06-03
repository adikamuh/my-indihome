import React from 'react'

import './offer.scss'

function Offer(props) {
    return(
        <div className="offer-container">
            <div className="offer-wrapper">
                <p>Save 30% by subscribing to 2 minipacks for 1 year!</p>
                <a className="link" href="details">VIEW DETAILS</a>
            </div>
        </div>
    )
}

export default Offer