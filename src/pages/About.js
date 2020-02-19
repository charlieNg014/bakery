import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {IoMdStarOutline} from "react-icons/io"
import landingimage from "../images/landing-about.png"
import Info from "../components/Info"
import Footer from "../components/Footer"
import displayleftimage from "../images/good-baker.png"
import firstimage from "../images/firstimage.png"
import secondimage from "../images/secondimage.png"
import thirdimage from "../images/thirdimage.png"

export default class About extends Component {
    render() {
        return (
            <>
            <div className="services" style={{padding: 0}}>
                <div className="services about">
                    <div className="about-top">
                        <Link className="abouttitle" to="/">
                            <h4 className="about-title">Home ></h4>
                        </Link>
                        <h6 className="about-banner">About Us</h6>
                    </div>
                    <p className="about-text">About Us</p>
                </div>
                <div className="about-landing row">
                    <div className="col-md-6 about-landing-left">
                        <h5 className="landing-subtitle">Welcome to Dan's bakery</h5>
                        <h1 className="landing-title">Dan's bakery story</h1>
                        <span className="landing-icon"><IoMdStarOutline /></span>
                        <p className="landing-info">Description goes here</p>
                        <h5 className="landing-signature">Daniel - Baker</h5>
                    </div>
                    <div className="col-md-6 about-landing-right">
                        <img className = "landing-image" src={landingimage} alt="landingimage" />
                    </div>
                </div>
                <div className="landing-story">
                    <div className="landing-story-main">
                        <h4 className="landing-subtitle">Our baker</h4>
                        <h2 className="landing-title">The Good Baker</h2>
                        <span className="landing-icon"><IoMdStarOutline /></span>
                    </div>
                    <div className="landing-story-display row">
                        <div className="col-md-6 display-left">
                            <img className="left-image" src={displayleftimage} alt="displayleftimage" />
                        </div>
                        <div className=" col-md-6 display-right">
                            <h3 className="display-name">Daniel Vo</h3>
                            <h4 className="display-role">Baker, Co-founder</h4>
                            <p className="display-info">Info goes here</p>
                            <div className="display-img">
                                <img className="display-image" src={firstimage} alt="firstimage" />
                                <img className="display-image" src={secondimage} alt="firstimage" />
                                <img className="display-image" src={thirdimage} alt="firstimage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Info />
            <Footer />
            </>
        )
    }
}
