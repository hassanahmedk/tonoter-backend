import userModel from "../db/users.js";

export const usernameChecker = async (req, res) => {
    try{
        userModel.findById(req.body.userId)
        .then((user)=>{
          if(user === null){
            res.json({userExists:false});
          } else {
            res.json({userExists:true});
          }

        })

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

