import React,{useState,useEffect} from 'react'
import { useTaskContext } from '../hooks/useTaskContext'
import { createTask ,updateTask} from "../services/TaskService"

export const TaskForm = ({existing=null,onClose}) => {
    const {dispatch}=useTaskContext()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");
    const [dueDate, setDueDate] = useState("");
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(existing){
           setTitle(existing.title||"");
           setDescription(existing.description ||"");
           setStatus(existing.status||"Pending") ;
           setDueDate(existing.dueDate ?existing.dueDate.slice(0, 10):"");

        }else{
           setTitle("");
           setDescription("");
           setStatus("Pending");
           setDueDate("");
        }

    },[existing]);

    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const task = { title, description, status, dueDate };
        try{
          if(existing){
                const response= await updateTask(existing._id,task);
                dispatch({type:"UPDATE_TASK",payload:response.data.data})
          }else{
          const response=  await createTask(task); 
          dispatch({type:"CREATE_TASK",payload:response.data.data})
          }
          setError(null);  
          if (onClose) onClose(); 
        }catch(err){
            setError("Server error: " + err.message);
        }
      
        
    };


  return (
    <form className='create' onSubmit={handleSubmit}>
      <div className='emp1'> 
            <h3>{existing?"Update Task":"Add Task"}</h3>
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
                    <button id='button' type='submit'>{existing?"Update":"Add" }</button>
                    {error && <div className='error'>{"Please fill all require filds"}</div>}
            </div>        
        
      </div>  
    </form>
  )
}
export default TaskForm