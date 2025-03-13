import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App(){

  const [todo, setTodo] = useState([
    {input:"Create your first todo note", completed:false},
  ]);
  const [selectedTab, setSelectedTab] = useState("Todo");


  function addTodo(newTodo){
    let newTodoList = [...todo, {input: newTodo, completed:false}];
    setTodo(newTodoList);
    saveToLocalDB(newTodoList);
  }
  function editTodo(index){
    // change to completed status
    console.log(index+" edited")
    let newTodoList = [];
    newTodoList = todo.map((val, valindex) => {
      if(valindex == index){
        val.completed = true;
      }
      return val})
    setTodo(newTodoList)
    saveToLocalDB(newTodoList)
    
  }
  function deleteTodo(index){
    console.log(index+" deleted")
    let newTodoList = todo.filter((val,valindex) => { return valindex !== index})
    setTodo(newTodoList);
    saveToLocalDB(newTodoList)
  }

  function saveToLocalDB(currentTodo){
    console.log("Saving todo")
    localStorage.setItem('todo-app', JSON.stringify({"todo": currentTodo}));
  }

  useEffect(() => {
    console.log("getting data")
    if(!localStorage){
      // guard clause
      console.log("todo not found")
      return
    } 
    if(localStorage.getItem('todo-app')){
      console.log("todo exhists")
      let db = JSON.parse(localStorage.getItem('todo-app'))
      console.log(db)
      console.log(db)
      setTodo(db.todo)
    }
  }, []);

  return(
    <>
      <header>
        <Header todos={todo} />
        <Tabs todos={todo} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      </header>
      <div className="card-container">
        <TodoList todos={todo} selectedTab={selectedTab} editTodo={editTodo} deleteTodo={deleteTodo} />
        <TodoInput addTodo={addTodo} selectedTab={selectedTab} />
      </div>

    </>
  )
}

export default App