const jwt = require('jsonwebtoken')     // method of authintication

const jwtAuthMiddleware = (req,res,next)=>{
    const authorization = req.headers.authorization;
    if(!authorization) return res.status(401).json({ error : "Token not found"});
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({ error: "Unauthorized"});
    try {
             const decoded = jwt.verify(token, process.env.JWT_SECRET );
             req.user  = decoded    // payload
             next();
    } 
    catch (error) {
        console.log(error);
        res.status(401).json({error : "Invalid Token"})
    }
}

// function to generate token
const generateToken = (userdata) =>{
    return jwt.sign(userdata, process.env.JWT_SECRET);  // valid till 8 hours
}

module.exports = {jwtAuthMiddleware, generateToken}     