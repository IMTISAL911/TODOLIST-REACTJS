import React from "react";

const Todolist=(props)=>{

    return(

        <div className="todo-box">
            <div>
        {props.item} 
        
        
        </div>
        <button className="delete-button" onClick={()=>props.dleetItem(props.index)}>DELETE</button>

        </div>
        
    )
    
}
export default Todolist