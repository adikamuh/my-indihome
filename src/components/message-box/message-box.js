import React from 'react'

import './message-box.scss'
import personalAvatar from '../../assets/av-notif-personal.svg'
import promoAvatar from '../../assets/av-notif-promo-copy-1.svg'
import bannerImg from'../../assets/1512704-b.jpg'

import MessageComponent from '../message-component/message-component'

class MessageBox extends React.Component{
    render(){
        const messages = [
            {
                id: 1,
                isRead: false,
                avatar: personalAvatar,
                time: "21 June 2019, 10:00",
                title: "Quota Internet anda sudah habis. Isi ulang sekarang!",
            },
            {
                id: 2,
                isRead: false,
                avatar: promoAvatar,
                time: "21 June 2019, 10:00",
                title: "30% off Minipack IndiKids and IndiSport, for a limited time only!",
                messageImg: bannerImg
            },
            {
                id: 3,
                isRead: true,
                avatar: promoAvatar,
                time: "21 June 2019, 10:00",
                title: "Watch Gray’s Anatomy Season 16, now available on Hooq!",
                messageImg: bannerImg
            }
        ]

        const messageComponents = messages.map(
            message => <MessageComponent key={message.id} {...message} />
        )

        return(
            <div className="messageBox-container">
                <div className="messageBox-wrapper">
                    <div className="title">
                        <h5>ACTIVITY PACKAGES</h5>
                    </div>
                    <div className="message-lists">
                        {messageComponents}
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageBox