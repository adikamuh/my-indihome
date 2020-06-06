import React from 'react'
import Bill from '../card/bill'
import Usage from '../card/usage'

import './user-info.scss'

class UserInfo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="userInfo-container">
                    <div className="userInfo-wrapper">
                        <div className="content-left">
                            <Bill />
                        </div>
                        <div className="content-right">
                            <Usage />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UserInfo