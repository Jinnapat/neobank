import dbConnect from "../../../../database/dbConnect";
const {BusinessUserModel} = require("../../../../database/dbModel/BusinessUserModel.js")

async function handler(req, res) {
    if (req.method === 'POST') {
        dbConnect();

        const updateRes = await BusinessUserModel.updateOne({ name: req.body.email }, { verified: true })

        if (!updateRes.acknowledged) {
            res.status(401).end("FAILED")
            return
        }

        res.status(200).end("OK")
    }
}

export default handler
  