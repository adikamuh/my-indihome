import React, {Fragment, useState} from 'react'
import {makeAnimationSlideLeft,makeAnimationSlideUpDown} from '../animated-visibility/animated-visibility'
import HeaderMobile from '../header-mobile/header-mobile'

import './header.scss'
import { GoThreeBars } from 'react-icons/go'

import logo from '../../assets/Logo-IndiHome.png'
import search from '../../assets/ic-search-red.svg'
import inbox from '../../assets/ic-web-inbox-default.svg'
import profile from '../../assets/ic-web-profile-default.svg'
import history from '../../assets/ic-web-history-default.svg'
import downArrow from '../../assets/down-arrow.svg'

class Header extends React.Component{
    constructor(){
        super()

        this.state = {
            isNavOpen: false,
            tes: 'abv',
            tes2: 'abe',
            icons : {
                iconSearch: search,
                iconInbox: inbox,
                iconProfile: profile,
                iconHistory: history,
                iconDownArrow: downArrow
            }
        }

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this)

        const AnimatedNavbar = makeAnimationSlideUpDown(HeaderMobile)
    }

    handleNavbarToggle(){
        this.setState({ isToggleOn: !this.state.isNavOpen })
    }


    render(){
        return(
            <div className="header-container">
                <div className="header-wrapper">
                    <nav>
                        <a className="toggle-profile" href="profile"><img className="" alt="" src={profile}></img></a>
                        <img className="nav-logo" src={logo} alt=""></img>
                        <div className="content-menus">
                            <ul>
                                <li><a href="home">HOME</a></li>
                                <li className="dropdown-list"><a href="shop">SHOP</a><img src={this.state.icons.iconDownArrow} className="arrow" alt=""></img></li>
                                <li><a href="promo">PROMO & EVENT</a></li>
                                <li><a href="bantuan">BANTUAN</a></li>
                                <li><a href="search"><img className="" alt="" src={this.state.icons.iconSearch}></img></a></li>
                                <li><a href="inbox"><img className="" alt="" src={this.state.icons.iconInbox}></img></a></li>
                                <li><a href="history"><img className="" alt="" src={this.state.icons.iconHistory}></img></a></li>
                                <li><a href="profile"><img className="" alt="" src={this.state.icons.iconProfile}></img></a></li>
                            </ul>
                        </div>
                        <button className="toggle-button" onClick={this.handleNavbarToggle}>
                            <GoThreeBars size="2em" />
                        </button>
                    </nav>
                    <AnimatedNavbar open={this.state.isNavOpen} />
                    {/* <HeaderMobile icons={this.state.icons} isToggle={this.state.isNavOpen}/> */}
                </div>
            </div>
        )
    }
}

export default Header