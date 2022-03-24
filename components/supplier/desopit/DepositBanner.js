import USDT from "../../../public/icons/crypto/USDT.png"
import USDC from "../../../public/icons/crypto/USDC.png"
import DAI from "../../../public/icons/crypto/DAI.png"
import BUSD from "../../../public/icons/crypto/BUSD.png"
import UST from "../../../public/icons/crypto/UST.png"
import { SwitchHorizontalIcon,LibraryIcon,CashIcon } from "@heroicons/react/outline"
import Image from "next/image"

const DepositBanner = () => {
  return (
    <div className='grid-cols-1 place-items-center px-10 space-y-4 py-4 bg-gray-50 w-8/12'>
        {/* Header */}
        <h1 className="text-4xl font-bold">Deposit Stablecoins</h1>

        {/* Description */}
        <p className="text-2xl font-medium">
            Deposit your stablecoins to liquidity pool of Neobank and you will get interest and special benefit to get award.
        </p>    

        {/* Image, Icon */}
        <div className='grid grid-cols-10 w-full place-items-center pl-4 '>
                <div className='col-span-4 space-y-4'>
                    <p className='text-gray-500'>Stablecoins Supplier</p>
                    <div className='grid  grid-cols-4'>
                        <Image src={USDT} width={40} height={40} alt=""/>
                        <Image src={USDC} width={40} height={40} alt=""/>
                        <Image src={BUSD} width={40} height={40} alt=""/>
                        <Image src={DAI} width={40} height={40} alt=""/>
                        <Image src={UST} width={40} height={40} alt=""/>
                    </div>
                </div>
                
                <SwitchHorizontalIcon className='col-span-1 h-12' />

                <div className='col-span-2 space-y-2'>
                    <p className='text-gray-500'>Neobank </p>
                    <LibraryIcon className='text-blue-600' />
                </div>
                
            </div>
        
    </div>
  )
}

export default DepositBanner