import React from 'react'
import Info from "../Info"
import Footer from "../Footer"
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'

export default function ProductDetails() {
    const productDetails = useSelector(state => state.getProductDetails.productDetails);

    return (
        <>
        <div className="services">
            <div className="product">
                <div className="about-top">
                    <Link to="/">
                        <h4 className="about-title">Home ></h4>
                    </Link>
                    <h6 className="about-banner">Product Details</h6>
                </div>
                <p className="about-text">Product Details</p>
            </div>
            <div className="product-display row">
                <div className="col-md-5">
                    <img className="details-image" src={productDetails.image} alt ="details image" /> 
                </div>
                <div className=" col-md-7 details">
                <h1 className="details-title">{productDetails.title}</h1>
                <h4 className="details-price">
                    ${productDetails.price} /kg
                </h4>
                <div className="details-info">
                    <p className="details-desc">{productDetails.info}</p> 
                </div>
                <div className="details-furtherinfo">
                    <p className="details-avai"><strong>AVAILABILITY:</strong>true or false here</p>
                    <p className="details-category"><strong> CATEGORIES:</strong>{productDetails.type}</p>
                </div>
                <hr className="details-"/>
                </div>
            </div>
                   
        </div>
        <Info />
        <Footer />
        </>
    )
}
