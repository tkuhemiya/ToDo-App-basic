import { useState } from "react";

export function TodoInput(props){

  const addTodo = props.addTodo;
  const selectedTab = props.selectedTab;
  
  const [inputval, setInputval] = useState('')

  if(selectedTab == "Completed"){
    return;
  }
    return(
        <div className="input-container">
            <input type="text" placeholder="New task" value={inputval} onChange={(e) => {setInputval(e.target.value)}} />
            <button onClick={() => {
                if (!inputval){
                    return;
                }else{
                    addTodo(inputval);
                }
                }}>
                <img src="./src/assets/plus.svg" alt="" className="icon" />
            </button>

        </div>
    )
}