import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {TiDeleteOutline} from "react-icons/ti"
import {useSelector} from "react-redux"
// import {getProductDetails, getUpdateProductDetails} from "../../redux"

export default function CartDetails(orderdetails) {
    // const dispatch = useDispatch();
    // console.log(orderdetails);
    let bakeOrder = orderdetails.orderdetails;
    // console.log(bakeOrder);
    
    const [updateAmount] = useState(orderdetails.orderdetails.amount);
    const newBakeOrder = useSelector(state => state.getNewBakeOrder.newBakeOrder);
    const updatedBakeOrder = useSelector(state => state.getUpdateBakeOrder.updateOrder);

    //update the array with remove product
    const removeBake = (prevOrder, originOrder, updatedOrder) => {
        let id = prevOrder.id;
        let length = updatedOrder.length;
        //get index of splicing 
        const array = originOrder.find((originOrder) => originOrder.id === id);
        const index = originOrder.indexOf(array);
        // console.log(index);
        
        //splicing to update amount
        if (length === 0) {
            originOrder.splice(index, 1);
        } else {
            updatedOrder.splice(index, 1);
        }
    }

    //get back to product details
    // const getBakeId = (id) => {
    //     const bakeId = newBakeOrder.find((bakeList) => bakeList.id === id);
    //     console.log(bakeId);
    //     dispatch(getProductDetails(bakeId));
    //     console.log(
    //      dispatch(getUpdateProductDetails(bakeId)));
    // }   
    return (
        <>
        <div className="cart-title">
            <div className="first-col">
                {/* <h3 className="title-name">Product Name</h3> */}
                <div className="name-display">
                    {/* <Link to="/products/details" onClick={() => getBakeId(orderdetails.orderdetails.id)}> */}
                        <img className="title-name-image" alt="productimage" src={orderdetails.orderdetails.image} />
                    {/* </Link> */}
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
                    <Link className="total-delete" onClick={() => removeBake(bakeOrder, newBakeOrder, updatedBakeOrder)}>
                        <TiDeleteOutline  className="total-icon"/>
                    </Link>
                </p>
            </div>
        </div> 
        </>
    )
}