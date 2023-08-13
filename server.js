const express=require('express');
const { connectDb } = require('./config/dbConnection');
connectDb();
const app=express();
 
const port=5000;
app.use(express.json());
 
app.use("/api",require("./routes/contactsRoutes"));
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});
