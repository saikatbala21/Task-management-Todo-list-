 const express= require("express");
 const cors = require("cors");
 const taskRouters=require("./routes/task");
 const dotenv=require("dotenv");
 const dbConection = require("./databaseConection");
 const app=express();
 const port=8081;
 dotenv.config();
 dbConection();
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));

 app.use(express.json());
 

 app.use("/tasks",taskRouters);

 

 app.listen(port, ()=>{
     console.log(`Server is up and running on http://localhost:${port}`);
 });

 