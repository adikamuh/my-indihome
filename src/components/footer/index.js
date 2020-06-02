import React from 'react'

import './footer.scss'

import logo from '../../assets/telkom-indonesia-logo.png'
import appStore from '../../assets/download-on-app-store-png-open-2000.png'
import playStore from '../../assets/640px-Google_Play_Store_badge_EN.svg.png'
import phone from '../../assets/ic-web-profile-default.svg'
import facebook from '../../assets/ic-fb.svg'
import ig from '../../assets/ic-ig.svg'
import twitter from '../../assets/ic-tw.svg'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="first-content">
                        <h6>POWERED BY</h6>
                        <img src={logo} className="logo" alt=""></img>

                        <h6>DOWNLOAD MYINDIHOME APP</h6>
                        <div className="store">
                            <img src={appStore} alt=""></img>
                            <img src={playStore} alt=""></img>
                        </div>
                    </div>

                    <div className="second-content">
                        <h6>QUICK LINKS</h6>
                        <ul>
                            <li>Lastest news</li>
                            <li>Check my bills</li>
                            <li>Check complaint status</li>
                            <li>myIndiHome app</li>
                            <li>Partnership</li>
                        </ul>
                    </div>

                    <div className="third-content">
                        <h6>NEWSLETTER</h6>
                        <input type="text" placeholder="Berlangganan ke newsletter"></input>
                        <button>SUBMIT</button>

                        <h6 style={{marginTop:'2em'}}>CONNECT WITH US</h6>
                        <div className="contact">
                            <div className="phone">
                                <img src={phone} alt=""></img>
                                <div className="contact-center">
                                    <h5 className="text-contact">CONTACT CENTER</h5>
                                    <small>Sn-M 06:00-20:00</small>
                                </div>
                            </div>
                            <div className="phone-number">
                                <h4>147</h4>
                            </div>
                        </div>

                        <div className="social-media">
                            <img src={facebook} alt=""></img>
                            <img src={ig} alt=""></img>
                            <img src={twitter} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer