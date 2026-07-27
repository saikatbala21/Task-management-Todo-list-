import axios from "axios";

const API_URL = "http://localhost:8081/tasks";

export const getTasks = () => axios.get(API_URL);
export const getTaskById = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
export const searchTasks = (keyword) => axios.get(`${API_URL}/search?keyword=${keyword}`);
export const updateTaskStatus = (id, status) => axios.patch(`${API_URL}/${id}/status`, { status });
