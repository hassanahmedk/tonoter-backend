import mongoose from 'mongoose';
import {NotesSchema} from "./notes.js";
import {ListsSchema} from "./lists.js";

const UserSchema = new mongoose.Schema({
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    dateJoined: String,
    verified: Boolean,
    notes: [NotesSchema],
    lists: [ListsSchema],
});

const userModel = mongoose.model("User", UserSchema);



export default userModel;