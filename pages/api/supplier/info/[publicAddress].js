import dbConnect from "../../../../database/dbConnect";
const {SupplierUserModel} = require("../../../../database/dbModel/SupplierUserModel")
export default async function handler(req,res) {
    const {publicAddress} = req.query
    
    dbConnect();

    console.log(req.method);
    if (req.method === "POST") {
        let {usernameInput} = JSON.parse(req.body)
        try {
            const userData = await SupplierUserModel.findOneAndUpdate({publicAddress},{
                username:usernameInput
            })
            res.status(201).json(userData)
        } catch (error) {
            console.log(error);
        }

    }
}
