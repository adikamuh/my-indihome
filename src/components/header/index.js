import React from 'react'

import './header.scss'
import { GoThreeBars } from 'react-icons/go'

import logo from '../../assets/Logo-IndiHome.png'
import search from '../../assets/ic-search-red.svg'
import inbox from '../../assets/ic-web-inbox-default.svg'
import profile from '../../assets/ic-web-profile-default.svg'
import history from '../../assets/ic-web-history-default.svg'
import downArrow from '../../assets/down-arrow.svg'
import HeaderMobile from '../header-mobile/header-mobile'

class Header extends React.Component{
    constructor(){
        super()

        this.state = {
            isToggleOn: false,
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
    }

    handleNavbarToggle(){
        this.setState({ isToggleOn: !this.state.isToggleOn })
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
                    <div 
                        className={[
                            this.state.isToggleOn ? 'fade-in' : 'fade-out'
                        ].filter(x => !!x).join(' ')}
                        // style={{display: this.state.isToggleOn ? 'block' : 'none'}}
                        >
                            <HeaderMobile icons={this.state.icons} isToggle={this.state.isToggleOn}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header