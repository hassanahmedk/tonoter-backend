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