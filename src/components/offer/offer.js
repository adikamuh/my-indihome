import React from 'react'
import './offer.scss'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import OfferComponent from '../banner/offer-component'

class Offer extends React.Component{
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
        if(window.innerWidth < 768 ){
            this.setState({isToggle:window.innerWidth})
        }
    }

    render(){
        if(this.state.isToggle === null){
            return(
                <div className="offer-container">
                    <p className="title-small" style={{marginLeft : "8%"}}>PENAWARAN TERBARU</p>
                    <Carousel
                        itemWidth = {300}
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
        }else{
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
}

export default Offer