import { TodoCard } from "./TodoCard";

export function TodoList( props ){
  const todos = props.todos;
  const selectedTab = props.selectedTab;

  const editTodo = props.editTodo;
  const deleteTodo = props.deleteTodo;
  
    return(
        <>
            {todos.map((todo, todoIndex) => {

                if(selectedTab == "All"){
                    return(
                        <TodoCard 
                        todos={todo} 
                        key={todoIndex} 
                        todoIndex={todoIndex}
    
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        />
                    )
                }else if(selectedTab == "Completed" && todo.completed){
                    return(
                        <TodoCard 
                        todos={todo} 
                        key={todoIndex} 
                        todoIndex={todoIndex}
    
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        />
                    )
                }else if(selectedTab == "Todo" && !todo.completed){
                    return(
                        <TodoCard 
                        todos={todo} 
                        key={todoIndex} 
                        todoIndex={todoIndex}
    
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        />
                    )
                } 

                
            })}

        </>
    )
}