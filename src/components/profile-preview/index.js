import React from 'react'

import './profile-preview.scss'

import rightArrow from '../../assets/ic-chevron-white.svg'
import avatar from '../../assets/avatar.png'
import notifDark from '../../assets/ic_notif_dark.svg'
import scanDark from '../../assets/ic_scan_dark.svg'

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
                    <div 
                        className="avatar"
                        style={{
                            backgroundImage: 'url('+avatar+')'
                        }}
                    ></div>
                    <div className="content">
                        <p className="greeting title-small">{this.state.greeting}</p>
                        <a className="profile" href="profile">
                            <p>{this.state.name}</p>
                            <img src={rightArrow} alt=""></img>
                        </a>
                        <p className="points">{this.state.points} pts</p>
                    </div>

                    <div className="notif-mobile">
                        <img className="scan" src={scanDark} alt="scan"></img>
                        <img className="notif" src={notifDark} alt="notig"></img>
                    </div>
                </div>
            </div>
        )
    }
}