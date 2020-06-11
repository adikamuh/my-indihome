import React from 'react'

import './subscribe.scss'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import hooqLogo from '../../assets/hooq-logo.png'
import cpLogo from '../../assets/cp-logo.png'
import iflixLogo from '../../assets/iflix-logo.svg'
import PosterComponent from '../poster-component/poster-component'

class Subscribe extends React.Component{
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
        this.setState({isToggle:window.innerWidth})
    }

    render(){
        if(this.state.isToggle >= 768){
            return(
                <div className="subscribe-container">
                    <div className="subscribe-wrapper">
                        <div className="content">
                            <div className="content-left">
                                <p className="title-small">SUBSCRIBE & WATCH</p>
    
                                <div className="logo">
                                    <img className="stream-logo" src={iflixLogo} alt="iflix"></img>
                                    <img className="stream-logo" src={hooqLogo} alt="Hooq"></img>
                                    <img className="stream-logo" src={cpLogo} alt="Catchplay"></img>
                                </div>
    
                                <h1>Subscribe dan nonton langsung di TV atau perangkat Anda!</h1>
                                <p className="text-small">Tonton berbagai acara dan film internasional dan domestik dengan berlangganan mulai dari <span className="font-weight-bold">Rp100.000/bulan.</span></p>
    
                                <button className="btn-primary">SUBSCRIBE</button>
                            </div>
                            <Carousel
                                itemWidth = {300}
                                itemHeight = {200}
                                draggable
                                keepDirectionWhenDragging
                            >
                                <PosterComponent />
                                <PosterComponent />
                                <PosterComponent />
                                <PosterComponent />
                                <PosterComponent />
                                <PosterComponent />
                            </Carousel>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="subscribe-container">
                    <div className="subscribe-wrapper">
                        <div className="content">
                            <p className="title-small">WATCH ALL THESE ON HOOQ</p>
                            <Carousel
                                itemWidth = {102}
                                draggable
                                keepDirectionWhenDragging
                            >
                                <PosterComponent />
                                <PosterComponent />
                                <PosterComponent />
                                <PosterComponent />
                                <PosterComponent />
                                <PosterComponent />
                            </Carousel>
                            <button className="btn-primary">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Subscribe