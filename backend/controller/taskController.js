const Task = require("../models/taskmodel");
const mongoose=require('mongoose');
exports.getAllTasks = async (req, res) =>{
  try {
    const tasks = await Task.find();
    if (!tasks||tasks.length===0){
      return res.status(400).json({
         success: false,
         message: "No tasks found"
        });
    }
    res.status(200).json({
      success:true,
      data: tasks
    });
  }catch(err){
    res.status(500).json({
     success: false,
     error: err.message 
    });
  }
};

exports.getTaskById=async(req, res) =>{
  try {
    const{id}=req.params;
    const task=await Task.findById(id);
    if(!task){
      return res.status(404).json({
        success: false,
        message:`Task not found for id:${id}`
      });
    }
    res.status(200).json({
      success: true,
      data: task
    });
  }catch(err){
    res.status(500).json({
      success:false,
      error: err.message
    });
  }
};

exports.createTask=async(req, res)=>{
  try {
    const{title,description,status,dueDate}=req.body; 
    const newTask=await Task.create({title,description,status,dueDate});
    res.status(200).json({
     success:true,
     message:"Task created successfully",
     data: newTask});
  } catch(err){
    res.status(400).json({
     success:false,
     error:err.message
    });
  }
};

exports.updateTask=async(req, res)=>{
  try {
    const{id}=req.params;
    const data=req.body;
    const updated=await Task.findByIdAndUpdate(id,data,{new:true}); 
    if(!updated){
      return res.status(400).json({
        success:false,
        message:`Task not found for id:${id}`
      });
    }
    res.status(200).json({
      success:true,
      message:"Task updated successfully",
      data:updated
    });
  } catch (err) {
    res.status(500).json({
     success:false,
     error: err.message
    });
  }
};

exports.deleteTask=async(req, res)=>{
  try {
    const{ id }=req.params;
    const task=await Task.findByIdAndDelete(id);
    if(!task){
      return res.status(404).json({
      success:false,
      message:`Task not found for id:${id}`});
    }
    res.status(200).json({
      success:true,
      message: "Task deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.searchTasks=async(req, res)=>{
  try{
     const key=req.query.key|| "";
     const tasks=await Task.find({
      $or:[
       {title:new RegExp(key,"i")},
       {description:new RegExp(key,"i")}
      ]
     });
    res.status(200).json({
      success:true,
      data:tasks
    });
  }catch(err){
    res.status(500).json({
      success:false,
      error:err.message
    });
  }
};

exports.updateTaskStatus=async(req, res)=>{
  try {
    const{id}=req.params;
    const{status}=req.body;
    const task=await Task.findByIdAndUpdate(id,{status},{new:true});
    if(!task){
     return res.status(404).json({
      success:false,
      message:`Task not found for id: ${id}`
    });
    }
    res.status(200).json({
      success:true,
      message:"Task status updated",
      data:task
    });
  }catch(err){
    res.status(500).json({
     success:false,
     error:err.message
    });
  }
};
