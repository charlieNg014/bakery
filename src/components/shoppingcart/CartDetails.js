import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {TiDeleteOutline} from "react-icons/ti"
import {useSelector, useDispatch} from "react-redux"
import {getProductDetails, getUpdateProductDetails} from "../../redux"

export default function CartDetails(orderdetails) {
    const dispatch = useDispatch();
    // console.log(orderdetails);
    let bakeOrder = orderdetails.orderdetails;
    // console.log(bakeOrder);
    
    const [updateAmount] = useState(orderdetails.orderdetails.amount);
    const newBakeOrder = useSelector(state => state.getNewBakeOrder.newBakeOrder);
    
    //get the order updated
    // const updatedBakeOrder = useSelector(state => state.getUpdateBakeOrder.updateOrder);
    // console.log(updatedBakeOrder);

    //update the order array with the changes of amount
    // const increaseBakeOrder = (newAmount, prevOrder, originOrder) => {
    //     // console.log(newAmount + 1);  
    //     // console.log(prevOrder);

    //     let id = prevOrder.id;
    //     let image = prevOrder.image;
    //     let title = prevOrder.title;
    //     let price = prevOrder.price;
    //     let amount = newAmount + 1;
    //     let requestedSize = prevOrder.requestedSize;

    //     const updatedNewBakeOrder = {
    //         id, 
    //         image,
    //         title,
    //         price, 
    //         amount, 
    //         requestedSize
    //     }
    //     // console.log(updatedNewBakeOrder);

    //     //get index of splicing 
    //     const array = originOrder.find((originOrder) => originOrder.id === id);
    //     const index = originOrder.indexOf(array);
    //     // console.log(index);
        
    //     //splicing to update amount
    //     originOrder.splice(index, 1, updatedNewBakeOrder);
    //     // console.log(originOrder);
        
    //      dispatch(getUpdateBakeOrder(originOrder));        
    // }

    // const decreaseBakeOrder = (newAmount, prevOrder, originOrder) => {
    //     // console.log(newAmount - 1);
    //     // console.log(prevOrder);

    //     let id = prevOrder.id;
    //     let image = prevOrder.image;
    //     let title = prevOrder.title;
    //     let price = prevOrder.price;
    //     let amount = newAmount - 1;
    //     let requestedSize = prevOrder.requestedSize;

    //     const updatedNewBakeOrder = {
    //         id, 
    //         image,
    //         title,
    //         price, 
    //         amount, 
    //         requestedSize
    //     }
    //     // console.log(updatedNewBakeOrder);  

    //     //get index of splicing 
    //     const array = originOrder.find((originOrder) => originOrder.id === id);
    //     const index = originOrder.indexOf(array);
    //     // console.log(index);
        
    //     //splicing to update amount
    //     const deleteAmount = array.amount - 1;
    //     if (deleteAmount === 0) {
    //     //    removeBake(prevOrder, originOrder);
    //     //    dispatch(getNewBakeOrder(originOrder));
           
    //     } else {
    //     originOrder.splice(index, 1, updatedNewBakeOrder);
    //         // console.log(originOrder);
            
    //     dispatch(getUpdateBakeOrder(originOrder));        
    //     }

    // }

    //update the array with remove product
    const removeBake = (prevOrder, originOrder) => {
        let id = prevOrder.id;
        //get index of splicing 
        const array = originOrder.find((originOrder) => originOrder.id === id);
        const index = originOrder.indexOf(array);
        // console.log(index);
        
        //splicing to update amount
        originOrder.splice(index, 1);
    }

    //get back to product details
    const getBakeId = (id) => {
        const bakeId = newBakeOrder.find((bakeList) => bakeList.id === id);
        console.log(bakeId);
        dispatch(getProductDetails(bakeId));
        console.log(
         dispatch(getUpdateProductDetails(bakeId)));
    }   
    return (
        <>
        <div className="cart-title">
            <div className="first-col">
                {/* <h3 className="title-name">Product Name</h3> */}
                <div className="name-display">
                    <Link to="/products/details" onClick={() => getBakeId(orderdetails.orderdetails.id)}>
                        <img className="title-name-image" alt="productimage" src={orderdetails.orderdetails.image} />
                    </Link>
                    <h4 className="title-name-name">{orderdetails.orderdetails.title}</h4>
                </div>
            </div>
            <div className="second-col">
                <h4 className="title-price-price">${orderdetails.orderdetails.price}</h4>
            </div>
            <div className="third-col">
                <h4 className="title-size">{orderdetails.orderdetails.requestedSize}</h4>
            </div>
            <div className="fourth-col">
                <div className="input-group title-qtity">
                    <input type="text" id="myNumber" className="form-control input-number" value={orderdetails.orderdetails.amount} />
                </div>
            </div>
            <div className="fifth-col">
                <p className="title-alltotal">${Math.round(orderdetails.orderdetails.price * updateAmount)}</p>
                <p className="title-delete">
                    <Link className="total-delete" onClick={() => removeBake(bakeOrder, newBakeOrder)}>
                        <TiDeleteOutline  className="total-icon"/>
                    </Link>
                </p>
            </div>
        </div> 
        </>
    )
}