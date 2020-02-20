import React, {useState} from 'react'
import Info from "../Info"
import Footer from "../Footer"
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {getUpdateBakeOrder} from "../../redux"


export default function UpdateCart() {
    const dispatch = useDispatch();
    const [newBakeOrder] = useState(useSelector(state => state.getNewBakeOrder.newBakeOrder));
    // console.log(newBakeOrder);

    let [updateAmount, setUpdateAmount] = useState(0);

    // let updatedBakeOrder = newBakeOrder;

    // get the order updated
    const updatedBakeOrder = useSelector(state => state.getUpdateBakeOrder.updateOrder);
    console.log(updatedBakeOrder);
    let length = updatedBakeOrder.length;
    let orginLength = newBakeOrder.length;

    // update the order array with the changes of amount (updateAmount, item, newBakeOrder)
    const increaseBakeOrder = (newAmount, prevOrder, originOrder, updatedOrder) => {
        // console.log(newAmount + 1);  
        // console.log(prevOrder);

        let id = prevOrder.id;
        let amount;
        let length = updatedOrder.length;
        let index;


         //get index of splicing 
        

        if (length === 0) {
            const array = originOrder.find((originOrder) => originOrder.id === id);
            index = originOrder.indexOf(array);
            if (updateAmount < 10) {
                amount = newAmount + 1;
                // console.log(amount);
                // setUpdateAmount(updateAmount = amount);
            }
        } else {
            const array = updatedOrder.find((updatedOrder) => updatedOrder.id === id);
            // console.log(array);
            
            index = updatedOrder.indexOf(array);
            if (updateAmount < 10) {
                amount = array.amount + 1;
                // console.log(amount);   
                // setUpdateAmount(updateAmount = amount);
            }
        }

        
        let image = prevOrder.image;
        let title = prevOrder.title;
        let price = prevOrder.price;
        let requestedSize = prevOrder.requestedSize;

        const updatedNewBakeOrder = {
            id, 
            image,
            title,
            price, 
            amount, 
            requestedSize
        }
        // console.log(updatedNewBakeOrder);

       
        // console.log(index);
        
        //splicing to update amount

        // console.log(originOrder);
        if (length === 0) {
            originOrder.splice(index, 1, updatedNewBakeOrder);
            dispatch(getUpdateBakeOrder(originOrder));   
        } else {
            updatedOrder.splice(index, 1, updatedNewBakeOrder);
            dispatch(getUpdateBakeOrder(updatedOrder));   
        }
    }

    const decreaseBakeOrder = (newAmount, prevOrder, originOrder, updatedOrder) => {
        // console.log(newAmount - 1);
        // console.log(prevOrder);

        let id = prevOrder.id;
        let amount;
        let length = updatedOrder.length;
        let index;

        if (length === 0) {
            const array = originOrder.find((originOrder) => originOrder.id === id);
            index = originOrder.indexOf(array);
            if (updateAmount > 1) {
                amount = newAmount - 1;
                // console.log(amount);
                // setUpdateAmount(updateAmount = amount);
            }
        } else {
            const array = updatedOrder.find((updatedOrder) => updatedOrder.id === id);
            // console.log(array);
            index = updatedOrder.indexOf(array);
            if (updateAmount > 1) {
                amount = array.amount - 1;
                // console.log(amount);  
                // setUpdateAmount(updateAmount = amount);
            } 
        }

        let image = prevOrder.image;
        let title = prevOrder.title;
        let price = prevOrder.price;
        let requestedSize = prevOrder.requestedSize;

        const updatedNewBakeOrder = {
            id, 
            image,
            title,
            price, 
            amount, 
            requestedSize
        }
        // console.log(updatedNewBakeOrder);  

        
            // console.log(originOrder);
            
        if (length === 0) {  
            originOrder.splice(index, 1, updatedNewBakeOrder);
            dispatch(getUpdateBakeOrder(originOrder)); 
        } else {
            updatedOrder.splice(index, 1, updatedNewBakeOrder);
            dispatch(getUpdateBakeOrder(updatedOrder));   
        }
    }

    // const removeBake = (prevOrder, originOrder, updatedOrder) => {
    //     let id = prevOrder.id;
    //     let length = updatedOrder.length;
    //     //get index of splicing 
    //     const array = originOrder.find((originOrder) => originOrder.id === id);
    //     const index = originOrder.indexOf(array);
    //     // console.log(index);
        
    //     //splicing to update amount
    //     if (length === 0) {
    //         originOrder.splice(index, 1);
    //     } else {
    //         updatedOrder.splice(index, 1);
    //     }
       
    // }
    return (
        <>
        <div className="services" style={{padding: 0}}>
            <div className="services about">
                <div className="about-top">
                    <Link className="abouttitle" to="/">
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
                        <div className="first-col" style={{width: "30%"}}>
                            <h3 className="title-name">Product Name</h3>
                        </div>
                        <div className="second-col" style={{width: "25%"}}>
                            <h3 className="title-price">Unit Price</h3>
                        </div>
                        <div className="third-col" style={{width: "25%"}}>
                            <h3 className="title-total">Size</h3>
                        </div>
                        <div className="fourth-col" style={{width: "20%"}}>
                            <h3 className="title-quantity">Quantity</h3>
                        </div>
                        {/* <div className="fifth-col">
                            <h3 className="title-total">Total</h3>
                        </div> */}
                    </div>
                    {((length === 0) || (orginLength > length)) ? 
                    newBakeOrder.map((item) => {
                        updateAmount = item.amount;
                        return (
                            <>
                            <div className="cart-title">
                                <div className="first-col">
                                    {/* <h3 className="title-name">Product Name</h3> */}
                                    <div className="name-display">
                                        {/* <Link to="/products/details" onClick={() => getBakeId(item.id)}> */}
                                            <img className="title-name-image" alt="productimage" src={item.image} />
                                        {/* </Link> */}
                                        <h4 className="title-name-name">{item.title}</h4>
                                    </div>
                                </div>
                                <div className="second-col">
                                    <h4 className="title-price-price">${item.price}</h4>
                                </div>
                                <div className="third-col" style={{marginLeft: 86}}>
                                    <h4 className="title-size">{item.requestedSize}</h4>
                                </div>
                                <div className="fourth-col">
                                    <div className="input-group title-qtity" style={{marginLeft: 42}}>
                                    <button className="down" onClick={() => {
                                        if (updateAmount > 1) {
                                            decreaseBakeOrder(updateAmount, item, newBakeOrder, updatedBakeOrder);
                                            setUpdateAmount(updateAmount = item.amount);
                                        }
                                    }}>
                                    -
                                    </button>
                                        <input type="text" id="myNumber" className="form-control input-number" value={updateAmount} />
                                    <button className="up" onClick = {() => {
                                        if (updateAmount < 10) {
                                            increaseBakeOrder(updateAmount, item, newBakeOrder, updatedBakeOrder);
                                            setUpdateAmount(updateAmount = item.amount);
                                        }
                                    }}>
                                        +
                                    </button>
                                    </div>
                                </div>
                                {/* <div className="fifth-col">
                                    <p className="title-alltotal">${Math.round(item.price * updateAmount)}</p>
                                    <p className="title-delete">
                                        <Link className="total-delete" onClick={() => removeBake(item, newBakeOrder)}>
                                            <TiDeleteOutline  className="total-icon"/>
                                        </Link>
                                    </p>
                                </div> */}
                            </div> 
                            </>
                        )
                    })
                    : updatedBakeOrder.map((item) => {
                        updateAmount = item.amount;
                        return (
                            <>
                            <div className="cart-title">
                                <div className="first-col">
                                    {/* <h3 className="title-name">Product Name</h3> */}
                                    <div className="name-display">
                                        {/* <Link to="/products/details" onClick={() => getBakeId(item.id)}> */}
                                            <img className="title-name-image" alt="productimage" src={item.image} />
                                        {/* </Link> */}
                                        <h4 className="title-name-name">{item.title}</h4>
                                    </div>
                                </div>
                                <div className="second-col">
                                    <h4 className="title-price-price">${item.price}</h4>
                                </div>
                                <div className="third-col" style={{marginLeft: 86}}>
                                    <h4 className="title-size">{item.requestedSize}</h4>
                                </div>
                                <div className="fourth-col">
                                    <div className="input-group title-qtity" style={{marginLeft: 42}}>
                                    <button className="down" onClick={() => {
                                        if (updateAmount > 1) {
                                            decreaseBakeOrder(updateAmount, item, newBakeOrder, updatedBakeOrder);
                                            setUpdateAmount(updateAmount = item.amount);
                                        }
                                    }}>
                                    -
                                    </button>
                                        <input type="text" id="myNumber" className="form-control input-number" value={updateAmount} />
                                    <button className="up" onClick = {() => {
                                        if (updateAmount < 10) {
                                            increaseBakeOrder(updateAmount, item, newBakeOrder, updatedBakeOrder);
                                            setUpdateAmount(updateAmount = item.amount);
                                        }
                                    }}>
                                        +
                                    </button>
                                    </div>
                                </div>
                                {/* <div className="fifth-col">
                                    <p className="title-alltotal">${Math.round(item.price * updateAmount)}</p>
                                    <p className="title-delete">
                                        <Link className="total-delete" onClick={() => removeBake(item, newBakeOrder)}>
                                            <TiDeleteOutline  className="total-icon"/>
                                        </Link>
                                    </p>
                                </div> */}
                            </div> 
                            </>
                        )
                    })
                    }
                </div>
                <hr className="filter-line"/>  
                <div className="third-button">
                    <Link to="/shoppingcart">
                        <button className="button button4">
                            <p className="button-name">Update Cart</p>
                        </button>
                    </Link>
                    
                </div> 
            </div>
        </div>
        <Info />
        <Footer />
        </>
    )
}
