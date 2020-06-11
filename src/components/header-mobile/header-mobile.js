import React from 'react'

import './header-mobile.scss'

import homeOn from '../../assets/ic_menu_home_on.svg'
import history from '../../assets/ic_menu_bill_off.svg'
import shop from '../../assets/ic_menu_shop_off.svg'
import help from '../../assets/ic_menu_help_off.svg'
import profile from '../../assets/ic_menu_profile_off.svg'

function HeaderMobile(props){
   return(
       <React.Fragment>
        <nav className="navMobile-container">
            <div className="navMobile-wrapper">
                <ul className="navMobile-list">
                    <li className="navMobile-items">
                        <img src={homeOn} alt="home on"></img>
                        <h6 className="active">Home</h6>
                    </li>
                    <li className="navMobile-items">
                        <img src={history} alt="history"></img>
                        <h6>History</h6>
                    </li>
                    <li className="navMobile-items">
                        <img src={shop} alt="shop"></img>
                        <h6>Shop</h6>
                    </li>
                    <li className="navMobile-items">
                        <img src={help} alt="help"></img>
                        <h6>Help</h6>
                    </li>
                    <li className="navMobile-items">
                        <img src={profile} alt="profile"></img>
                        <h6>Profile</h6>
                    </li>
                </ul>
            </div>
        </nav>
        </React.Fragment>
    )
}

export default HeaderMobile