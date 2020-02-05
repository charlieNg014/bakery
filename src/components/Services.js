import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    //store the array in state first before thinking about dispaying it below by using map 
    state = {
        services: [
            {icon: <FaCocktail/>, title: "First service", info: "Description for first service"},
            {icon: <FaHiking/>, title: "Second Service", info: "Description for second service"},
            {icon: <FaBeer/>, title: "Third Service", info: "Description for third service"}
        ]
    }
    render() {
        return (
            <section className="services" style={{backgroundColor: "aliceblue"}}>      
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