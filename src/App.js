import React,{useRef, useState} from 'react';
import Componentone from './component/Component1'

const App = () => {
  const [name,setName] = useState([
    {name:"kyaw"},
    {name:"mgmg"},
    {name:"mama"}
  ]);
  
  const nameInput = useRef();
  const ChangeName = (params)=>{
    setName([...name,{name:nameInput.current.value}]);
  }

  const deleteName = (params)=>{
     let newval = name.filter((val)=>val.name !== params)
     setName(newval)
  }
  return (
    <div>
      {name.map((val)=>{
        return <h1 key={val.name} onClick={()=>deleteName(val.name)}>{val.name}</h1>
      })}
      <input type="text" ref={nameInput}/>
      {/* <button onClick={()=>setName('Mg Mg')}>Change Name</button> */}
      {/* <button onClick={()=>ChangeName()}>Change Name</button> */}
      <button onClick={ChangeName}>Change Name</button>
    </div>
  )
}

export default App
