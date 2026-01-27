import { useState } from "react";

function ToDoList(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] =  useState("")

    function handleInputChange(e){
            setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim()){
        setTasks([...tasks, {id: Date.now(), text: newTask, completed:false}])
        setNewTask("")
    }

    }

     function delTask(id){
        setTasks(tasks.filter((task) => task.id !== id))
    }
    return(
        <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <input
            type="text"
            placeholder="Enter the task"
            value={newTask}
            onChange={handleInputChange}>
            </input>
            <button className="add-btn" onClick={addTask}>ADD</button>

        </div>
        <div>
            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            <input 
                                type="checkbox" 
                                checked={task.completed} 
                                onChange={() => setTasks(
                                    tasks.map((t) => 
                                        t.id === task.id ? {...t, completed: !t.completed} : t
                                    )
                                )}
                            />
                            <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                                {task.text}
                            </span>
                            <button onClick={() => delTask(task.id)} style={{margin: '5px'}}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}
export default ToDoList