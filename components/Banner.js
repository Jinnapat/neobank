import React from 'react'
import { SwitchHorizontalIcon,CashIcon,LibraryIcon } from '@heroicons/react/outline'
import Image from "next/image"
import USDC from "../public/icons/crypto/USDC.png"
import USDT from "../public/icons/crypto/USDT.png"
import DAI from "../public/icons/crypto/DAI.png"
import BUSD from "../public/icons/crypto/BUSD.png"
import UST from "../public/icons/crypto/UST.png"

const Banner = () => {
  return (
    <div className='grid grid-cols-1 w-8/12 px-20 place-items-center mt-10'>
        <div className='grid grid-cols-8 place-content-center'>
            
            <p className='col-span-4 px-4 text-4xl font-bold'>
                Supply Stablecoins from anywhere in the world and Request loan on local currency
            </p>

            <div className='col-span-4 grid grid-cols-10 w-full place-items-center pl-4'>
                <div className='col-span-4 space-y-4'>
                    <p className='text-gray-500'>Stablecoins Supplier</p>
                    <div className=''>
                        <Image src={USDT} width={40} height={40} />
                        <Image src={USDC} width={40} height={40} />
                        <Image src={BUSD} width={40} height={40} />
                        <Image src={DAI} width={40} height={40} />
                        <Image src={UST} width={40} height={40} />
                    </div>
                </div>
                
                <SwitchHorizontalIcon className='col-span-1' />

                <div className='col-span-2 space-y-2'>
                    <p className='text-gray-500'>Neobank </p>
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
                <p>Cryptocurrency supplier are the people who deposit cryptocurrency to our platform and they will get interest.</p>
            </div>

        </div>

        {/* SMEs */}
        <div className='grid grid-cols-8 p-10 place-items-start'>

            <div className='grid grid-cols-1 place-items-start col-span-4 gap-y-2'>
                <p className='text-4xl font-bold'>SMEs</p>
                <p className='text-gray-500 text-lg'>request to access finance</p>
            </div>

            <div className='col-span-4 text-2xl font-medium'>
                <p>SMEs are the samll and medium enterprise whose operate their own business on emerging economy such as Thailand,Indonesia,Philippines,Vietnam.</p>
            </div>


        </div>

    </div>
  )
}

export default Banner