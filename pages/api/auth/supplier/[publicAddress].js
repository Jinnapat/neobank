import dbConnect from "../../../../database/dbConnect";
const {SupplierUserModel} = require("../../../../database/dbModel/SupplierUserModel")
export default async function handler(req,res) {
    const {publicAddress} = req.query
    
    dbConnect();
    const userData = await SupplierUserModel.findOne({publicAddress:publicAddress})

    console.log(req.method);
    if (req.method === "GET") {

        try {
            if (!userData) {
                console.log("Find Nothing !,Let's Create");
                await SupplierUserModel.create({
                    username: "unnamed",
                    publicAddress: publicAddress,
                }).then(async () => {
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

    }else if (req.method === "POST") {

        const {usernameInput,descriptionInput,promptpayIDInput,bankNameInput,bankAccountInput} = JSON.parse(req.body)
        // Update user data on MongoDB
        try {
            let data = await UserModel.findOneAndUpdate({publicAddress:publicAddress},
                {
                    username: usernameInput || userData.username ,
                    description: descriptionInput || userData.description,
                    // image: image || userData.image,
                    promptpayID:promptpayIDInput || userData.promptpayID,
                    bankName:bankNameInput || userData.bankName ,
                    bankAccount:bankAccountInput || userData.bankAccount 
                },
                {
                    new:true
                }
            )

            res.status(201).json(data)
        } catch (error) {
            console.log(error);
        } 
    }
        
}