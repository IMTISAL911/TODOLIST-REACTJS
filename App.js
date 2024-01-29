import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import { useState } from 'react';
import TodoApp from './TodoApp';



function App() {

  const[Listdata,setListData]=useState([]);

  let addlist=(inputTxt)=>{
    if(inputTxt!=="")
    setListData([...Listdata,inputTxt]);
  }

  const dleetListData=(key)=>{

    let newListTodo=[...Listdata];
    newListTodo.splice(key,1)
    setListData([...newListTodo])

  }
  
  return (
    <div className="App">
     
     <TodoApp addlist={addlist} />

     <h1>TODO</h1>
     <hr />

     {Listdata.map((listItem,i)=>{
      return(

        <Todolist key={i} index={i} item={listItem} dleetItem={dleetListData} />
      )
     })}

     
    </div>
  );
}

export default App;
