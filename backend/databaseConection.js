const mongoose = require("mongoose");
const dns= require("dns");
dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])
const dbConection=async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const db=mongoose.connection;
    db.on("error",(err)=>{
      console.error("Database connection error:",err);
    });
    db.on("open",()=>{
      console.log("DB conected....")
    });
  } catch (error) {
    console.error("Failed to connect to database:",error);
  }
};

module.exports = dbConection;