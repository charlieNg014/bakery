import React, {Component} from 'react';
import menuimage from "../images/menuimage.jpg"
import Banner from './Banner';
import {MdHistory} from "react-icons/md"

//import images
// import cake1 from "../images/cake1.png"
// import cake2 from "../images/cake2.png"
// import cake3 from "../images/cake3.png"
// import bake1 from "../images/bake1.png"
// import bake2 from "../images/bake2.png"
// import bake3 from "../images/bake3.png"

export default class Menu extends Component {
    //store the array in state first before thinking about dispaying it below by using map 
    state = {
        cakes: [
            {icon: <MdHistory />, title: "First cake", info: "Description for first cake", price: "12.00"},
            {icon: <MdHistory />, title: "Second cake", info: "Description for second cake", price: "12.00"},
            {icon: <MdHistory />, title: "Third cake", info: "Description for third cake", price: "12.00"}
        ],
        bakery: [
            {icon: <MdHistory />, title: "First bake", info: "Description for first bake", price: "12.00"},
            {icon: <MdHistory />, title: "Second bake", info: "Description for sescond bake", price: "12.00"},
            {icon: <MdHistory />, title: "Third bake", info: "Description for third bake", price: "12.00"}
        ]

    }
    render() {
        return (
            <section className="services" style={{marginTop: 20, padding: 0}}>
                <div className="row menu">
                    <div className="col-md-9">
                         <Banner className="banner" 
                            subtitle="SPECIAL MENU"
                            title = "Menu of our shop"
                         >
                            <MdHistory className="story-icon"/>
                            <div className = "row menu-display">
                                <div className="col-md-6">
                                    {this.state.cakes.map((item, index) => {
                                            return(
                                                <article key={index} className="service row">
                                                    <div className="col-md-3">
                                                        <span className="menu-icon" style={{color: "bisque"}}>{item.icon}</span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h6 className="name">{item.title}</h6>
                                                        <p className="info">{item.info}</p>   
                                                    </div>
                                                    <div className="col-md-5">
                                                        <p className="price">${item.price}</p>
                                                    </div> 
                                                </article>
                                            )
                                        })}
                                </div>
                                <div className="col-md-6">
                                    {this.state.bakery.map((item, index) => {
                                        return(
                                            <article key={index} className="service row">
                                                <div className="col-md-3">
                                                    <span className="menu-icon" style={{color: "bisque"}}>{item.icon}</span>
                                                </div>
                                                <div className="col-md-4">
                                                    <h6 className="name">{item.title}</h6>
                                                    <p className="info">{item.info}</p>   
                                                </div>
                                                <div className="col-md-5">
                                                    <p className="price">${item.price}</p>
                                                </div> 
                                            </article>
                                        )
                                    })}
                                </div>
                            </div>
                         </Banner>
                    </div>
                    <div className="col-md-3">
                        <img className="menu-image" src={menuimage} alt="menuimage" />
                    </div>
                </div>
            </section>
        )
    }
}