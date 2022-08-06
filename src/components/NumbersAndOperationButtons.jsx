import React,{useEffect} from 'react'
import { Icon } from '@iconify/react';
import './numbersAndOperationButtons.scss'



const NumbersAndOperationButtons = () => {
    

    return (

        <section className="NumbersAndOperationButtons__container">
            <div className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons c__button">c</div>
            <div className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons">÷</div>
            <div className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons">x</div>
            <div className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons "> <Icon icon="cil:delete" width="24" height="24" /> </div>
            <div className="NumbersAndOperationButtons__buttons">7</div>
            <div className="NumbersAndOperationButtons__buttons">8</div>
            <div className="NumbersAndOperationButtons__buttons">9</div>
            <div className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons">-</div>
            <div className="NumbersAndOperationButtons__buttons">4</div>
            <div className="NumbersAndOperationButtons__buttons">5</div>
            <div className="NumbersAndOperationButtons__buttons">6</div>
            <div className="NumbersAndOperationButtons__buttons firstRowAndEndColumn__OfButtons">+</div>
            <div className="NumbersAndOperationButtons__buttons">1</div>
            <div className="NumbersAndOperationButtons__buttons">2</div>
            <div className="NumbersAndOperationButtons__buttons">3</div>
            <div className="NumbersAndOperationButtons__buttons equal__button">=</div>
            <div className="NumbersAndOperationButtons__buttons"><Icon icon="bi:percent" /></div>
            <div className="NumbersAndOperationButtons__buttons">0</div>
            <div className="NumbersAndOperationButtons__buttons">.</div>
        </section>
    );
}

export default NumbersAndOperationButtons;