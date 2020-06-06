import React from 'react'

import './header-mobile.scss'


function HeaderMobile(props){
   return(
       <React.Fragment>
        <nav className="mobile">
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
        </nav>
        </React.Fragment>
    )
}

export default HeaderMobile