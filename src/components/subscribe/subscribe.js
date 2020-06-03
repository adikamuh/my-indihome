import React from 'react'

import './subscribe.scss'

import hooqLogo from '../../assets/hooq-logo.png'
import cpLogo from '../../assets/cp-logo.png'
import iflixLogo from '../../assets/iflix-logo.svg'

class Subscribe extends React.Component{
    render(){
        return(
            <div className="subscribe-container">
                <div className="subscribe-wrapper">
                    <div className="content">
                        <p className="title-small">SUBSCRIBE & WATCH</p>

                        <div className="logo">
                            <img className="stream-logo" src={iflixLogo} alt="iflix"></img>
                            <img className="stream-logo" src={hooqLogo} alt="Hooq"></img>
                            <img className="stream-logo" src={cpLogo} alt="Catchplay"></img>
                        </div>

                        <h1>Subscribe dan nonton langsung di TV atau perangkat Anda!</h1>
                        <p className="text-small">Tonton berbagai acara dan film internasional dan domestik dengan berlangganan mulai dari <span className="font-weight-bold">Rp100.000/bulan.</span></p>

                        <button className="btn-primary">SUBSCRIBE</button>
                    </div>
                    <div className="poster">
                        <div className="poster-img"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subscribe