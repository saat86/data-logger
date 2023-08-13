
const info=require("../models/infoModel");
const mongoose = require("mongoose");



//get



const getAll=  async (req,res)=>{
    try {
        const infos = await info.find();
        // Convert the Mongoose objects to plain JavaScript objects
        const plainInfos = infos.map((info) => info.toObject());
        res.json(plainInfos);
    } catch (error) {
        // Handle any errors that occurred during the database query
        res.status(500).json({ error: "Internal Server Error" });
    }
}


//post



const create= async (req,res)=>{
    try {
        // Get the data from the request body
        const {
            client_id,
            ref_id,
            data,
            log_type,
            additional_info,
          } = req.body;
      
    
        // Access the client's IP address from the request object
        const user_agent = req.get('user-agent');
  
        const ipAddress = req.ip;
    
        // Create a new "info" document using the info model
        const newLogEntry = new  info({
            client_id,
            ref_id,
            ipAddress,
            data,
            log_type,
            user_agent,
            additional_info,
          });
    
        // Save the new "info" document to the database
        const savedInfo = await newLogEntry.save();
    
        res.status(201).json(savedInfo); // Respond with the saved document
      } catch (error) {
        console.error("Error creating new info document:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};


//get.id


const getById = async (req,res)=>{
    try {
        const logId = req.params.id;
         // Get the log ID from the request parameters

        // Convert the log ID to the ObjectId type
    const objectIdLogId = new  mongoose.Types.ObjectId(logId);
    

        // Find the log by its ID in the database
        const log = await info.findById(objectIdLogId);
    
        if (!log) {
          return res.status(404).json({ message: "Log not found" });
        }
    
        res.json(log);
      } catch (error) {
        console.error("Error finding log by ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

//get 10 logs
const getTen = async (req,res)=>{
    try {
        // Retrieve 10 entries from the Info collection
        const logs = await info.find().limit(10);
    
        res.json(logs);
      } catch (error) {
        console.error('Error retrieving logs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

};
    
//update.id


const updateById = async (req,res)=>{
    res.json({message:`update contact for ${req.params.id}`});
};


//delete.id

const deleteById = async (req,res)=>{
    res.json({message:`delete contact for ${req.params.id}`});
};



module.exports={getAll , create, getById,updateById, deleteById,getTen };