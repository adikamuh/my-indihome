import React from 'react'
import './featured.scss'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import FeaturedComponent from '../banner/featured-component'

class Featured extends React.Component{
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
                <div className="featured-container">
                    <p className="title-small" style={{marginLeft : "8%"}}>RECOMMENDED FOR YOU</p>
                    <Carousel
                        itemWidth = {400}
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
        }else if(this.state.isToggle <= 425){
            return(
                <div className="featured-container">
                    <p className="title-small" style={{marginLeft : "8%"}}>RECOMMENDED FOR YOU</p>
                    <Carousel
                        itemWidth = {280}
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
}

export default Featured