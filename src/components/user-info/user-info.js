import React from 'react'
import Bill from '../card/bill'
import Usage from '../card/usage'

import './user-info.scss'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

class UserInfo extends React.Component{
    constructor(){
        super()
        this.state = {
            isToggle: null
        }

        this.resizeScreen = this.resizeScreen.bind(this)
    }

    componentDidMount(){
        window.addEventListener("resize", this.resizeScreen())
    }

    resizeScreen(){
        if(window.innerWidth < 768 ){
            this.setState({isToggle:window.innerWidth})
        }
    }

    render(){
        if(this.state.isToggle === null){
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
        }else if(this.state.isToggle <= 320 ){
            return(
                <React.Fragment>
                    <div className="userInfo-container">
                        <div className="userInfo-wrapper">
                            <Carousel
                                itemWidth = {280}
                            >
                                <Bill />
                                <Usage />
                            </Carousel>
                        </div>
                    </div>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    <div className="userInfo-container">
                        <div className="userInfo-wrapper">
                            <Carousel
                                itemWidth = {300}
                                offset = {14}
                            >
                                <Bill />
                                <Usage />
                            </Carousel>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

    }
}

export default UserInfo