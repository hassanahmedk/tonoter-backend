import express from "express";

import { addUser } from "../controllers/signup.js";

const router = express.Router();


router.route("/")
.post(addUser);
// .post(addNote)
// .delete(deleteNote)
// .put(updateNote);

export default router;



// have to authorizelogin