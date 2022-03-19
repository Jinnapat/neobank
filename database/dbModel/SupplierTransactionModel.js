// const mongoose = require("mongoose")

// const AssetSchema = new mongoose.Schema({
//     name:String,
//     code:String,
//     deposits:Number,
//     interest:Number,
//     balance:Number
// })


// //P2P exchange edition
// const BusinessUserSchema = new mongoose.Schema({
//     publicAddress:String,
//     username:String,
//     assets:[AssetSchema]
// })

// let BusinessUserModel =  (mongoose.models && mongoose.models.BusinessUser
//     ? mongoose.models.BusinessUser
//     : mongoose.model('BusinessUser', BusinessUserSchema))

// module.exports = {BusinessUserModel}