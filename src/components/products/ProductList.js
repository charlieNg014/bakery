import React from 'react'
import {Link} from "react-router-dom"
import { bakeStore } from '../../data'
import {useDispatch} from 'react-redux'
import {getProductDetails} from "../../redux"

export default function ProductList(bakeList) {    
    //passing data from handle change to store 
    const dispatch = useDispatch();

    const getBakeId = (id) => {
        const testId = bakeStore.find((bakeList) => bakeList.id === id);
        dispatch(getProductDetails(testId));
    }    
    return (
        <div className="product-list">
            <Link to="/products/details" onClick={() => getBakeId(bakeList.bakeList.id)
            }>
                <img className="list-image" src={bakeList.bakeList.image} alt="bakeimage" />
            </Link>
            <div className="list-info">
                <p className="list-title">{bakeList.bakeList.title}</p>
                <h3 className="list-recipe">{bakeList.bakeList.recipe}</h3>
                <h6 className="list-price">${bakeList.bakeList.price}</h6>
            </div>
        </div>
    )
}
