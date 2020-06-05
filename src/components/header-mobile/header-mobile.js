import React from 'react'

import './header-mobile.scss'


function HeaderMobile(props){
   return(
        <nav className="mobile">
            <div className="content-toggle">
                <ul>
                    <li><a className="nav-item" href="home">HOME</a></li>
                    <li className="dropdown-list"><a className="nav-item" href="shop">SHOP</a><img src={props.icons.iconDownArrow} className="arrow" alt=""></img></li>
                    <li><a className="nav-item" href="promo">PROMO & EVENT</a></li>
                    <li><a className="nav-item" href="bantuan">BANTUAN</a></li>
                    <li className="group-items">
                        <a className="nav-item" href="search"><img className="" alt="" src={props.icons.iconSearch}></img></a>
                        <a className="nav-item" href="inbox"><img className="" alt="" src={props.icons.iconInbox}></img></a>
                        <a className="nav-item" href="profile"><img className="" alt="" src={props.icons.iconProfile}></img></a>
                        <a className="nav-item" href="history"><img className="" alt="" src={props.icons.iconHistory}></img></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderMobile