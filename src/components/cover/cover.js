import React from 'react'

import './cover.scss'
import background from '../../assets/bg-product-internet.svg'
import backWhite from '../../assets/ic-back-white.svg'

import { Link } from 'react-router-dom'

class Cover extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div 
                className="cover-container"
                style={{
                    backgroundImage: 'url('+background+')'
                }}
            >
                <div className="cover-wrapper">
                    <div className="position">
                        <Link to="/" className="link">
                            <img src={backWhite} alt="back white"></img>
                            <p>HOME</p>
                        </Link>
                    </div>
                    <h1 className="title">{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Cover