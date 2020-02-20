import React, { useState } from 'react'
import {bakeStore} from '../../data'
import Title from "../Title"
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {filteredBake} from "../../redux"

export default function ProductFilter () {
    //define state 
    const [bakeData] = useState(bakeStore);
    const getUnique = (item, value) => {
        return [...new Set(item.map(item => item[value]))]
    }

    //get unique types of bake
    let types = getUnique(bakeStore, 'type');
    types = ["All", ...types];
    types = types.map((item, index) => {
        return (
            <Link  className="filter-list" value={item} key={index}>
               <option>
                    {item}
                </option> 
            </Link>
        )
    })

    //get min and max price for bake 
    let maxPrice = Math.max(...bakeData.map((item) => item.price));
    let minPrice = Math.min(...bakeData.map((item) => item.price));
    let price = maxPrice;

    //passing data from handle change to store 
    const dispatch = useDispatch();

    //get the room with any checkbox
    const handleChange = (event) => {
        const value = event.target.value;
        console.log(value);
        
        const filterBake = bakeData.filter((bakeData) => bakeData.type === value);
        console.log(filterBake);

        const filterPrice = bakeData.filter((bakeData) => parseInt(bakeData.price) <= value);
        // console.log(filterPrice);

        // if ( filterBake.length === 0) {
        //     const filterPrice = bakeData.filter((bakeData) => parseInt(bakeData.price) <= value);
        //     dispatch(filteredBake(filterPrice));
        // } else {
            

        //     const filterPrice = filterBake.filter((filterBake) => parseInt(filterBake.price) <= value);
        //     // // console.log(filterPrice);
            
        //     dispatch(filteredBake(filterPrice));
        //     dispatch(filteredBake(filterBake));
        // }

        if (filterBake.length === 0) {
            dispatch(filteredBake(filterPrice));
        } else {
            dispatch(filteredBake(filterBake));
        }
    }
        return (
            <div className="services">
                <div className="filter form-group">
                    <Title title = "Search Cake" />
                    <ul className="filter-section">
                        <h3 className="filter-title">Categories</h3>
                        <li>
                            <p className="filter-list" type={types} onClick={handleChange}>{types}</p>                
                        </li>
                        <hr className="filter-line"/>
                    </ul>
                   
                </div>
                
                <div className="filter form-group">
                    <ul className="filter-section">
                        <h3 className="filter-title">Filter Price {price}</h3>
                        <input 
                            type='range'
                            name='price'
                            min={minPrice}
                            max={maxPrice}
                            id="price"
                            value={price}
                            onChange={handleChange}
                            className="filter-slider" 
                        />
                        <h2 style={{marginTop: 30, marginBottom: 25}}>Price: ${minPrice} - ${maxPrice}</h2>
                        <hr className="filter-line"/>
                    </ul>    
                </div>
            </div>
        )
    }
