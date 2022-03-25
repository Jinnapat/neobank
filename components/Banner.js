import { SwitchHorizontalIcon,CashIcon,LibraryIcon } from '@heroicons/react/outline'
import Image from "next/image"
import USDC from "../public/icons/crypto/USDC.png"
import USDT from "../public/icons/crypto/USDT.png"
import DAI from "../public/icons/crypto/DAI.png"
import BUSD from "../public/icons/crypto/BUSD.png"
import UST from "../public/icons/crypto/UST.png"

const Banner = () => {
  return (
    <div className='grid grid-cols-1 w-10/12 px-20 place-items-center bg-gray-50 rounded-xl py-10'>
        
        {/* Overview */}
        <div className='grid grid-cols-8 place-content-center'>
            
            <p className='col-span-4 px-4 text-4xl font-bold'>
                Buy-now-pay-later for SMEs powered by Stablecoins
            </p>

            <div className='col-span-4 grid grid-cols-10 w-full place-items-center pl-4'>
                <div className='col-span-4 space-y-4'>
                    <p className='text-gray-500'>Stablecoins Supplier</p>
                    <div className='grid  grid-cols-4'>
                        <Image src={USDT} width={40} height={40} key={1} alt=""/>
                        <Image src={USDC} width={40} height={40} key={2} alt=""/>
                        <Image src={BUSD} width={40} height={40} key={3} alt=""/>
                        <Image src={DAI} width={40} height={40} key={4} alt=""/>
                        <Image src={UST} width={40} height={40} key={5} alt=""/>
                    </div>
                </div>
                
                <SwitchHorizontalIcon className='col-span-1' />

                <div className='col-span-2 space-y-2'>
                    <p className='text-gray-500'>Curlent </p>
                    <LibraryIcon className='text-blue-600' />
                </div>

                <SwitchHorizontalIcon className='col-span-1' />

                <div className='col-span-2 grid grid-cols-1 space-y-2'>
                    <p className='text-gray-500'>SMEs</p>
                    <CashIcon className='text-green-500'/>
                </div>
            </div>
            
        </div>

        {/* Supplier */}
        <div className='grid grid-cols-8 p-10 place-items-start'>
            
            <div className='grid grid-cols-1 place-items-start col-span-4 gap-y-2'>
                <p className='text-4xl font-bold'>Stablecoins Supplier</p>
                <p className='text-gray-500 text-lg'>deposit stablecoins for interest</p>
            </div>

            <div className='col-span-4 text-2xl font-medium'>
                <p>Stablecoins supplier are the people who deposit stablecoins to our platform and they will receive attractive interest.</p>
            </div>

        </div>

        {/* SMEs */}
        <div className='grid grid-cols-8 p-10 place-items-start'>

            <div className='grid grid-cols-1 place-items-start col-span-4 gap-y-2'>
                <p className='text-4xl font-bold'>SMEs</p>
                <p className='text-gray-500 text-lg'>request to access buy-now-pay-later credit</p>
            </div>

            <div className='col-span-4 text-2xl font-medium'>
                <p>SMEs are small and medium enterprises whose use buy-now-pay-later credit to buy the products and services related to their business opertaion and pay us later on deal.</p>
            </div>


        </div>

    </div>
  )
}

export default Banner
