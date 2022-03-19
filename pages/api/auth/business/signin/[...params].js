import dbConnect from "../../../../../database/dbConnect";
const {BusinessUserModel} = require("../../../../../database/dbModel/BusinessUser.js")

export default async function handler(req,res) {    
    dbConnect();

    const {params} = req.query;
    let email = params[0];
    let password = params[1];

    console.log(req.method);
    
    if (req.method === "GET") {
        // find business user with email and password
        
        try {
            let data = await BusinessUserModel.findOne({
                email:email,
                password:password
            })
            res.status(201).json(data)    
        } catch (error) {
            console.log(error);
            res.status(404).send("Sorry,your email or password is incorrect.")
        }
    }
        
}