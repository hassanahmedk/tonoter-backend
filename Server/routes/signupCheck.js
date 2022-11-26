import express from "express";

import { usernameChecker } from "../controllers/signupCheck.js";

const router = express.Router();


router.route("/")
.post(usernameChecker);
// .post(addNote)
// .delete(deleteNote)
// .put(updateNote);

export default router;

