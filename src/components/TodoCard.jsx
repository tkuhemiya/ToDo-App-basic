export function TodoCard(props){
   
    const todos = props.todos;
    const todoIndex = props.todoIndex;
    const editTodo = props.editTodo;
    const deleteTodo = props.deleteTodo;
   
    return(
        <div className="todo-card">
            <p>{todos.input}</p>
            <div>
                <button disabled={todos.completed} onClick={() => {editTodo(todoIndex)}} className="done">Done</button>
                <button onClick={() => {deleteTodo(todoIndex)}} className="delete">Delete</button>
            </div>
        </div>
    )
}