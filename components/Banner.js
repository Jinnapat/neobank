import { SwitchHorizontalIcon,CashIcon,LibraryIcon } from '@heroicons/react/outline'
import Image from "next/image"
import USDC from "../public/icons/crypto/USDC.png"
import USDT from "../public/icons/crypto/USDT.png"
import DAI from "../public/icons/crypto/DAI.png"
import BUSD from "../public/icons/crypto/BUSD.png"
import UST from "../public/icons/crypto/UST.png"

const Banner = () => {
  return (
    <div className='grid grid-cols-1 place-items-center bg-gray-50 rounded-xl p-5 max-w-6xl mt-5 shadow mx-3'>
        
        {/* Overview */}
        <div className='grid grid-cols-8 place-content-center mb-10'>
            
            <p className='col-span-8 px-4 text-4xl font-bold lg:col-span-4 mb-5'>
                Buy-now-pay-later for SMEs powered by Stablecoins
            </p>

            <div className='col-span-8 grid grid-cols-10 w-full place-items-center pl-4 lg:col-span-4'>
                <div className='col-span-4 space-y-4'>
                    <p className='text-gray-500 mb-3'>Stablecoins Supplier</p>
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
        <div className='grid grid-cols-8 p-2 place-items-start mb-10'>
            
            <div className='grid grid-cols-1 place-items-start col-span-8 gap-y-2 lg:col-span-4'>
                <p className='text-4xl font-bold'>Stablecoins Supplier</p>
                <p className='text-gray-500 text-lg'>deposit stablecoins for interest</p>
            </div>

            <div className='col-span-8 text-xl font-medium lg:col-span-4 lg:text-2xl'>
                <p>Stablecoins supplier are the people who deposit stablecoins to our platform and they will receive attractive interest.</p>
            </div>

        </div>

        {/* SMEs */}
        <div className='grid grid-cols-8 p-2 place-items-start'>

            <div className='grid grid-cols-1 place-items-start col-span-8 gap-y-2 lg:col-span-4'>
                <p className='text-4xl font-bold'>SMEs</p>
                <p className='text-gray-500 text-lg text-justify'>request to access buy-now-pay-later credit</p>
            </div>

            <div className='col-span-8 text-xl lg:text-2xl font-medium lg:col-span-4'>
                <p>SMEs are small and medium enterprises whose use buy-now-pay-later credit to buy the products and services related to their business opertaion and pay us later on deal.</p>
            </div>


        </div>

    </div>
  )
}

export default Banner
