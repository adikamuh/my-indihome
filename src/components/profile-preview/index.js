import React from 'react'

import './profile-preview.scss'

import rightArrow from '../../assets/ic-chevron-white.svg'

export default class ProfilePreview extends React.Component {
    constructor(){
        super()
        this.state = {
            greeting: "SELAMAT PAGI",
            name: "Michelle Lesmana",
            points: "1,290"
        }
    }
    
    render(){
        return(
            <div className="profile-preview-container">
                <div className="profile-preview-wrapper">
                    <div className="avatar">

                    </div>
                    <div className="content">
                        <p className="greeting">{this.state.greeting}</p>
                        <a className="profile" href="profile">
                            <p>{this.state.name}</p>
                            <img src={rightArrow} alt=""></img>
                        </a>
                        <p className="points">{this.state.points} pts</p>
                    </div>
                </div>
            </div>
        )
    }
}