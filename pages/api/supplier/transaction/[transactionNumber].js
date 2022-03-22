import dbConnect from "../../../../database/dbConnect";
const {SupplierTransactionModel} = require("../../../../database/dbModel/SupplierTransactionModel")
const {AccountBalanceModel} = require("../../../../database/dbModel/AccountBalanceModel")
export default async function handler(req,res) {
    const {transactionNumber} = req.query
    
    dbConnect();

    if (req.method === "POST") {
        const {apy,deposits,asset,interest,transaction,amount,publicAddress,username,date} = JSON.parse(req.body)
        // Create transaction data on MongoDB
        try {
            // Account Balance
            const accountBalance = await AccountBalanceModel.findOne({publicAddress});
            let index = accountBalance.assetsBalance.findIndex(item => item.asset === asset)
            accountBalance.assetsBalance[index] = {
                asset,
                apy,
                interest,
                deposits:( 
                    transaction === "deposit" ? parseFloat(accountBalance.assetsBalance[index].deposits)+parseFloat(amount) 
                    : transaction==="withdraw" && (parseFloat(accountBalance.assetsBalance[index].deposits)-parseFloat(amount)) 
                ),
            }
            await accountBalance.save().then(() => console.log(`Account balance finish ${transaction}.`));
            
            let newAccountBalance = await AccountBalanceModel.findOne({publicAddress});
         
            // Supplier Transactions
            const supplierTransactions = await SupplierTransactionModel.findOne({publicAddress});
            supplierTransactions.transactionsHistory.push(
                {
                    transactionNumber,
                    asset,
                    transaction,
                    amount,
                    date,
                }
            )
            await supplierTransactions.save().then(() => console.log(`Supplier transaction added ${transaction} transaction for ${asset} of tx number ${transactionNumber}`));
            let newSupplierTransactions = await SupplierTransactionModel.findOne({publicAddress});
            
            // Send Respond back to client
            let respondData = {accountData:newAccountBalance,transactionData:newSupplierTransactions}

            res.status(201).json(respondData)
        } catch (error) {
            console.log(error);
        } 
    }
        
}

