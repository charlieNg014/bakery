import React, { Component } from 'react'
import {FaCopyright, FaFacebook, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import {GoMarkGithub} from "react-icons/go"
import {Link} from "react-router-dom"

export default class Footer extends Component {
    render() {
        return (
            <div className="services footer">
                <div className="col-md-12">
                    <p className="ft-info">
                        <Link className="ft-social"><FaFacebook /></Link>
                        <Link className="ft-social" ><FaTwitter /></Link>
                        <Link className="ft-social" to="https://www.linkedin.com/in/charlie-nguyen-81526a1a1/"><FaLinkedinIn /></Link>
                        <Link className="ft-social" to="https://github.com/charlieNg014"><GoMarkGithub /></Link>
                    </p>
                </div>
                <div className="col-md-12"><FaCopyright /> 2020 Dan's Bakery. Made by Charlie Nguyen</div>
            </div>
        )
    }
}
