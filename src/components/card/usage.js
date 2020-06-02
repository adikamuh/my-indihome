import React from 'react'

import './card.scss'
// import Filled from '../label/filled'

import redArrow from '../../assets/ic-chevron-red.svg'
import wifi from '../../assets/ic-usage-wifi.svg'

function Usage(props){
    return(
        <div className="card-container">
            <div className="card-body">
                <div className="body-wrapper">
                    <div className="content">
                        <p className="title">Penggunaan bulan ini</p>
                        <div className="usage">
                            <div className="details">
                                <img src={wifi} alt=""></img>
                                <h3>
                                    <div>450 </div>
                                    <span className="small"> GB</span>
                                </h3>
                            </div>
                            <div className="details">
                                <img src={wifi} alt=""></img>
                                <h3>
                                    <div>450 </div>
                                    <span className="small"> MENIT</span>
                                </h3>
                            </div>
                        </div>
                        <a className="detail" href="bill">
                            <p>LIHAT DETAIL</p>
                            <img src={redArrow} alt=""></img>
                        </a>
                    </div>
                    <div className="element">
                        {/* <Filled /> */}
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="footer-wrapper">
                    <div>IndiHome Triple Play Value 10 Mbps + 92 channel + 1000 minutes</div>
                </div>
            </div>
        </div>
    )
}

export default Usage