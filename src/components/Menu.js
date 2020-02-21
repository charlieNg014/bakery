import React, {useState} from 'react'
import {MdCheckCircle} from "react-icons/md"
import {bakeStore} from '../data'
import {Link} from "react-router-dom"
import {filteredBake} from "../redux"
import {useDispatch, useSelector} from "react-redux"
import ProductList from "./products/ProductList"
import menuimage from "../images/menuimage.jpg"

export default function Menu() {
    const dispatch = useDispatch();
    const [bakeData] = useState(bakeStore);
    const getUnique = (item, value) => {
        return [...new Set(item.map(item => item[value]))]
    }

    //get value for display
    const bakeDisplay = useSelector(state => state.bakeFilter.updatedBakeArray);
    console.log(bakeDisplay);

    const handleChange = (event) => {
        const value = event.target.value;
        // console.log(value);

        const filterBake = bakeData.filter((bakeData) => bakeData.type === value);
        // console.log(filterBake);
        dispatch(filteredBake(filterBake));
    }

    let types = getUnique(bakeStore, 'type');
    types = ["All", ...types];
    types = types.map((item, index) => {
        return (
            <Link onClick={handleChange} className="filter-list" value={item} key={index}>
               <option>
                    {item}
                </option> 
            </Link>
        )
    })
    return (
        <div className="services">
            <div className="menu row">
                <div className="menuinfo col-md-9">
                    <h4 className="detail-subtitle">Special Menu</h4>
                    <h2 className="detail-title">Our lovely cakes</h2>
                    <h3 className="detail-icon"><MdCheckCircle /></h3>
                    <hr class="menuinfo-line-top"></hr>
                    <div className="menuinfo-typedisplay">
                        <ul className="typelist">
                            <li className="listdetails" type = {types} >{types}</li>
                        </ul>
                    </div>
                    <hr class="menuinfo-line-bottom"></hr>
                        <div className="bakelist">
                        <div className="bakelist-center">
                        {bakeDisplay.length === 0 
                            ? bakeData.map((item, index) => {
                                return (
                                    <ProductList key ={index} bakeList = {item} />
                                )
                            })
                            : bakeDisplay.map((item, index) => {
                                return (
                                    <ProductList key ={index} bakeList = {item} />
                                )
                            })}
                        </div>
                        </div>
                        </div>
                <div className="menuimage col-md-3">
                <img className="imagedisplay" src={menuimage} alt="menuimage" />
                </div>
            </div>
        </div>
    )
}
