import React from 'react'
import './inbox.scss'

import Cover from '../../components/cover/cover'
import Navigation from '../../components/navigation/navigation'
import MessageBox from '../../components/message-box/message-box'

class Inbox extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Cover title="Inbox"/>
                <div className="inbox-container">
                    <Navigation />
                    <MessageBox />
                </div>
            </React.Fragment>
        )
    }
}

export default Inbox