import PaddedInputField from "../../PaddedInputField"

const BankingInfo = ({transaction,amount,setAmount,assetInfo}) => {
  let{asset,apy,deposits,interest,balance} = assetInfo
  return (
    <div className="my-2">
      {/* Amount */}
      <div className='grid grid-cols-1 place-items-start gap-y-1 my-2 text-xl'>
          <p className='font-bold flex space-x-2'>
            Amount
          </p>
          <div className="flex items-center space-x-4">
            <PaddedInputField type="email" placeholder="Email" setter={setAmount} value={amount} />
            <p>{asset}</p>
          </div>
      </div>

      <div className="grid grid-cols-8 space-x-4 text-xl py-4">
        <p className="col-span-4 text-gray-500">Supply APY</p>
        <p className="col-span-4"> {apy} %</p>
      </div>

      <div className="grid grid-cols-8 space-x-4 text-xl py-4">
        <p className="col-span-4 text-gray-500">Current Deposit</p>
        <p className="col-span-4"> {deposits} {asset}</p>
      </div>

      <div className="grid grid-cols-8 space-x-4 text-xl py-4">
        <p className="col-span-4 text-gray-500">Current interst</p>
        <p className="col-span-4"> {interest} {asset}</p>
      </div>

      {transaction === "deposit" && (
        <div className="grid grid-cols-8 space-x-4 text-xl py-4">
          <p className="col-span-4 text-gray-500">Wallet Balance</p>
          <p className="col-span-4"> {balance} {asset}</p>
        </div>
      )}
        

      
      
    </div>
  )
}

export default BankingInfo