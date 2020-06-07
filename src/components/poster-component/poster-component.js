import React from 'react'

import './poster-component.scss'

import posterBg from '../../assets/poster-bg.png'

function PosterComponent(){
    return(
        <div 
            className="poster-container"
            style={{
                backgroundImage: 'url('+posterBg+')'
            }}    
        >
        </div>
    )
}

export default PosterComponent