import express from "express";

import { authorizeLogin } from "../controllers/login.js";

const router = express.Router();


router.route("/")
.post(authorizeLogin);
// .post(addNote)
// .delete(deleteNote)
// .put(updateNote);

export default router;



// have to authorizelogin