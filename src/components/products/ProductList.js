import React, {useState} from 'react'

export default function ProductList(bake) {
    // console.log(bake);    
    // console.log(bake.title);
    const {title, price} = bake;
    console.log(title);
    
    
    
    return (
        <div className="services">
            <div>
                <img src={bake[0]} alt="bakeimage" />
                <div>
                    ${bake.price}
                    <p>per night</p>
                    <p>{bake.title}</p>
                </div>
            </div>
        </div>
    )
}
