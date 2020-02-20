import React, {useState} from 'react'
import {MdCheckCircle} from "react-icons/md"
import {bakeStore} from '../data'
import {Link} from "react-router-dom"

export default function Menu() {
    //define state 
    const [bakeData] = useState(bakeStore);
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
                            <li className="listdetails" type = {types}>{types}</li>
                        </ul>
                    </div>
                    <hr class="menuinfo-line-bottom"></hr>
                </div>
                <div className="menuimage col-md-3">
                    image
                </div>
            </div>
        </div>
    )
}
