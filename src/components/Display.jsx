import React from 'react';
import './display.scss'


const Display = ({ numberValues, actualOperation, errorOperation }) => {

    return (
        <>
            <div className="display__container">

                <div className="display__operation">
                    {actualOperation} =
                </div>
                <div className="display__result">
                    {
                        numberValues
                    }
                </div>
                <div className="display__error">

                    {errorOperation}

                </div>

            </div>

        </>

    );
}

export default Display;