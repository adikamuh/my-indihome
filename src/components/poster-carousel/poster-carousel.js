import React from 'react'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import PosterComponent from '../poster-component/poster-component'

import iflixLogo from '../../assets/iflix-logo.svg'

class PosterCarousel extends React.Component{
    render(){
        return(
            <div 
                className="posterCarousel-container"
                style={{ 
                    display: 'flex',}}
            >
                <div>
                    <img width="100" src={iflixLogo}></img>
                    <h4>819237  9031287</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <Carousel
                    itemWidth  = {300}
                    draggable
                    keepDirectionWhenDragging
                >
                    <PosterComponent />
                    <PosterComponent />
                    <PosterComponent />
                    <PosterComponent />
                    <PosterComponent />
                    <PosterComponent />
                </Carousel>
            </div>
        )
    }
}

export default PosterCarousel