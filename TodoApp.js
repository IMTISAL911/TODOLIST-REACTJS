// import React from "react";
// import { useState } from "react";

// const Todolist=()=>{

//     const[activity,setActivity]=useState("");
//     const [Listdata,setListData]=useState([]);

//     function Addactivity(){

// setListData((Listdata)=>{
//     const UpdateList=[...Listdata,activity]
//     console.log(UpdateList)
//     setActivity('');
//     return UpdateList
// })


//     }

   

//     return(
//         <>
        
//         <h1>Todo list</h1>

//         <input type="text" placeholder="ENTER YOUR ACTIVITY" value={activity} onChange={(e)=>setActivity(e.target.value)} />

//         <button onClick={Addactivity}>ADD</button>
        
//         </>
//     )
// }
// export default Todolist

import React from "react";
import { useState } from "react";




const TodoApp=(props)=>{
    const [inputTxt,setInputTsxt]=useState('');
    return(

        <>
        
        <h1>Todo LIST</h1>

        <input type="tex"  placeholder="ENTER YOUR TODO" value={inputTxt} onChange={e=>{setInputTsxt(e.target.value)}} />

        <button onClick={()=>{props.addlist(inputTxt), setInputTsxt("")}}>ADD +</button>
        
        </>
    )
}

export default TodoApp