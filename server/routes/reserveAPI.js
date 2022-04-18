const express = require('express');
const routers=express.Router();
const Postmodel=require('../models/postmodels');
const ReservationModel=require('../models/reservationModel');
const OfferModel=require('../models/offermodels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

routers.patch('/:postId',async(req,res)=>{
    try{
        //console.log(req.body.reserveStatus);
        const updatedPost=await OfferModel.updateOne(
            {_id:req.params.postId},
            {$set:{remainingSits:req.body.remainingSits}}
        );
        res.json(updatedPost);
    }
    catch(err){
        res.json({message:err});
    }
} );
routers.patch('/sitreset/:postId',async(req,res)=>{
    try{
        //console.log(req.body.reserveStatus);
        const updatedPost=await OfferModel.updateOne(
            {_id:req.params.postId},
            {$set:{remainingSits:req.body.prevSitCount}}
        );
        res.json(updatedPost);
    }
    catch(err){
        res.json({message:err});
    }
} );

routers.get('/:id',async(req,res)=>{
    try{
        const post=await OfferModel.find({restaurantID :req.params.id});
        res.json(post);
    }
    catch(err){
        res.json({message:err});
    }
})


module.exports=routers;