import express from "express";

import userModel from "../db/users.js";

export const authorizeLogin = async (req, res) => {
   //console.log(req.body);
   console.log('herer');
    try{
        userModel.findById(req.body.username)
        .then((user)=>{
            console.log(user);
          if(user === null){
            res.json({response:"User Not Found", loginAttempt:false})
          } else {
            if(user.password === req.body.password){
                res.json({response:"Logged In", loginAttempt:true})
            } else {
                res.json({response:"Password Incorrect", loginAttempt:false})
            }
          }

        })
        // res.status(200).json(NotesData);
       // console.log(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

