const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = process.env.secret 

function validate(password, hashPassword){
    return new Promise((resolve, reject) =>{
        if(bcrypt.compareSync(password,hashPassword)){
            console.log(key)
            var token = jwt.sign({
                _id: fuser.data._id,
                username: fuser.data.username,
                type: fuser.data.type,
            },key, {
                expiresIn: 86400 
            });
            console.log(token)
            resolve({
                auth: true,
                token: token,
                type: fuser.data.type,
                message: 'login successful'
              });
        }else{
            reject({message:'wrong password'})
        }
    })
            
};


module.exports = {
    validate
};