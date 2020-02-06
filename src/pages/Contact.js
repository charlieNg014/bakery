import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {IoMdStarOutline} from "react-icons/io"
import Info from "../components/Info"
import Footer from "../components/Footer"
import axios from "axios";


export default class Contact extends Component {
   //declare the state
   constructor(props) {
    super(props);

    //bind this to the method
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "", 
        note: "",
        modalIsOpen: false
        }
    }

    //delcare functions/methods
    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    onChangeNote(e) {
        this.setState({
            note: e.target.value
        })
    }

    onSubmit() {
        const newRequest = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            note: this.state.note
        }

        console.log(newRequest);

        //API to MongoDB
        axios.post("http://localhost:8080/request/add", newRequest)
        .then(response => console.log(response.data))

        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            note: ""
        })
        
        setTimeout(function() {
            window.location = "/";
        }, 6000)

        return newRequest;
        
    }
    render() {
        return (
            <>
            <div className="services" style={{padding: 0}}>
                <div className="services about">
                    <div className="about-top">
                        <Link to="/">
                            <h4 className="about-title">Home ></h4>
                        </Link>
                        <h6 className="about-banner">Contact Us</h6>
                    </div>
                    <p className="about-text">Contact Us</p>
                </div>
                <div className="about-landing row">
                    <div className="col-md-12 about-landing-left">
                       map goes here
                    </div>
                </div>
                <div className="landing-story">
                    <div className="landing-story-main">
                        <h4 className="landing-subtitle">Contact Info</h4>
                        <h2 className="landing-title">55 Cambden Park Parade, Ferntree Gully VIC</h2>
                        <span className="landing-icon"><IoMdStarOutline /></span>
                    </div>
                    <div className="landing-story-display row">
                        <div className="col-md-3">
                        <figure>
                            <figcaption>Call us</figcaption>
                            <p>Our store:  home phone goes here</p>
                            <p>Brand:  cell phone goes here</p>
                        </figure>
                        </div>
                        <div className=" col-md-3">
                        <figure>
                            <figcaption>Email</figcaption>
                            <p>Our store:<Link to="/"><span className="__cf_email__" data-cfemail="7a13141c153a191213111f080354141f0e"> email goes here</span></Link></p>
                            <p>Support:<Link to="/"><span className="__cf_email__" data-cfemail="7a290f0a0a15080e3a191213111f080354141f0e"> another email</span></Link></p>
                        </figure>
                        </div>
                        <div className=" col-md-3">
                        <figure>
                            <figcaption>Store At Ferntree Gully</figcaption>
                            <p>FERNTREE GULLY VICTORIA 3156</p>
                            <p>T:   + 33 323 34522</p>
                            <p>E:<Link to="/"><span className="__cf_email__" data-cfemail="8ee7e0e8e1cee3e1e1e0fae6ebe3eba0e0ebfa"> email goes here</span></Link></p>
                        </figure>
                        </div>
                        <div className=" col-md-3">
                        <figure>
                            <figcaption>Store At Camberwell</figcaption>
                            <p>CAMBERWELL VICTORIA 3124</p>
                            <p>T:   + 33 323 34522</p>
                            <p>E:<Link to="/"><span className="__cf_email__" data-cfemail="0c65626a634c61636362786469616922626978"> another email goes here</span></Link></p>
                        </figure>
                        </div>
                    </div>
                </div>
                <div className="landing-story" style={{height: 590}}>
                    <div className="landing-story-main">
                        <h4 className="landing-subtitle">Contact</h4>
                        <h2 className="landing-title">Get In Touch With Us</h2>
                    </div>
                    <div className="landing-story-display row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Your First Name" onChange={this.onChangeFirstname}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Your Last Name" onChange={this.onChangeLastname} />
                            </div>
                        </div>
                        <div className=" col-md-3">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Your Email" onChange={this.onChangeEmail} />
                            </div>
                        </div>
                        <div className=" col-md-3">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Phone" onChange={this.onChangePhone}/>
                            </div>
                        </div>
                    </div>
                    <div className="landing-story-display row" style={{marginTop: 20}}>
                    <div className="col-md-12">
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your message here" rows="3" onChange={this.onChangeNote}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="ps-form__submit">
                        <button className="detail-btn" style={{marginTop: 30,fontSize: 25}} onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <Info />
            <Footer />
            </>
        )
    }
}
