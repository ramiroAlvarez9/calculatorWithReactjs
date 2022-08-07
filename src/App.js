import React, { useState } from 'react';
import './components/layout.scss'
import Display from './components/Display'
import NumbersAndOperationButtons from './components/NumbersAndOperationButtons'

function App() {

  const [numberValues, setNumberValues] = useState([])


  const extractValues = e => {
    setNumberValues([...numberValues, e.target.innerText])
  }

  return (
    <>

      <main className='main'>

        <div className='main__container'>


          <Display numberValues = {numberValues}/>

          <NumbersAndOperationButtons extractValues={extractValues} />
          
        </div>

      </main>


    </>
  );
}

export default App;

