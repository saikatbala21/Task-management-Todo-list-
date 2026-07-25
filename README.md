# Task-management-Todo-list-

## To-Do List App (Node.js + Express + MongoDB + React.js)

A simple  API built with React.js, Express.js and  MongoDB (Mongoose) to manage Tasks in a To‑Do List style application.


## Install  express

npm init
npm i express

## Install node module

npm i nodemon

## Install Mongo DB

npm i
npm i mongoose
npm install mongodb

## Start server

npm run dev


## Default backend server run on

http://localhost:8081

## Git repository link

https://github.com/saikatbala21/Task-management-Todo-list-

## Create React app
npx create-react-app frontend(My app name)

## Install react DOM

npm i react-router-dom

## Run react frontend server

npm start

## Install Axios

npm install axios

## Install the CORS package

npm install cors


## Default frontend server run on

 Local:            http://localhost:3000
 On my Network:  http://192.168.0.4:3000






## Configure environment variables

 Create a .env file in the root directory.

 using--  npm i dotenv

 Add my MongoDB connection string:


## API Endpoints
  Method   Endpoint     Description 

  GET--- /tasks --      Fetch all tasks. 
  GET--- /tasks/:id--   Fetch a single task by its ID.
  POST-- /tasks ---     Add a new task.
  PUT--  /tasks/:id---  Update an existing task. 
  DELETE--/tasks/:id--  Remove a task by ID.
  GET----/tasks/search?keyword=.-- Search tasks by keyword in title or description
  PATCH-- /tasks/:id/status----Update only the status of a task
## API working

The Task Controller contains all the logic for handling CRUD operations on Tasks records. It interacts with the task model (Mongoose schema) and defines the following functions:

1. getAllTasks
        Purpose: Fetch all tasks from the database.

        Behavior:

        Returns a 404 error if no tasks are found.

        Otherwise, responds with a list of all tasks.

2. getTaskById
        Purpose: Fetch a single task by its ID.

        Behavior:

        Returns a 404 error if the task does not exist.

        Otherwise, responds with the task object.

3. createTask
        Purpose: Add a new task to the database.

        Behavior:

        Validates required fields (title, description, status, dueDate).

        Returns a 400 error if validation fails.

        Otherwise, saves and responds with the created task.

4. updateTask
        Purpose: Update an existing task by ID.

        Behavior:

        Returns a 404 error if the task does not exist.

        Returns a 400 error if the update data is invalid.

        Otherwise, updates and responds with the modified task.
        
5. deleteTask
        Purpose: Remove a task by ID.

        Behavior:

        Returns a 404 error if the task does not exist.

        Otherwise, deletes and responds with a success message.

6. searchTasks
        Purpose: Search tasks by keyword in title or description.

        Behavior:

        Returns a 404 error if no matching tasks are found.

        Otherwise, responds with a list of matching tasks.

7. updateTaskStatus
        Purpose: Update only the status of a task.

        Behavior:

        Returns a 404 error if the task does not exist.

        Returns a 400 error if the status value is invalid.

        Otherwise, updates and responds with the updated task.         

## Frontend Working

## Features
     1.  Display all tasks from the backend

     2.  Add new tasks via a form

     3.  Update task status (Pending → In Progress → Completed)

     4.  Delete tasks

     5.  Search tasks by keyword

## Example Flow

    User opens app → Home.js fetches tasks from /tasks.

    User adds a task → TaskForm.js posts to /tasks, updates context.

    User deletes a task → TaskDetails.js calls DELETE /tasks/:id, updates context.

    User updates status → PATCH /tasks/:id/status, updates context.
        
