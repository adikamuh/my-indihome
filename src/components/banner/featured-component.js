import React, {useState} from 'react'

import './featured-component.scss'

import bgImg from '../../assets/featured-bgimg.png'
import bg from '../../assets/featured-bg.png'

class FeaturedComponent extends React.Component{

    render(){
        return(
            <div className="featuredComponent-container">
                <div 
                    className="featuredComponent-poster"
                    style={{
                        backgroundImage: 'url('+bgImg+')',
                    }}
                
                >
                    <div 
                        className="featured-bg"
                        style={{
                            backgroundImage: 'url('+bg+')',
                        }}
                    >
                        <div className="featured-wrapper">
                            <h5>Have a need for speed?
                            <p>Upgrade your speed for 10% off</p>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedComponent