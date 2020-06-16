import React from 'react'

import './navigation.scss'
import chevronRed from '../../assets/ic-chevron-red.svg'

class Navigation extends React.Component{
    render(){
        return(
            <div className="navigation-container">
                <div className="navigation-wrapper">
                    <div className="navigation-lists">
                        <div className="navigation-item selected">
                            <h6>All</h6>
                            <img src={chevronRed} alt="chevron red"></img>
                        </div>
                        <div className="navigation-item">
                            <h6>Personal</h6>
                            <img src={chevronRed} alt="chevron red"></img>
                        </div>
                        <div className="navigation-item">
                            <h6>Promo</h6>
                            <img src={chevronRed} alt="chevron red"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation