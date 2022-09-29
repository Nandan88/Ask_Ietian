const mongoose = require('mongoose')

const QuestionSchema=new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt:{
        type: Date,
        default:Date.now()
    },
    answers: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Answers"  // Might be mongoose.model(of answer) me jo name likha vo name ref me daalna hai 
    },
});

module.exports = mongoose.model("Questions",QuestionSchema)