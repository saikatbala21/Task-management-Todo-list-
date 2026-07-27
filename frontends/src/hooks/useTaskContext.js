import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTaskContext = () => {
  return useContext(TaskContext);
};
