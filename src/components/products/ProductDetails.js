import React, {useState} from 'react'
import Info from "../Info"
import Footer from "../Footer"
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import reviewimage from "../../images/review-image.jpg"
import {bakeStore} from '../../data'
import {MdHistory} from "react-icons/md"
import {useDispatch} from 'react-redux'
import {getProductDetails} from "../../redux"

export default function ProductDetails() {
    const productDetails = useSelector(state => state.getProductDetails.productDetails);
    
    const relatedBake = bakeStore.filter((bakeStore) => bakeStore.type === productDetails.type);

    //passing data from handle change to store 
    const dispatch = useDispatch();
    const getBakeId = (id) => {
        const testId = bakeStore.find((bakeList) => bakeList.id === id);
        dispatch(getProductDetails(testId));
    }  
    
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
                    <img className="details-image" src={productDetails.image} alt ="detailsimage" /> 
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
            <div className="product-additionalInfo">
                <div className="addInfo-title row">
                    <Link className="col-md-5 title-first">Description</Link>
                    <Link className="col-md-2 title-second">Reviews</Link>
                    <Link className="col-md-5 title-third">Addtional Info</Link>
                </div>
                <div className="additionalInfo-details-desc">
                    <h2 className="addInfo-title">Ingredients:</h2>
                    <p className="addInfo-details">infor about ingredients goes here</p>
                    <h2 className="addInfo-title" style={{marginTop: 30}}>Preparation:</h2>
                    <p className="addInfo-details">infor about preparation goes here</p>
                </div>

                <div className="additionalInfo-details-review">
                    <div className="review row">
                        <div className="col-md-1">
                            <img className="review-image" src={reviewimage} alt="reviewimage" />
                        </div>
                        <div className="review-info col-md-11">
                            <h2 className="addInfo-title" style={{display:"flex"}}>By name: </h2>
                            <h2 className="review-date">Date</h2> 
                            <p className="addInfo-details">interview goes here</p>
                        </div>
                    </div>
                    <div className="review-instant">
                        <h2 className="instant-title">Add your review</h2>
                        <div className="instant-name row">
                            <div className="form-group col-md-6">
                                <input className="form-control special-left" type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <input className="form-control special-right" type="text" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="instant-review row">
                            <textarea className="col-md-12 form-control" rows="6" placeholder="Write your review here"></textarea>
                        </div>
                        <div class="form-group submit">
                            <button class="detail-btn">Submit Review</button>
                        </div>
                    </div>
                </div>
                <div className="additionalInfo-details-add">
                    <p className="addInfo-details">Additional information goes here</p>
                </div>
            </div>
            <div className="relatedproduct">
                <p className="related-subtitle">You may also like</p>
                <h2 className="related-title">Related Products</h2>
                <MdHistory className="story-icon"/>
                <div className="bakelist">
                <div className="bakelist-center">
                    {relatedBake.map((item, index) => {
                            return (
                                // <ProductList key ={index} bakeList = {item} />
                                <div className="product-list">
                                <Link to="/products/details" onClick={() => getBakeId(item.id)}>                                 
                                    <img className="list-image" src={item.image} alt="bakeimage" />
                                </Link>
                                <div className="list-info">
                                    <p className="list-title">{item.title}</p>
                                    <h3 className="list-recipe">{item.recipe}</h3>
                                    <h6 className="list-price">${item.price}</h6>
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
            </div>
                   
        </div>
        <Info />
        <Footer />
        </>
    )
}
