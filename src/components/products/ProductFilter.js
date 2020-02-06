import React, { Component } from 'react'
import {bakeStore, bake} from '../../data'
import Title from "../Title"

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
    types = ["All", ...types];
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
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
                <div className="form-group">
                    <Title title = "Category" />
                    <select 
                        name="type" 
                        id="type"  
                        className="form-control" 
                        type={types}
                        onChange={handleChange}
                        > 
                        {types}                
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor='price'>Price ${price}</label>
                    <input 
                    type='range'
                    name='price'
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price}
                    onChange={handleChange}
                    className="slider" 
                    />
                </div>
            </div>
        )
    }
}
