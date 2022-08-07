import React, { useEffect, useState, useContext } from 'react'
import { Icon } from '@iconify/react';
import './numbersAndOperationButtons.scss'

                                    //this function comes from App.js 
const NumbersAndOperationButtons = ({extractValues}) => {
    return (
        <section className="NumbersAndOperationButtons__container">

            <div className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons c__button">c</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons" > / </div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons"> * </div>
            <div className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons "> <Icon icon="cil:delete" width="24" height="24" /> </div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">7</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">8</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">9</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons">-</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">4</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">5</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">6</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons">+</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">1</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">2</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">3</div>
            <div className="NumbersAndOperationButtons__buttons equal__button">=</div>
            <div className="NumbersAndOperationButtons__buttons"></div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">0</div>
            <div onClick = {extractValues} className="NumbersAndOperationButtons__buttons">.</div>
        
        </section>

    );

}

export default NumbersAndOperationButtons;