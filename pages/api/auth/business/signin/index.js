import dbConnect from "../../../../../database";
const {BusinessUserModel} = require("../../../../../database/dbModel/BusinessUser.js")

export default async function handler(req,res) {    
    dbConnect();

    console.log(req.method);
    
    if (req.method === "POST") {
        const {email,password} = JSON.parse(req.body)
        // Create new user
        try {
            let data = await BusinessUserModel.findOne({
                email:email,
                password:password
            })
            res.status(201).json(data)    
        } catch (error) {
            console.log(error);
            res.status(400).send("Sorry, it's fail.")
        }
    }
        
}