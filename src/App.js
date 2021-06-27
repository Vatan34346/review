import React,{useState, useCallback} from 'react'; // store function without recreation
import Button from './components/UI/Button/Button';
import './App.css';
import Demo from './components/Demo/DemoOutPut';

function App() {

  const [showPara,setShowPara]=useState(false);
  const onCHangeHandler=useCallback(()=>{
    setShowPara(prewPara=>!prewPara);
  },[])
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showPara}/>
      <Button onClick={onCHangeHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
