import React from 'react'

import './header.scss'

import logo from '../../assets/Logo-IndiHome.png'
import search from '../../assets/ic-search-red.svg'
import inbox from '../../assets/ic-web-inbox-default.svg'
import profile from '../../assets/ic-web-profile-default.svg'
import history from '../../assets/ic-web-history-default.svg'
import downArrow from '../../assets/down-arrow.svg'

class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <div className="header-wrapper">
                    <nav>
                        <div className="content-logo">
                            <img src={logo} alt=""></img>
                        </div>
                        <div className="content-menus">
                            <ul>
                                <li><a href="home">HOME</a></li>
                                <li className="dropdown-list"><a href="shop">SHOP</a><img src={downArrow} className="arrow" alt=""></img></li>
                                <li><a href="promo">PROMO & EVENT</a></li>
                                <li><a href="bantuan">BANTUAN</a></li>
                                <li><a href="search"><img className="" alt="" src={search}></img></a></li>
                                <li><a href="inbox"><img className="" alt="" src={inbox}></img></a></li>
                                <li><a href="history"><img className="" alt="" src={history}></img></a></li>
                                <li><a href="profile"><img className="" alt="" src={profile}></img></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header