import express from "express";
import bodyParser from 'body-parser';

import mongoose from 'mongoose';

import NotesModel from "./db/models.js";
import userModel from "./db/users.js";

import notesRoutes from "./routes/notes.js";
import loginRoutes from "./routes/login.js";
import signupRoutes from "./routes/signup.js";
import signupCheckRoutes from "./routes/signupCheck.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));



mongoose.connect(
  
    "mongodb+srv://hassan:wowowo@cluster0.gydewuq.mongodb.net/?retryWrites=true&w=majority", 
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

/*
const newData = new NotesModel({
    title:"Meeting Notes", 
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perferendis dolor assumenda,an...",
    tags: ["Work"],
    dateModified: new Date(),
    user: "hassan"
})


newData.save();
*/

app.use('/notes', notesRoutes);

app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/signupCheck', signupCheckRoutes);


app.listen(5000, function(){
    console.log("Server running at 5000");
});