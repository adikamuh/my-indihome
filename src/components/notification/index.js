import React from 'react'

import './notification.scss'

import exclamation from '../../assets/grfx-action-warning.svg'
import whiteArrow from '../../assets/ic-chevron-white.svg'

class Notification extends React.Component{
    constructor(){
        super()
        this.state = {
            notification : "Quota Internet anda sudah habis."
        }
    }

    handleClick() {
        console.log("clicked!")
    }

    render(){
        return(
            <div>
                <div className="notification-container" onClick={this.handleClick}>
                    <div className="notification-wrapper">
                        <div className="notification-content">
                            <img className="exclamation" src={exclamation} alt=""></img>
                            <div className="notification-info">
                                <h5>{this.state.notification}</h5>
                                <p>Tap here to top up.</p>
                            </div>
                        </div>

                        <img src={whiteArrow} alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notification