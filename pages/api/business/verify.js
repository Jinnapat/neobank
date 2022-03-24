import dbConnect from "../../../database/dbConnect";
const {BusinessUserModel} = require("../../../database/dbModel/BusinessUserModel.js")

async function handler(req, res) {
    if (req.method === 'POST') {
        dbConnect();
        console.log(req.body.email);
        const updateRes = await BusinessUserModel.findOneAndUpdate(
            {email: req.body.email}, 
            {verified: true}, 
            {new: true}
        )
        console.log(updateRes)
        res.status(200).end("OK")
    }
}

export default handler
  