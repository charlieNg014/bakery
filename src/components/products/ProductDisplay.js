import React, {useState} from 'react'
import {bakeStore} from '../../data'
import {useSelector} from 'react-redux'
import ProductList from './ProductList';

export default function ProductDisplay() {
    //define state
    const [bakeData] = useState(bakeStore);
    // console.log(bakeData);

    //getting data from store 
    const updatedTypes = useSelector(state => state.bakeFilter.updatedBakeArray);
    console.log(updatedTypes);

    const updatedPrice = useSelector(state => state.priceFilter.updatedPriceArray);
    console.log(updatedPrice);

    //display error page if the search is undefined 
    if (bakeData.length === 0) {
        return (
            <div className="services">
                <h2>Unfortunately, there is no bake matching your search</h2>
            </div>
        )
    }
    return (
        <div className="services">
            <div className="bakelist">
                <div className="bakelist-center">
                    {updatedTypes.length === 0 ? 
                        updatedPrice.map((item, index) => {
                            return (
                                <ProductList key ={index} bakeList = {item} />
                            )
                        }) 
                        : updatedTypes.map((item, index)  => {
                            return (
                                <ProductList key = {index}  bakeList = {item} />
                            )
                        }) 
                }
                </div>
            </div>
        </div>
    )
}
