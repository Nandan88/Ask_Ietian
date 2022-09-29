const express = require('express')
const router = express.Router()

const answerDB = require('../models/Answer')

router.post('/',async(req,res)=>{
    try{
        await answerDB
        .create({
            answer: req.body.answer,
            questionId: req.body.questionId,
        }).then(()=>{
            res.status(201).send({  // This numbers should be properly given otherwise can create problem
                status: true,
                msg: "Answer added successfully",
            });
        }).catch((e)=>{
            res.status(400).send({
                status: false,
                msg: "Bad request",
            });
        });
    } catch(e){
        res.status(500).send({
            status: false,
            msg: "Error while adding answer"
        });
    }
});

module.exports=router