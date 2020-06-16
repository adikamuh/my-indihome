import React from 'react'

import './message-component.scss'

function MessageComponent(props){
    return(
        <div 
            className={[
                "messageComponent-container",
                !props.isRead && "read"
            ].filter(x => !!x).join(' ')}
        >
            <div className="messageComponent-wrapper">
                <div className="message-header">
                    <img src={props.avatar} alt="avatar"></img>
                    <div className="details">
                        <p className="time">{props.time}</p>
                        <h6>{props.title}</h6>
                    </div>
                </div>

                <div 
                    style={{
                        display: props.messageImg === undefined? 'none' : 'block',
                        backgroundImage: 'url('+props.messageImg+')',
                    }}
                    className="message-img"
                >
                </div>
            </div>
        </div>
    )
}

export default MessageComponent