import React from 'react'

import './card.scss'
import Filled from '../label/filled'

import redArrow from '../../assets/ic-chevron-red.svg'

function Bill(props){
    return(
        <div className="card-container">
            <div className="card-body">
                <div className="body-wrapper">
                    <div className="content">
                        <div className="content-title">
                            <p className="title">Tagihan bulan ini</p>
                            <Filled />
                        </div>
                        <div className="main">
                            <p className="bill">Rp123.113</p>
                        </div>
                        <a className="detail" href="bill">
                            <p>LIHAT DETAIL</p>
                            <img src={redArrow} alt=""></img>
                        </a>
                    </div>
                    <div className="element">
                        <img src={redArrow} alt="red-arrow"></img>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="footer-wrapper">
                    <div className="text-footer">Tanggal jatuh tempo</div>
                    <div className="date">30 Juni 2019</div>
                </div>
            </div>
        </div>
    )
}

export default Bill