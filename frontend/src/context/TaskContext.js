const {createContext,useReducer}=require("react");
export const TaskContext=createContext();
export const taskReducer=(state,action)=>{
    switch(action.type){
        case 'SET_TASKS':
            return{
                tasks:Array.isArray(action.payload) ? action.payload : []
            }
        case 'CREATE_TASK':
            return{
                tasks:[action.payload,...state.tasks]
            }  
        case 'DELETE_TASK':
            return{
                tasks: state.tasks.filter((task) => task._id !== action.payload._id),
            } 
         case "UPDATE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
        default:
            return state         
    }
}

export const TaskContextProvider=({children})=> {
    const[state,dispatch]=useReducer(taskReducer,{
        tasks:[]
    });
  return (
     <TaskContext.Provider value={{...state,dispatch}}>
        {children}
     </TaskContext.Provider>
  )
}
