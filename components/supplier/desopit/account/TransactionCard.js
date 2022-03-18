import USDT from "../../../../public/icons/crypto/USDT.png"
import USDC from "../../../../public/icons/crypto/USDC.png"
import DAI from "../../../../public/icons/crypto/DAI.png"
import BUSD from "../../../../public/icons/crypto/BUSD.png"
import UST from "../../../../public/icons/crypto/UST.png"
import Image from "next/image"

const TransactionCard = ({data,index}) => {
    let {transactionNumber,asset,transaction,amount,date} = data
  return (
    <div key={index} className=" border-2 shadow p-4 rounded w-10/12 lg:w-8/12 place-self-center place-items-start space-y-2"> 
        {/* Transaction Number */}
        <div className='grid grid-cols-12 place-items-start gap-x-4'>
            <p className='col-span-4 place-self-center text-gray-500 text-lg font-medium'>Transaction Number</p>
            <p className='col-span-8 font-medium text-xl rounded-full border-2 w-fit px-4 py-2 cursor-pointer transition duration-150 hover:border-blue-500 hover:shadow-lg transform ease-out'>
              {transactionNumber}
            </p>
        </div>

        {/* Asset */}
        <div className='grid grid-cols-12 place-items-start gap-x-4'>
            <p className='col-span-4 place-self-center text-gray-500 text-lg font-medium'>Asset</p>
            <p className='flex items-center space-x-2 col-span-8 font-medium text-xl rounded-full border-2 w-fit px-4 py-2 cursor-pointer transition duration-150 hover:border-blue-500 hover:shadow-lg transform ease-out'>
              <Image src={imageSrc[asset]} height={30} width={30} />
              <span>{asset}</span>
            </p>
        </div>

        {/* Transaction */}
        <div className='grid grid-cols-12 place-items-start gap-x-4'>
            <p className='col-span-4 place-self-center text-gray-500 text-lg font-medium'>Transaction</p>
            <p className='col-span-8 font-medium text-xl rounded-full border-2 w-fit px-4 py-2 cursor-pointer transition duration-150 hover:border-blue-500 hover:shadow-lg transform ease-out'>
              {transaction == "deposit" ? (
                  <span className="text-green-500 font-bold">{transaction}</span>
              ) : (
                  transaction === "withdraw" && (
                    <span className="text-red-500 font-bold">{transaction}</span>
                  )
              )}
            </p>
        </div>

        {/* Amount */}
        <div className='grid grid-cols-12 place-items-start gap-x-4'>
            <p className='col-span-4 place-self-center text-gray-500 text-lg font-medium'>Amount</p>
            <p className='col-span-8 font-medium text-xl rounded-full border-2 w-fit px-4 py-2 cursor-pointer transition duration-150 hover:border-blue-500 hover:shadow-lg transform ease-out'>
              {amount} {asset}
            </p>
        </div>

        {/* Date */}
        <div className='grid grid-cols-12 place-items-start gap-x-4'>
            <p className='col-span-4 place-self-center text-gray-500 text-lg font-medium'>Date</p>
            <p className='col-span-8 font-medium text-xl rounded-full border-2 w-fit px-4 py-2 cursor-pointer transition duration-150 hover:border-blue-500 hover:shadow-lg transform ease-out'>
              {date}
            </p>
        </div>
        
    </div>
  )
}

export default TransactionCard

let imageSrc = {
    "USDT":USDT,
    "USDC":USDC,
    "BUSD":BUSD,
    "DAI":DAI,
    "UST":UST,
}