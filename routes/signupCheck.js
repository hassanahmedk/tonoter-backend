import express from "express";

import { usernameChecker } from "../controllers/signupCheck.js";

const router = express.Router();


router.route("/")
.post(usernameChecker);
// .post()
// .delete()
// .put();

export default router;

