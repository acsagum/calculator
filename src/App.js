import React, { useState } from 'react';
import './App.css';

function CalButton({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

function CalDisplay({ Display }) {
  return (
    <div className='CalDisplay'>
      {Display}
    </div>
  );
}

function App() {
  const [expressionValue, setExpressionValue] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
       
        const result = eval(calculation);
        setExpressionValue(result.toString());
        setCalculation(result.toString());
      } catch (error) {
       
        setExpressionValue('Error');
        setCalculation('');
      }
    } else if (value === 'C') {
     
      setExpressionValue('');
      setCalculation('');
    }
     
    else if (value === 'Sagum') {
    setExpressionValue('Adrian Sagum');
    } else {
   
      setCalculation((prevCalculation) => prevCalculation + value);
      setExpressionValue((prevExpression) => prevExpression + value);
    }
  };

 return (
  <div className='Calcontainer'>
 <h1 className='Header'>Adrian Sagum Calculator</h1>
      <CalDisplay Display={expressionValue} />
      <div className='ButtonContainer'>
        <CalButton label={7} onClick={handleButtonClick} />
        <CalButton label={8} onClick={handleButtonClick} />
        <CalButton label={9} onClick={handleButtonClick} />
        <CalButton label="/" onClick={handleButtonClick} />
        <CalButton label={4} onClick={handleButtonClick} />
        <CalButton label={5} onClick={handleButtonClick} />
        <CalButton label={6} onClick={handleButtonClick} />
        <CalButton label="*" onClick={handleButtonClick} />
        <CalButton label={1} onClick={handleButtonClick} />
        <CalButton label={2} onClick={handleButtonClick} />
        <CalButton label={3} onClick={handleButtonClick} />
        <CalButton label="-" onClick={handleButtonClick} />
        <CalButton label={0} onClick={handleButtonClick} />
        <CalButton label="=" onClick={handleButtonClick} />
        <CalButton label="+" onClick={handleButtonClick} />
        <class= "ButtonContainer" CalButton label="Sagum" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
