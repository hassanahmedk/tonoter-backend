import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import notesRoutes from "./routes/notes.js";
import loginRoutes from "./routes/login.js";
import signupRoutes from "./routes/signup.js";
import signupCheckRoutes from "./routes/signupCheck.js";

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));

const mongodbURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority&ssl=true`;

mongoose.connect(
  
  mongodbURL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", function(req, res){
  res.json({
    name:"tonoter",
    status:"OK",
    description:"API is working if you're reciving this object :)"
  })
});

app.use('/notes', notesRoutes);
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/signupCheck', signupCheckRoutes);

app.listen(port, "0.0.0.0", function(){
    console.log("Server running at 5000");
});

export default app;