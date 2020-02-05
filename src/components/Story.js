import React, {Component} from 'react';
import storycake from "../images/story.png"
import Banner from './Banner';
import {MdHistory} from "react-icons/md"

export default class Services extends Component {
    render() {
        return (
            <section className="services" style={{marginTop: 20}}>
                <div className="row story">
                    <div className="col-md-5">
                        <img className="story-image" src={storycake} alt="storycakeimage" />
                    </div>
                    <div className="col-md-7">
                        <Banner title="Welcome to Dan's Bakery" subtitle="DAN'S BAKERY STORY">
                            <MdHistory className="story-icon"/>
                        </Banner>
                        <div>
                            <p className="story-desc">Description about your story goes here</p>
                            <h6 className="story-name">Daniel - Baker</h6>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}