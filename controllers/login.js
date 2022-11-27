import userModel from "../db/users.js";

export const authorizeLogin = async (req, res) => {
    try{
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Origin', '*');
        userModel.findById(req.body.username)
        .then((user)=>{
            console.log(user);
          if(user === null){
            res.json({response:"User Not Found", loginAttempt:false})
          } else {
            if(user.password === req.body.password){
                res.json({response:"Logged In", loginAttempt:true})
            } else {
                res.json({response:"Password Incorrect", loginAttempt:false})
            }
          }

        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

