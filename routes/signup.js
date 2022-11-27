import express from "express";

import { addUser } from "../controllers/signup.js";

const router = express.Router();


router.route("/")
.post(addUser);
// .post()
// .delete()
// .put();

export default router;



// have to authorizelogin