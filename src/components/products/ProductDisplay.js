import React, {useState} from 'react'
import {bakeStore, bake} from '../../data'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import ProductList from './ProductList';

export default function ProductDisplay() {
    //define state
    const [bakeData] = useState(bakeStore);
    // console.log(bakeData);

    //getting data from store 
    const updatedBakeArray = useSelector(state => state.bakeFilter.updatedBakeArray);
    // console.log(updatedBakeArray);

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
                    {updatedBakeArray.length === 0 ? 
                        bakeData.map((item, index) => {
                            return (
                                <ProductList key ={index} bakeList = {item} />
                            )
                        }) :
                        updatedBakeArray.map((item, index)  => {
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
