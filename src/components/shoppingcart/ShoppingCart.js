import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Info from ".././Info"
import Footer from ".././Footer"
import {useSelector, useDispatch} from 'react-redux'
import CartDetails from './CartDetails'
import {getUpdateBakeOrder} from "../../redux"

export default function ShoppingCart() {
    const dispatch = useDispatch();
    let [newBakeOrder] = useState(useSelector(state => state.getNewBakeOrder.newBakeOrder));
    // console.log(newBakeOrder);

    // let [finalBakeOrder] = useState(useSelector(state => state.getUpdateBakeOrder.finalBakeOrder));
    const finalOrder = useSelector(state => state.getFinalBakeOrder.finalOrder);
    console.log(finalOrder);
    
    return (
        <>
        <div className="services" style={{padding: 0}}>
            <div className="services about">
                <div className="about-top">
                    <Link to="/">
                        <h4 className="about-title">Home ></h4>
                    </Link>
                    <h6 className="about-banner">Wishlist</h6>
                </div>
                <p className="about-text">Wishlist</p>
            </div>
            <div className="cart fluid">
                <hr className="filter-line"/>
                <div className="cart-displayforphone">
                    <div className="cart-title">
                        <div className="first-col">
                            <h3 className="title-name">Product Name</h3>
                        </div>
                        <div className="second-col">
                            <h3 className="title-price">Unit Price</h3>
                        </div>
                        <div className="third-col">
                            <h3 className="title-quantity">Quantity</h3>
                        </div>
                        <div className="fourth-col">
                            <h3 className="title-total">Total</h3>
                        </div>
                    </div>
                    {newBakeOrder.map((item, index) => {
                        return (
                            <>
                            <CartDetails key={index} orderdetails = {item} />
                            </>
                        )
                    })}
                    {/* <CartDetails orderdetails = {newBakeOrder} /> */}
                </div>
                <hr className="filter-line"/>
                <div className="cart-button">
                    <div className="first-button">
                        <Link 
                        onClick={() => {
                            dispatch(getUpdateBakeOrder([]));
                        }}>
                            <button className="button button4">
                                <p className="button-name">Clear Shoping Cart</p>
                            </button>
                        </Link>
                    </div>
                    <div className="second-button">
                        <button className="button button4">
                            <p className="button-name">Update Shoping Cart</p>                        
                        </button>
                    </div>
                    <div className="third-button">
                        <Link to="/products">
                            <button className="button button4">
                                <p className="button-name">Continue Shoping</p>
                            </button>
                        </Link>
                        
                    </div>
                </div>   
                <div className="cart-sum">
                <div className="sum-left">
                    <h4 className="left-title">
                        Enter your code if you have one. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </h4>
                    <div className="title-code">
                        <input className="form-control coupon" type="text" placeholder="Enter you code here" />
                        <button className="button-coupon button button4">
                            <p className="button-name">Apply Coupon</p>
                        </button>
                    </div>
                </div>
                <div className="sum-right">
                    <figure className="ps-shopping-cart__total">
                        <figcaption className="right-total">Cart Total</figcaption>
                        <table className="table">
                            <tr>
                            <td>SubTotal</td>
                                <td><strong>${ }</strong></td>
                            </tr>
                            <tr>
                            <td>Shipping</td>
                            <td>
                                <div className="ps-radio">
                                <input className="form-control" type="radio" id="shipping-1" name="shipping"/>
                                <label for="shipping-1">Flat Rate: $10.00 </label>
                                </div>
                                <div className="ps-radio">
                                <input className="form-control" type="radio" id="shipping-2" name="shipping"/>
                                <label for="shipping-2">Free Shipping Nearby CAMBERWELL OR FERNTREE GULLY.</label>
                                </div>
                            </td>
                            </tr>
                            <tr className="total">
                            <td>Total</td>
                            <td style={{fontSize: 25, fontWeight: "bold"}}>$48.00</td>
                            </tr>
                        </table>
                        <button className="button button4">
                            <p className="button-name" style={{textTransform: "uppercase", textAlign: "center"}}>Proceed to Checkout</p>
                        </button>
                    </figure>
                </div>
            </div>
            </div>
        </div>
        <Info />
        <Footer />
        </>
    )
}
