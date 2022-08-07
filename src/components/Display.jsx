import React from 'react';
import './display.scss'


const Display = ({numberValues}) => {

    
    return ( 
        <>
        <div className="display__container">
            
            <div className="display__operation">
                4400 + 100
            </div>       
                
            <div className="display__result">
                {numberValues}
            </div>
                        
        </div>

        </>
        
    );
}
 
export default Display;