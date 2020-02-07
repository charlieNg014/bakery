import React, { Component } from 'react'
import {bakeStore} from '../../data'
import Title from "../Title"
import { Link } from 'react-router-dom'

export default class ProductFilter extends Component {
    //define state 
    state = {
        bakeData: bakeStore
    }

    render() {
    const getUnique = (item, value) => {
        return [...new Set(item.map(item => item[value]))]
    }

    //get unique types of bake
    let types = getUnique(bakeStore, 'type');
    types = [...types];
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
    let maxPrice = Math.max(...this.state.bakeData.map((item) => item.price));
    let minPrice = Math.min(...this.state.bakeData.map((item) => item.price));
    let price = maxPrice;

    //get the room with any checkbox
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type ==="checkbox" ? target.checked : target.value;
        const name = event.target.name;

        console.log(value);
        
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
                        <h3 className="filter-title">Filter Price</h3>
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
}
