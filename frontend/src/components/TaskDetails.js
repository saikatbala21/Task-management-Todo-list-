import React,{useEffect,useState} from 'react'
import { useTaskContext } from '../hooks/useTaskContext'
import { deleteTask, updateTaskStatus } from "../services/TaskService";

const TaskDetails = ({task}) => {
  const {dispatch}=useTaskContext();
  const handleDelete = async () => {
    try {
      const response = await deleteTask(task._id);
      dispatch({ type: "DELETE_TASK", payload: response.data.data || task });
    } catch (err) {
      console.error("Failed to delete task:", err.message);
    }
  }
  const handleStatusChange = async (newStatus) => {
    try {
      const response = await updateTaskStatus(task._id, newStatus);
      dispatch({ type: "UPDATE_TASK", payload: response.data.data });
    } catch (err) {
      console.error("Failed to update status:", err.message);
    }
  };
  return (
    <div className='emp-details'>
       <h4>{task.title}</h4>
       <p><strong>Description</strong><span>{task.description}</span></p>
       <p><strong>Status:</strong><span>{task.status}</span></p>
       <p><strong>Due Date:</strong><span>{new Date(task.dueDate).toLocaleDateString()}</span></p>
       <p><small>Created: {new Date(task.createdAt).toLocaleString()}</small></p>
       <button id='but1' onClick={handleDelete}>Delete</button>
       <button id='but1' onClick={() => handleStatusChange("Completed")}>Mark Completed</button>
    </div>
    
  )
}
export default TaskDetails; 