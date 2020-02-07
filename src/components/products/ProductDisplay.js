import React, {useState} from 'react'
import {bakeStore} from '../../data'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

export default function ProductDisplay() {
    //define state
    const [bakeData] = useState(bakeStore);
    // console.log(bakeData);

    //getting data from store 
    const updatedBakeArray = useSelector(state => state.bakeTypes.updatedBakeArray);
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
                        bakeData.map(item => {
                            return (
                                <div className="product-list">
                                    <Link >
                                        <img className="list-image" src={item.image} alt="bakeimage" />
                                    </Link>
                                    <div className="list-info">
                                        <p className="list-title">{item.title}</p>
                                        <h3 className="list-recipe">{item.recipe}</h3>
                                        <h6 className="list-price">${item.price}</h6>
                                    </div>
                                </div>
                            )
                        }) :
                        updatedBakeArray.map(item => {
                            return (
                                <div className="product-list">
                                    <Link >
                                        <img className="list-image" src={item.image} alt="bakeimage" />
                                    </Link>
                                    <div className="list-info">
                                        <p className="list-title">{item.title}</p>
                                        <h3 className="list-recipe">{item.recipe}</h3>
                                        <h6 className="list-price">${item.price}</h6>
                                    </div>
                                </div>
                            )
                        })
                }
                </div>
            </div>
        </div>
    )
}
