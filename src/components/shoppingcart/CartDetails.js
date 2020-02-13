import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {TiDeleteOutline} from "react-icons/ti"
import {useSelector, useDispatch} from "react-redux"
import {getNewBakeOrder} from "../../redux"

export default function CartDetails(orderdetails) {
    const dispatch = useDispatch();
    // console.log(orderdetails);
    let bakeOrder = orderdetails.orderdetails;
    // console.log(bakeOrder);
    const [total, setTotal] = useState(0);
    
    
    const [updateAmount, setUpdateAmount] = useState(orderdetails.orderdetails.amount);
    const newBakeOrder = useSelector(state => state.getNewBakeOrder.newBakeOrder);
    console.log(newBakeOrder);
    
    //get the total amount
    const getTotal = (value, originOrder) => {
        // let value = 0;
        for (var i = 0; i < originOrder.length; i++) {
           value = originOrder[i].price * originOrder[i].amount;
        }
        // console.log(value);
        return value;
    }

    //update the order array with the changes of amount
    const increaseBakeOrder = (newAmount, prevOrder, originOrder) => {
        // console.log(newAmount + 1);  
        // console.log(prevOrder);

        let id = prevOrder.id;
        let image = prevOrder.image;
        let title = prevOrder.title;
        let price = prevOrder.price;
        let amount = newAmount + 1;
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

        //get index of splicing 
        const array = originOrder.find((originOrder) => originOrder.id === id);
        const index = originOrder.indexOf(array);
        // console.log(index);
        
        //splicing to update amount
        const test = originOrder.splice(index, 1, updatedNewBakeOrder);
        // console.log(test);
        getTotal(total, originOrder);
        
    }

    const decreaseBakeOrder = (newAmount, prevOrder, originOrder) => {
        // console.log(newAmount - 1);
        // console.log(prevOrder);

        let id = prevOrder.id;
        let image = prevOrder.image;
        let title = prevOrder.title;
        let price = prevOrder.price;
        let amount = newAmount - 1;
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

        //get index of splicing 
        const array = originOrder.find((originOrder) => originOrder.id === id);
        const index = originOrder.indexOf(array);
        // console.log(index);
        
        //splicing to update amount
        const deleteAmount = array.amount - 1;
        if (deleteAmount === 0) {
            const test = originOrder.splice(index, 1);
            dispatch(getNewBakeOrder(originOrder));
        } else {
            const test = originOrder.splice(index, 1, updatedNewBakeOrder);
        }
        // console.log(test);
        getTotal(total, originOrder);
    }

    //update the array with remove product
    const removeBake = (prevOrder, originOrder) => {
        let id = prevOrder.id;
        //get index of splicing 
        const array = originOrder.find((originOrder) => originOrder.id === id);
        const index = originOrder.indexOf(array);
        // console.log(index);
        
        //splicing to update amount
        const test = originOrder.splice(index, 1);
        // console.log(test);
        getTotal(total, originOrder);
    }

    if (bakeOrder === undefined ) {
        return (
            <div className="cart-title">
            <div className="first-col">
            </div>
            <div className="second-col">
            </div>
            <div className="third-col">
            </div>
            <div className="fourth-col">
            </div>
        </div> 
        )
    } else {
        return (
            <div className="cart-title">
                <div className="first-col">
                    {/* <h3 className="title-name">Product Name</h3> */}
                    <div className="name-display">
                        <img className="title-name-image" alt="productimage" src={orderdetails.orderdetails.image} />
                        <h4 className="title-name-name">{orderdetails.orderdetails.title}</h4>
                    </div>
                </div>
                <div className="second-col">
                    {/* <h3 className="title-price">Unit Price</h3> */}
                    <h4 className="title-price-price">${orderdetails.orderdetails.price}</h4>
                </div>
                <div className="third-col">
                    {/* <h3 className="title-quantity">Quantity</h3> */}
                    <div className="input-group title-qtity">
                        <button className="down" onClick = {() => 
                            {
                                if (updateAmount > 0) {
                                    setUpdateAmount(updateAmount - 1);
                                }
                                decreaseBakeOrder(updateAmount, bakeOrder, newBakeOrder);
                            }}>
                            -
                        </button>
                            <input type="text" id="myNumber" className="form-control input-number" value={updateAmount} />
                        <button className="up"onClick = {() => 
                            {
                                if (updateAmount < 10) {
                                    setUpdateAmount(updateAmount + 1);
                                }
                                increaseBakeOrder(updateAmount, bakeOrder, newBakeOrder);
                            }}>
                            +
                        </button>
                    </div>
                </div>
                <div className="fourth-col">
                    {/* <h3 className="title-total">Total</h3> */}
                    <p className="title-alltotal">${orderdetails.orderdetails.price * updateAmount}</p>
                    <p className="title-delete">
                        <Link className="total-delete" onClick={() => removeBake(bakeOrder, newBakeOrder)}>
                            <TiDeleteOutline  className="total-icon"/>
                        </Link>
                    </p>
                </div>
            </div> 
        )
    }
}
