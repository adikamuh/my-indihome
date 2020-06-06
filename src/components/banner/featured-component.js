import React from 'react'

import './featured-component.scss'

import bgImg from '../../assets/featured-bgimg.png'
import bg from '../../assets/featured-bg.png'

function FeaturedComponent(props) {
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
                        <h5>Have a need for speed?</h5>
                        <p>Upgrade your speed for 10% off</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedComponent