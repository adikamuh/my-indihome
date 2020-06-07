import React, {Fragment, useState} from 'react'

import './header.scss'
import './header-mobile.scss'
import { GoThreeBars } from 'react-icons/go'

import logo from '../../assets/Logo-IndiHome.png'
import search from '../../assets/ic-search-red.svg'
import inbox from '../../assets/ic-web-inbox-default.svg'
import profile from '../../assets/ic-web-profile-default.svg'
import history from '../../assets/ic-web-history-default.svg'
import downArrow from '../../assets/down-arrow.svg'

const AnimatedNavbar = makeAnimationSlideUpDown(HeaderMobile)

function Header(){
    const [NavIsOpen, setNavIsOpen] = useState(false);

    // ICON
    const [Icons] = useState({
        search: search,
        inbox: inbox,
        history: history,
        downArrow: downArrow,
        logo: logo,
        profile: profile
    });

    function toggleNav(){
        setNavIsOpen(!NavIsOpen)
    }

    return(
        <Fragment>
            <div className="header-container">
                <div className="header-wrapper">
                    <nav>
                        <a className="toggle-profile" href="profile"><img className="" alt="" src={Icons.profile}></img></a>
                        <img className="nav-logo" src={Icons.logo} alt=""></img>
                        <div className="content-menus">
                            <ul>
                                <li><a href="home">HOME</a></li>
                                <li className="dropdown-list"><a href="shop">SHOP</a><img src={Icons.downArrow} className="arrow" alt=""></img></li>
                                <li><a href="promo">PROMO & EVENT</a></li>
                                <li><a href="bantuan">BANTUAN</a></li>
                                <li><a href="search"><img className="" alt="" src={Icons.search}></img></a></li>
                                <li><a href="inbox"><img className="" alt="" src={Icons.inbox}></img></a></li>
                                <li><a href="history"><img className="" alt="" src={Icons.history}></img></a></li>
                                <li><a href="profile"><img className="" alt="" src={Icons.profile}></img></a></li>
                            </ul>
                        </div>
                        <button className="toggle-button" onClick={toggleNav}>
                            <GoThreeBars size="2em" />
                        </button>
                    </nav>
                </div>
            </div>
            <AnimatedNavbar open={NavIsOpen} icons={Icons} toggleNav={NavIsOpen}/>
        </Fragment>
    )
}

function HeaderMobile(props){
    return(
        <div className={[
            "mobile-container",
            props.toggleNav ? "fade-in" : "fade-out"
        ].filter(x => !!x).join(' ')}>
            <div className="mobile">
                <div className="content-toggle">
                    <ul>
                        <li><a className="nav-item" href="home">HOME</a></li>
                        <li className="dropdown-list"><a className="nav-item" href="shop">SHOP</a><img src={props.icons.downArrow} className="arrow" alt=""></img></li>
                        <li><a className="nav-item" href="promo">PROMO & EVENT</a></li>
                        <li><a className="nav-item" href="bantuan">BANTUAN</a></li>
                        <li className="group-items">
                            <a className="nav-item" href="search"><img className="" alt="" src={props.icons.search}></img></a>
                            <a className="nav-item" href="inbox"><img className="" alt="" src={props.icons.inbox}></img></a>
                            <a className="nav-item" href="profile"><img className="" alt="" src={props.icons.profile}></img></a>
                            <a className="nav-item" href="history"><img className="" alt="" src={props.icons.history}></img></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
 }

export default Header