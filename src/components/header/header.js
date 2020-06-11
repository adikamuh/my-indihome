import React, {Fragment} from 'react'

import './header.scss'
import HeaderMobile from '../header-mobile/header-mobile'

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
            isToggle: null,
            Icons:{
                search: search,
                inbox: inbox,
                history: history,
                downArrow: downArrow,
                logo: logo,
                profile: profile
            }
        }

        this.resizeScreen = this.resizeScreen.bind(this)
    }

    componentDidMount(){
        window.addEventListener("resize", this.resizeScreen())
    }

    resizeScreen(){
        if(window.innerWidth < 768 ){
            this.setState({isToggle:window.innerWidth})
        }
    }

    // toggleNav(){
    //     setNavIsOpen(!NavIsOpen)
    // }

    render(){
        if(this.state.isToggle === null){
            return(
                <Fragment>
                    <div className="header-container">
                        <div className="header-wrapper">
                            <nav>
                                <img className="nav-logo" src={this.state.Icons.logo} alt=""></img>
                                <div className="content-menus">
                                    <ul>
                                        <li><a href="home">HOME</a></li>
                                        <li className="dropdown-list"><a href="shop">SHOP</a><img src={this.state.Icons.downArrow} className="arrow" alt=""></img></li>
                                        <li><a href="promo">PROMO & EVENT</a></li>
                                        <li><a href="bantuan">BANTUAN</a></li>
                                        <li><a href="search"><img className="" alt="" src={this.state.Icons.search}></img></a></li>
                                        <li><a href="inbox"><img className="" alt="" src={this.state.Icons.inbox}></img></a></li>
                                        <li><a href="history"><img className="" alt="" src={this.state.Icons.history}></img></a></li>
                                        <li><a href="profile"><img className="" alt="" src={this.state.Icons.profile}></img></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </Fragment>
            )
        }else{
            return(
                <HeaderMobile />
            )
        }
    }
}

export default Header