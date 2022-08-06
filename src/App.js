import React from 'react';
import './components/layout.scss'
import Display from './components/Display'
import NumbersAndOperationButtons from './components/NumbersAndOperationButtons'


function App() {
  return (
    <>


      <main className='main'>

        <div className='main__container'>
          
          <Display />

          <NumbersAndOperationButtons />
        
        </div>
        
      </main>

    </>
  );
}

export default App;

