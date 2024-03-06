import React from 'react'; 
import ClassComp from './ClassComp'; 
import FuncComp from './FuncComp'; 
 
const App = () => { 
  const [korunot, setKorunot] = React.useState(true); 
  const [showTakeBack, setShowTakeBack] = React.useState(false); 
 
  const onKill = () => { 
    setKorunot(false); 
    setShowTakeBack(true); 
  }; 
 
  const onTakeBack = () => { 
    setKorunot(true); 
    setShowTakeBack(false); 
  }; 
 
  return ( 
    <div> 
      {korunot && <ClassComp onKill={onKill} />} 
      <hr /> 
      {korunot && <FuncComp onKill={onKill} />} 
       
      {showTakeBack && <button className='btn btn-outline-dark' onClick={onTakeBack}>take back</button>} 
    </div> 
  ); 
}; 
 
export default App;

