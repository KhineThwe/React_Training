import React,{useState} from 'react';
import Componentone from './component/Component1'

const App = () => {
  const [name,setName] = useState("Kyaw Kyaw");

  const ChangeName = (params)=>{
    setName(params);
  }
  return (
    <div>
      <h1>{name}</h1>
      {/* <button onClick={()=>setName('Mg Mg')}>Change Name</button> */}
      <button onClick={()=>ChangeName("This is new Params")}>Change Name</button>
    </div>
  )
}

export default App
