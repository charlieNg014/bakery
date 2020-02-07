import React, { useState } from 'react'
import {bakeStore} from '../../data'
import Title from "../Title"
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {filterBakeTypes} from "../../redux"

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
    const handleChangeType = (event) => {
        const value = event.target.value;
        console.log(value);
        
        const filterBake = bakeData.filter((bakeData) => bakeData.type === value);
        console.log(filterBake);
        
        dispatch(filterBakeTypes(filterBake));
    }

    //handle change the price
    const handleChangePrice = (event) => {
        const value = event.target.value;
        console.log(value);

        const filterPrice = this.state.bakeData.filter((bakeData) => parseInt(bakeData.price) < value);
        console.log(filterPrice);

        
    }

        return (
            <div className="services">
                <div className="filter form-group">
                    <Title title = "Search Cake" />
                    <ul className="filter-section">
                        <h3 className="filter-title">Categories</h3>
                        <li>
                            <p className="filter-list" type={types} onClick={handleChangeType}>{types}</p>                
                        </li>
                        <hr className="filter-line"/>
                    </ul>
                   
                </div>
                
                <div className="filter form-group">
                    <ul className="filter-section">
                        <h3 className="filter-title">Filter Price</h3>
                        <input 
                            type='range'
                            name='price'
                            min={minPrice}
                            max={maxPrice}
                            id="price"
                            value={price}
                            onChange={handleChangePrice}
                            className="filter-slider" 
                        />
                        <h2 style={{marginTop: 30, marginBottom: 25}}>Price: ${minPrice} - ${maxPrice}</h2>
                        <hr className="filter-line"/>
                    </ul>    
                </div>
            </div>
        )
    }
