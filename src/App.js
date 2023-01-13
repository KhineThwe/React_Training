import React,{useEffect, useRef, useState} from 'react';
import Componentone from './component/Component1'

const App = () => {
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);
  const [count,setCount] = useState(1);
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts?_page=" + page + "&_limit=5")
      .then((response) => response.json())
      .then((json) => setData(json));
  },[page]);
  
  const changePage = ()=>{
    setPage((prev)=>prev+1);
  }

  const Count = ()=>{
    setCount((prev)=>prev+1)
  }

  return (
   
    <div>
      {count}
      {data.map((val)=>{
        return <h1 key={val.id}>{val.title}</h1>;
      })}
      <button onClick={changePage}>next</button>
      <button onClick={Count}>Count</button>
    </div>
  )
}

export default App
