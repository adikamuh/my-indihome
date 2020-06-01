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
                        <p className="title">Tagihan bulan ini</p>
                        <p className="bill">Rp123.123</p>
                        <a className="detail" href="bill">
                            <p>LIHAT DETAIL</p>
                            <img src={redArrow} alt=""></img>
                        </a>
                    </div>
                    <div className="element">
                        <Filled />
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="footer-wrapper">
                    <div>Tanggal jatuh tempo</div>
                    <div className="date">30 Juni 2019</div>
                </div>
            </div>
        </div>
    )
}

export default Bill