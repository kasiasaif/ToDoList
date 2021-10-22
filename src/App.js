import React, {  useState } from 'react';
import './App.css';


const App =()=>{

const[lists,setLists]=useState([])

const [input,setInput]=useState('');

const handleSubmit=()=>{
  let storedTask=[...lists];
  storedTask.push(input)
  setLists(storedTask)
  setInput('')
}
  
  const handleDelete=(index)=>{
    let storedTask=[...lists]
    storedTask.splice(index,1)
    setLists(storedTask)
  }
  return(
    <div>
    <h1>TODO List</h1>
    <div className="App">
      
      <div className="input">
      <input  value={input} onChange={(event)=>setInput(event.target.value)} placeholder="Enter new task"/>
      <button onClick ={handleSubmit} className="add">ADD TASK</button></div>
      {lists.map((list,index)=>{
  return(
  <div className= "list" key={index}>
  <div className= "delete">{list}</div>
  <button  className= "delete" onClick={()=> handleDelete(index)}>DELETE</button>
  </div>
  )
    }
  )
}
    </div> 
    </div>
  
  )
}

  

export default App;
