import React, {useEffect,useState}from 'react';
import TaskDetails from '../components/TaskDetails';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../hooks/useTaskContext';
import { getTasks,searchTasks } from "../services/TaskService";

const Home = () => {
    const {tasks,dispatch}=useTaskContext();
    const [updateTask,setUpdateTask]=useState(null);
    const [load,setLoad]=useState(false);
    const [error,setError]=useState(null);
    const [search,setSearch]=useState("");
    useEffect(()=>{
       
      const fetchTasks= async()=>{
        setLoad(true);
        try{
          const response = await getTasks();
          dispatch({ type: "SET_TASKS", payload: response.data.data });
          setError(null);
          
        }catch(err){
          setError("Failed to fetch tasks:"+err.message); 
        }
        finally{
          setLoad(false);
        }
      }   
      fetchTasks();   
    }, [dispatch]);
     
    const searchHandler=async(e)=>{
      e.preventDefault();
      if (!search.trim()) return;
      setLoad(true);
      try{
        const response= await searchTasks(search);
          dispatch({type:"SET_TASKS",payload:response.data.data})
          setError(null)

      }catch(err){
         setError("searching faild"+err.message);
      }finally{
        setLoad(false);
      }


    }

   return (
     <div className='home'>
       <div className='search'>
        <form className='search1' onSubmit={searchHandler}>
           <input id='ser' type='text' placeholder='Search Tasks' value={search} onChange={(e)=>setSearch(e.target.value)}/>
           <button id='bt' type='submit'>Search</button>
        </form>
        
       </div>
       {load && <p>Loading.....</p>}
       {error &&<p className='err'>{error}</p>}
       <div className='cont'>
          <div className='emps'>
            {
            tasks && tasks.length >0?(
              tasks.map((task) => (
                <TaskDetails key={task._id} task={task} onUpdate={setUpdateTask} />
                
            ))
           ):(!load && <p className="err">No tasks found for "{search}"</p>
           )}
          </div> 
          <div className='emp'>
              <TaskForm 
                  key={updateTask ? updateTask._id :"new"} 
                  existing={updateTask} 
                  onClose={() => setUpdateTask(null)} 
              />
          </div> 
        </div>
     </div>
    )
}
export default Home;