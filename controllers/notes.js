import express from "express";

import userModel from "../db/users.js";

export const getNotes = async (req, res) => {
    try{
        const NotesData = await userModel.find({_id:req.params.userId});        
        res.status(200).json(NotesData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addNote = async (req, res) => {
    const NotesData = await userModel.findOne({_id:req.params.userId});  

    NotesData.notes.push({...req.body});
    NotesData.save(function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
}
// export const addNote = async (req, res) => {
//     console.log(req.params);
//     const newNote = new NotesModel({...req.body});


//     newNote.save(function(err,result){
//         if (err){
//             console.log(err);
//             res.send(err);
//         }
//         else{
//             console.log(result);
//             res.send(result);
//         }
//     });
// }

// export const deleteNote = async (req, res) => {
//     NotesModel.findByIdAndDelete(req.params.id, function(err){
//         if(!err){
//             console.log("Deleted Succesfullt");
//         } else {
//             console.log(err);
//         }
//     })
// }
export const deleteNote = async (req, res) => {

    const user = await userModel.findOne({_id:req.params.userId});  

    user.notes = user.notes.filter( note =>  note._id.valueOf() !== req.params.noteId);

    user.save(function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("result");
            res.send(result);
        }
    });
}


// export const updateNote = async (req, res) => {

//     NotesModel.findByIdAndUpdate(req.params.id, req.body,
//         function (err, docs) {
//             if (err){
//                 console.log(err)
//             }
//             else{
//                 console.log("Updated User : ", docs);
//                 res.send(docs);
//             }
//     });
// }
export const updateNote = async (req, res) => {

    const user = await userModel.findOne({_id:req.params.userId});  
    user.notes.forEach(note => {
        if(note._id.valueOf() === req.params.noteId){
            note.title = req.body.title;
            note.content = req.body.content;
            note.tags = req.body.tags;
            note.favorite = req.body.favorite;
            note.dateModified = new Date();
        }
    })

    user.save(function(err,result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("result");
            res.send(result);
        }
    });

}
