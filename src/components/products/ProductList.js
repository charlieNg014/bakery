import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { bakeStore } from '../../data'
import {useDispatch} from 'react-redux'
import {getProductDetails} from "../../redux"

export default function ProductList(bakeList) {
    //passing data from handle change to store 
    const dispatch = useDispatch();
    const [isAddToCart, setAddtoCart] = useState(false);
    
    const getBakeId = (id) => {
        const testId = bakeStore.find((bakeList) => bakeList.id === id);
        dispatch(getProductDetails(testId));
    }    

    // const productDetails = useSelector(state => state.getProductDetails.productDetails);
    // console.log(productDetails);
    

    return (
        <div className="product-list">
            <Link to="/products/details" onClick={() => getBakeId(bakeList.bakeList.id)
            }>
                <img className="list-image" src={bakeList.bakeList.image} alt="bakeimage" onMouseOver = {() => setAddtoCart(isAddToCart === false)} onMouseLeave = {() => setAddtoCart(isAddToCart === !isAddToCart)} 
                 />
            </Link>
            <div className={isAddToCart === true ? "list-info-hide" : "" }>
                <p className="list-title">{bakeList.bakeList.title}</p>
                <h3 className="list-recipe">{bakeList.bakeList.recipe}</h3>
                <h6 className="list-price">${bakeList.bakeList.price}</h6>
            </div>
            <div className = {isAddToCart === true ? "list-addtocart" : "list-addtocart-hide"}>
                }>
                <button className="detail-btn addcart" 
                >Add to cart</button>
            </div>
        </div>
    )
}
