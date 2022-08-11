import React, { useState } from 'react';
import './components/layout.scss'
import Display from './components/Display'
import NumbersAndOperationButtons from './components/NumbersAndOperationButtons'

function App() {

  const [errorOperation, setErrorOperation] = useState('')

  const [numberValues, setNumberValues] = useState([])

  const [actualOperation, setActualOperation] = useState(['Ans'])

  const extractValues = e => setNumberValues([...numberValues, e.target.innerText])

  function deleteOperation() {
    /*clear the display__error. Delete all numbers in numberValues*/ 
    setErrorOperation('')
    setNumberValues([])
  }

  function makeArithmeticOperation() {
    /*Make the operation. Save the operation in the state "actualOperation" */
    try {

      setActualOperation([numberValues.join('')])
      setNumberValues([eval(numberValues.join(''))])
      setErrorOperation('')

    } catch (error) {

      setActualOperation('Ans')
      setErrorOperation('Malformed expression')
    
    }
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
            errorOperation={errorOperation}
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

