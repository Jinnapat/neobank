import USDT from "../../../../../public/icons/crypto/USDT.png"
import USDC from "../../../../../public/icons/crypto/USDC.png"
import DAI from "../../../../../public/icons/crypto/DAI.png"
import BUSD from "../../../../../public/icons/crypto/BUSD.png"
import UST from "../../../../../public/icons/crypto/UST.png"
import Image from "next/image"
import BankingCard from "../../../banking/BankingCard"
import { useState } from "react"

const UserSupplyInfo = ({assetInfo,index}) => {
    let {asset,apy,deposits,interest,balance} = assetInfo;
    const [transactionState, settransactionState] = useState("nothing")

  return (
    <tr key={index} className="hover:bg-slate-50 text-xl cursor-pointer">
        {/* Asset */}
        <td className="flex justify-start items-center px-6 py-3 space-x-4">
            <Image src={imageSrc[asset]} width={50} height={50} />
            <p className='text-left font-medium tracking-wider'>
                {asset}     
            </p>
        </td>

        {/* APY */}
        <td className="px-6 py-3">
            <p className='text-center font-medium tracking-wider '>
                {apy} %
            </p>
            
        </td>

        {/* Deposits */}
        <td className=" px-6 py-3 ">
            <p className='text-center font-medium tracking-wider'>
                {deposits} {asset}
            </p>
            
        </td>

        {/* Interest */}
        <td className=" px-6 py-3 ">
            <p className='text-center font-medium tracking-wider'>
                {interest} {asset}
            </p>
            
        </td>

        {/* Balance */}
        <td className=" px-2 py-3  ">
            <BankingCard assetInfo={assetInfo} />
        </td>
    </tr>
  )
}

export default UserSupplyInfo

let imageSrc = {
    "USDT":USDT,
    "USDC":USDC,
    "BUSD":BUSD,
    "DAI":DAI,
    "UST":UST,
}