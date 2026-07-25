import React, {useEffect,useState}from 'react';
import TaskDetails from '../components/TaskDetails';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../hooks/useTaskContext';
import { getTasks } from "../services/TaskService";

const Home = () => {
    const {tasks,dispatch}=useTaskContext();
    useEffect(()=>{
       
      const fetchTasks= async()=>{
        try{
          const response = await getTasks();
          dispatch({ type: "SET_TASKS", payload: response.data.data });
          
        }catch(err){
          console.error("Failed to fetch tasks:", err.message); 
        }
      }   
      fetchTasks();   
    }, [dispatch]);
   return (
     <div className='home'>
       <div className='emps'>
        {
         tasks &&
          tasks.map((task) => (
            <TaskDetails key={task._id} task={task} />
            
        ))}
       </div>
       <div className='emp'>
          <TaskForm/>
       </div> 
     </div>
    )
}
export default Home;