import userModel from "../db/users.js";




export const addUser = async (req, res) => {  
    try{
        const newUser = new userModel({...req.body})
        newUser.save(function(err, result){
          if(!err){
            console.log("user added");
            console.log(result);
            res.send({response:"user added"});
          } else {
            console.log(err);
          }
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

