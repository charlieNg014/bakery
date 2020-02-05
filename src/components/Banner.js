import React from 'react';

export default function({children, title, subtitle}) {
    return(
        <div className="banner">
            <h2 className="title">{title}</h2>
            <div>
                <p className="subtitle" >{subtitle}</p>
                <div style={{textAlign:"center"}}> 
                    {children}
                </div>
               
            </div>
        </div>
    )
}