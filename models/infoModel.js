const mongoose = require("mongoose");


const infoSchema=mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.Mixed, required: true },
    

  // Client ID (as an int or string)
    ref_id: { type: mongoose.Schema.Types.Mixed, required: true, unique: true }, 
    
    // User ID

    ipAddress: { type: String,  }, 
    

    // User's IP address
    data: { type: mongoose.Schema.Types.Mixed, required: true }, 
    

    // Data related to the user

    log_type: {
      type: String,
      enum: ["request", "response", "error", "success", "info", "warning"],
    },



    user_agent: { type: String, required: true },



    additional_info: { type: String },


  
    date: { type: Date, default: Date.now },  
    

    // Date when the data is logged
  });

  module.exports=mongoose.model("info",infoSchema);
