import React from 'react'
import './offer.scss'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import OfferComponent from '../banner/offer-component'

class Offer extends React.Component{
    render(){
        return(
            <div className="offer-container">
                <p className="title-small" style={{marginLeft : "8%"}}>PENAWARAN TERBARU</p>
                <Carousel
                    itemWidth = {130}
                    draggable
                    keepDirectionWhenDragging
                >
                    <OfferComponent />
                    <OfferComponent />
                    <OfferComponent />
                    <OfferComponent />
                    <OfferComponent />
                    <OfferComponent />
                </Carousel>
            </div>
        )
    }
}

export default Offer