import express from "express";

import {getNotes, addNote, deleteNote, updateNote} from "../controllers/notes.js";

const router = express.Router();


router.route("/:userId/:noteId")
.get(getNotes)
.post(addNote)
.delete(deleteNote)
.put(updateNote);

export default router;