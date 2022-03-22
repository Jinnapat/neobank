import dbConnect from "../../../database/dbConnect";
const {SupplierUserModel} = require("../../../database/dbModel/SupplierUserModel")
const {SupplierTransactionModel} = require("../../../database/dbModel/SupplierTransactionModel")
const {AccountBalanceModel} = require("../../../database/dbModel/AccountBalanceModel")
export default async function handler(req,res) {
    const {publicAddress} = req.query
    
    dbConnect();
    const userData = await SupplierUserModel.findOne({publicAddress:publicAddress})

    console.log(req.method);
    if (req.method === "GET") {

        try {
            let transactioData = await SupplierTransactionModel.find({publicAddress});

            let accountBalanceData = await AccountBalanceModel.find({publicAddress})
            let respondData = {
                transactions:transactioData[0],
                accountBalance:accountBalanceData[0]
            }
            res.status(201).json(respondData)
        } catch (error) {
            console.log(error);
        }

    }
}
