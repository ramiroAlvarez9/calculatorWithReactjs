import React, { useState } from 'react';
import './components/layout.scss'
import Display from './components/Display'
import NumbersAndOperationButtons from './components/NumbersAndOperationButtons'

function App() {

  const [numberValues, setNumberValues] = useState([])

  const [actualOperation, setActualOperation] = useState(['Ans'])


  const extractValues = e => setNumberValues([...numberValues, e.target.innerText])

  const deleteOperation = () => setNumberValues([])

  function makeArithmeticOperation() {
    /*Make the operation. Save the operation in the state "actualOperation" */ 
    setActualOperation([numberValues.join('')])

    setNumberValues([eval(numberValues.join(''))])
  }
  function deleteLastElement() {

    numberValues.pop()

    setNumberValues([...numberValues])
  }

  return (

    <>

      <main className='main'>

        <div className='main__container'>


          <Display
            numberValues={numberValues}
            actualOperation={actualOperation}
          />

          <NumbersAndOperationButtons

            extractValues={extractValues}
            makeArithmeticOperation={makeArithmeticOperation}
            deleteOperation={deleteOperation}
            deleteLastElement={deleteLastElement}
          />

        </div>

      </main>


    </>
  );
}

export default App;

