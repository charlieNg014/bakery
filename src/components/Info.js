import React, { Component } from 'react'
import infologo from "../images/logo.png"
import {Link} from "react-router-dom"
import {FaCcMastercard, FaCcVisa, FaCcPaypal, FaCcDiscover} from "react-icons/fa"
import axios from "axios"

export default class Info extends Component {
    //declare state
    constructor(props) {
        super(props);

        //binding this 
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: ""
        }
    }

    //declare methods
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit() {
        const newEmailAlert = {
            email: this.state.email
        }

        console.log(newEmailAlert);

        //API to MongoDB
        axios.post("http://localhost:8080/alert/add", newEmailAlert)
        .then(response => console.log(response.data))

        this.setState({
            email: ""
        })
        
        setTimeout(function() {
            window.location = "/";
        }, 6000)

        return newEmailAlert;
    }

    render() {
        return (
            <div className="services" style={{padding: 0}}>
                <div className="row info">
                    <div className="col-md-4">
                        <form className="ps-form--footer-subscribe">
                            <h3 className="email-title" >Get news & offer</h3>
                            <p className="email-desc">Sign up for our mailing list to get latest update and offers</p>
                            <div className="form-group--inside" style={{marginBottom: 20}}>
                                <input className="form-control" type="email" placeholder="Your email..." style={{marginBottom: 20}} onChange={this.onChangeEmail} />
                                <div>
                                    <button className="detail-btn" onClick = {this.onSubmit}>
                                        Submit
                                    </button>
                                </div>
                                
                            </div>
                            <p>* Don't worry, we never spam</p>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <div className="ps-site-info" style={{marginTop: 60}}>
                            <Link className="info-logo" to="/">
                                <img src={infologo} alt="infologo"/>
                            </Link>
                            <p className="logo-desc">55 Cambden Park Parade, Ferntree Gully VIC</p>
                            <p className="logo-desc">
                                Email:
                                <Link href="#"> 
                                    <span className="__cf_email__" data-cfemail="0e676068614e60617b7a666b636b7d206d6163">[Leave your email here]
                                    </span>
                                </Link>
                            </p>
                            <p  className="logo-desc">Phone:<span className="info-hightlight"> Leave your phone number here</span></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="time">
                            <h3 className="time-title">Opening Time</h3>
                            <p className="time-desc" >Monday - Friday:  <span>08:00 am - 08:30 pm</span></p>
                            <p className="time-desc">Saturday - Sunday:  <span>10:00 am - 16:30 pm</span></p>
                            <ul className="time-card">
                                <li><FaCcMastercard /></li>
                                <li><FaCcVisa /></li>
                                <li><FaCcPaypal /></li>
                                <li><FaCcDiscover /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
