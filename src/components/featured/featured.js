import React from 'react'
import './featured.scss'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import FeaturedComponent from '../banner/featured-component'

class Featured extends React.Component{
    render(){
        return(
            <div className="featured-container">
                <Carousel
                    itemWidth = {300}
                    slidesPerPage = {3}
                    draggable
                    keepDirectionWhenDragging
                >
                    <FeaturedComponent />
                    <FeaturedComponent />
                    <FeaturedComponent />
                    <FeaturedComponent />
                    <FeaturedComponent />
                    <FeaturedComponent />
                    <FeaturedComponent />
                    <FeaturedComponent />
                </Carousel>
            </div>
        )
    }
}

export default Featured