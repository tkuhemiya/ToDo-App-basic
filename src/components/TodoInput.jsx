import { useState } from "react";

export function TodoInput(props){

  const addTodo = props.addTodo;
  const selectedTab = props.selectedTab;
  
  const [inputval, setInputval] = useState('')

  if(selectedTab == "Completed"){
    return;
  }
    return(
        <div>
            <input type="text" placeholder="Add Task" value={inputval} onChange={(e) => {setInputval(e.target.value)}} />
            <button onClick={() => {
                if (!inputval){
                    return;
                }else{
                    addTodo(inputval);
                }
                }}>
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    )
}