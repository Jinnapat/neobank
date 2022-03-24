import dbConnect from "../../../../database/dbConnect";
const {SupplierUserModel} = require("../../../../database/dbModel/SupplierUserModel")
const {SupplierTransactionModel} = require("../../../../database/dbModel/SupplierTransactionModel")
const {AccountBalanceModel} = require("../../../../database/dbModel/AccountBalanceModel")
export default async function handler(req,res) {
    const {publicAddress} = req.query
    
    dbConnect();
    const userData = await SupplierUserModel.findOne({publicAddress:publicAddress})

    if (req.method === "GET") {

        try {
            if (!userData) {
                console.log("Find Nothing !,Let's Create");
                await SupplierUserModel.create({
                    username: "unnamed",
                    publicAddress: publicAddress,
                }).then(async () => {
                    await SupplierTransactionModel.create({
                        publicAddress,
                        transactionsHistory:[]
                    });

                    await AccountBalanceModel.create({
                        publicAddress,
                        assetsBalance
                    });

                    console.log("Created new user")
                    let newUserData = await SupplierUserModel.findOne({publicAddress:publicAddress});
                    res.status(201).json(newUserData)
                })
            }
            // return avaiable user in MongoDB
            res.status(200).json(userData)    
        } catch (error) {
            console.log(error);
        }
    }
        
}

let assetsBalance = [
    {
        asset:"USDT",
        apy:5.64,
        deposits:0,
        interest:0
    },
    {
        asset:"USDC",
        apy:5.64,
        deposits:0,
        interest:0
    },
    {
        asset:"BUSD",
        apy:5.64,
        deposits:0,
        interest:0
    },
    {
        asset:"DAI",
        apy:5.64,
        deposits:0,
        interest:0
    },
    {
        asset:"UST",
        apy:5.64,
        deposits:0,
        interest:0
    },
    
    
]