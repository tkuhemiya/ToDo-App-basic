export function Header( props ){

    const todos = props.todos;

    const todoLength = todos.length || 0;
    const isTaskPrural = (todoLength != 1)? "Tasks" : "Task";

    

    return(
            <h1 className="hh">You Have <span>({todoLength})</span> {isTaskPrural}</h1>
    )
}