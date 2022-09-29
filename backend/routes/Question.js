const express = require('express')
const router = express.Router()

const questionDB = require('../models/Question')


router.post('/',async (req,res)=>{
    console.log((req.body));
    
    try {
        // await k liye async use karna padta
        await questionDB.create({
            questionName:req.body.questionName,
            questionUrl:req.body.questionUrl 
        }).then(()=>{
            res.status(201).send({
                status: true,
                message: "Question added successfully"
            })
        }).catch((err)=>{
            res.status(400).send({
                status:false,
                message:"Bad format Question"
            })
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            message: "Error while adding question"
        })
        
    }
});

// Abhi saare questions print karra rahe (vid3 1:30)
router.get('/',async (req,res)=>{
    try {
        await questionDB.aggregate([
            {
            $lookup: {
                from: "answers", // collection to join with current one i.e. questions
                localField: "_id", 
                // localField: "answers",
                foreignField: "questionId", //from answers kiya toh localField me answer ke items and id me ans id aayegi
                as: "allAnswers" //output array field
            },
        },
        ]).exec().then((doc)=>{ //One object is returned 
            res.status(200).send(doc)
        }).catch((error)=>{
            res.status(500).send({
                status:false,
                message: "Unable to get the question details"
            });
        });

        
    } catch (error) {
        res.status(500).send({
            status:false,
            msg:"Error in linking tables"
        });
        
    }
});


// Very Imp line warna work done above is of no use and error will also shown if not writing this below line
module.exports = router  