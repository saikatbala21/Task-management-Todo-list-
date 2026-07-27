 const express= require("express");
 let {employ}= require("../data/employ.json");
 const Task=require("../models/taskmodel");
 const {getAllTasks,getTaskById,createTask,updateTask,deleteTask,searchTasks,updateTaskStatus}=require("../controller/taskController")
 const router=express.Router();
 
 router.get("/",getAllTasks);

 
 router.get("/search", searchTasks);


 router.get("/:id",getTaskById);


 router.post("/",createTask);


 router.put('/:id',updateTask);

  
 router.delete('/:id',deleteTask);

 
 router.patch("/:id/status",updateTaskStatus);




 module.exports=router;

