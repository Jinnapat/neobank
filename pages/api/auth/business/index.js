import dbConnect from "../../../../database/dbConnect";
const {BusinessUserModel} = require("../../../../database/dbModel/BusinessUserModel.js")

export default async function handler(req,res) {
    dbConnect();

    console.log(req.method);
    
    if (req.method === "POST") {
        const {uid,firstName,lastName,businessName,email,password,receiveEmail} = JSON.parse(req.body)
        // Create new user
        try {
            let data = await BusinessUserModel.create({
                uid:uid,
                firstName:firstName,
                lastName:lastName,
                businessName:businessName,
                email:email,
                password:password,
                receiveEmail:receiveEmail,
                verified:false
            })
            res.status(201).json(data)    
        } catch (error) {
            console.log(error);
            res.status(400).send("Sorry, it's fail.")
        }
    }
        
}