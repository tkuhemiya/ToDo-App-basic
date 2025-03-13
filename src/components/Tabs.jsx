export function Tabs( props ){
    const todos = props.todos;
    const selectedTab = props.selectedTab;
    const setSelectedTab = props.setSelectedTab;

    
    const tabs = ["All","Todo","Completed"]

    return(
        <nav className="tab-container">
            {tabs.map(( tab, tabIndex ) => {
                
                let numOfTasks;
                if (tab == "All"){
                    numOfTasks = todos.length;
                }else if(tab == "Todo"){
                    numOfTasks = todos.reduce((sum, val) => {
                    if(!val.completed){
                        return sum+1;
                    }else{
                        return sum;
                    }
                }, 0)
                }else if(tab == "Completed"){
                    numOfTasks = todos.reduce((sum, val) => {
                    if(val.completed){
                        return sum+1;
                    }else{
                        return sum;
                    }
                }, 0)
                }

                return (
                    <button 
                    key={tabIndex} 
                    className={"tab-button" + ((tab == selectedTab) ? "-selected" : "")}
                    onClick={() => {setSelectedTab(tab)}}
                    >
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}