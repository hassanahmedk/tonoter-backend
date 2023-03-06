import mongoose from 'mongoose';

export const NotesSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: String,
    tags: [],
    dateModified: String,
    user: String,
    favorite: {
      type:Boolean,
      default:false,
    },
  });

   
// const NotesModel = mongoose.model("Notes", NotesSchema);
  
// export default NotesModel;