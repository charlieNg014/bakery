import React, {Component} from 'react';
import Title from './Title';
import {FaBirthdayCake} from "react-icons/fa";
import {MdEvent} from "react-icons/md"
import {GiCakeSlice} from "react-icons/gi"

export default class Services extends Component {
    //store the array in state first before thinking about dispaying it below by using map 
    state = {
        services: [
            {icon: <FaBirthdayCake/>, title: "Birthday", info: "Our specially designed range includes beautiful cakes for every member of the family - from baby cakes through every milestone including 18th, 21st, 40th, 50th and everything in between."},
            {icon: <MdEvent/>, title: "Event", info: "Let us help make your next occasion an absolute delight"},
            {icon: <GiCakeSlice/>, title: "First service", info: "Collect your Picnic Afternoon Tea Lunch from Dan's Bakery and enjoy your savoury food while relaxing in a park or your favourite location in Melbourne."}
        ]
    }
    render() {
        return (
            <section className="services service-center" style={{backgroundColor: "aliceblue"}}>      
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return(
                            <article key={index} className="service">
                                <span style={{color: "bisque"}}>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}