import React,{useState} from 'react'
import { useTaskContext } from '../hooks/useTaskContext'
import { createTask } from "../services/TaskService"

export const TaskForm = () => {
    const {dispatch}=useTaskContext()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");
    const [dueDate, setDueDate] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const task = { title, description, status, dueDate };
        try{
          const response=  await createTask(task); 
          const json = response.data;
         
        
            setError(null);
            setTitle("");
            setDescription("");
            setStatus("Pending");
            setDueDate("");
            console.log("New Task added",json)
            dispatch({type:'CREATE_TASK',payload:json.data})
         
        }catch(err){
            setError("Server error: " + err.message);
        }
      
        
    };


  return (
    <form className='create' onSubmit={handleSubmit}>
      <div className='emp1'> 
            <h3>Add Task</h3>
            <div className='empfrom'>
                    <label>Title:</label>
                    <input id='from1' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>    
            <div className='empfrom'>    
                    <label>Description:</label>
                    <input id='from2' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='empfrom'>       
                    <label>Status:</label>
                    <select id='from3' value={status} onChange={(e)=>setStatus(e.target.value)}>
                       <option>Pending</option>
                       <option>In Progress</option>
                       <option>Completed</option>
                    </select>
            </div>
            <div className='empfrom'>

                    <label>Due Date:</label>
                    <input id='from4' type='date' value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
            </div>
           
             
            <div className='button1'>    
                    <button id='button' type='submit'>Add Task</button>
                    {error && <div className='error'>{error}</div>}
            </div>        
        
      </div>  
    </form>
  )
}
export default TaskForm