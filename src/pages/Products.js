import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Info from "../components/Info"
import Footer from "../components/Footer"
import ProductFilter from '../components/products/ProductFilter'

export default class Products extends Component {
    render() {
        return (
            <>
            <div className="services">
                <div className="product">
                    <div className="about-top">
                        <Link to="/">
                            <h4 className="about-title">Home ></h4>
                        </Link>
                        <h6 className="about-banner">Shop Page</h6>
                    </div>
                    <p className="about-text">Shop Products</p>
                </div>
            </div>
            <div className="product-display row">
                        <div className="col-md-4">
                            <ProductFilter />
                        </div>
                        <div className=" col-md-8">
                            right
                        </div>
                    </div>
            <Info />
            <Footer />
            </>
        )
    }
}
