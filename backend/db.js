const mongoose = require('mongoose')

const url="mongodb+srv://AskIetian:Gc4lRj0savKDQZYY@cluster0.jqhm8i4.mongodb.net/?retryWrites=true&w=majority"



module.exports.connect=()=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("MongoDB connected successfully");
    }).catch((err)=>console.log("Error: ",err));
}
// Mongodb ps Gc4lRj0savKDQZYY