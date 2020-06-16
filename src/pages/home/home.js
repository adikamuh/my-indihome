import React from 'react'

import Notification from '../../components/notification';
import Featured from '../../components/featured/featured';
import Subscribe from '../../components/subscribe/subscribe';
import UserInfo from '../../components/user-info/user-info';
import Offer from '../../components/offer/offer';
import ProfilePreview from '../../components/profile-preview'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProfilePreview />
                <UserInfo />
                <Notification />

                <Featured />

                <Offer />
                <Subscribe />
            </React.Fragment>
        )
    }
}

export default Home