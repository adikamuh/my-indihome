import React from 'react'

import './footer-copyright.scss'

class FooterCopyright extends React.Component{
    render(){
        return(
            <div className="copyright-container">
                <div className="copyright-wrapper">
                    <div className="copyright">
                        <p>© Copyright 2019 PT Telekomunikasi Indonesia (Persero) Tbk All Right Reserved.</p>
                    </div>

                    <div className="terms">
                        <a href="terms">Kebijakan Privasi</a>
                        <a href="conditions">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterCopyright