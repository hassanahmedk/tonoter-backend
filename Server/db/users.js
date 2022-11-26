import mongoose from 'mongoose';
import {NotesSchema} from "../db/models.js";

const UserSchema = new mongoose.Schema({
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    dateJoined: Date,
    verified: Boolean,
    notes: [NotesSchema],
  });

  
const userModel = mongoose.model("User", UserSchema);
  
export default userModel;

// userModel.insertMany([{
//     _id: "hbeasty1",
//     firstName: "Hassan Ahmed",
//     lastName: "Khan",
//     email: "ihassanahmedkhan@gmail.com",
//     password: "theBEST1!",
//     dateJoined: new Date,
//     verified: false,
//     notes:[
//       {
//         title:"Sample Notes 1",
//         content:"This is sample note",
//       },
      
//       {
//         title:"Sample Notes 1",
//         content:"This is sample note",
//       }
//     ]
// }], (err)=>{
//     if(!err){
//         console.log("user inserted");
//     } else {
//       console.log(err);
//     }
  
//   }
// )


