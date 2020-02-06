import React, {Component} from 'react';
import menuimage from "../images/menuimage.jpg"
import Banner from './Banner';
import {MdHistory} from "react-icons/md"
// import {cake, bake} from "../data"
import {cake, bake} from "../data"

export default class Menu extends Component {
    state = {
        cakes: cake,
        bakery: bake
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
                                                        <img className="item-image" src={item.image} alt="itemimage" />
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
                                                    <img className="item-image" src={item.image} alt="itemimage" />                                                </div>
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