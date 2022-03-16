import React from 'react'
import MetaMask from "../public/image/metamask.png"
import Image from "next/image"
import { DatabaseIcon } from '@heroicons/react/solid'
import { CashIcon, CheckCircleIcon, ClipboardCheckIcon, ClipboardListIcon, ClockIcon, LoginIcon,PencilAltIcon } from '@heroicons/react/outline'

const HowItWork = () => {
  return (
    <div className='grid grid-cols-1 w-8/12 px-20 place-items-center mt-10'>
        
        <div className='grid grid-cols-1 place-self-start'>
            <p className='text-4xl font-bold'>How it work</p>
            <p className='text-gray-500 text-lg'>How to use our platform for Stablecoins Supplier and SMEs.</p>
        </div>

        {/* Stablecoins Supplier */}
        <div className='grid grid-cols-1 place-items-start w-full mt-6'>
            <p className='text-2xl font-medium grid grid-cols-1'>
                Stablecoins Supplier
                <span className='text-gray-500 text-base'>( Cryptocurrency supplier )</span>
            </p>
            <div className='flex-col mt-4'>

                {/* Connect */}
                <div className='grid grid-cols-8 place-items-center '>
                    <div className='col-span-2'>
                        <Image src={MetaMask} width={80} height={80} />
                    </div>
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Connect wallet</p>
                        <p className='text-gray-500'>Connect your crypto wallet to our platform to sign your transaction</p>
                    </div>
                    
                </div>

                {/* Deposit */}
                <div className='grid grid-cols-8 place-items-center mb-10 mt-4'>
                    <DatabaseIcon className='h-14 text-amber-400 col-span-2 ' />
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Deposit Stablecoins</p>
                        <p className='text-gray-500'>Read term and condition for your interest and Deposit your stablecoins to platform liquidity pool.</p>
                    </div>
                </div>

                {/* Check account */}
                <div className='grid grid-cols-8 place-items-center my-10'>
                    <ClipboardCheckIcon className='h-14 text-green-500 col-span-2 ' />
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Check Account Balance</p>
                        <p className='text-gray-500'>Check your account balance after deposit to get information about your saving,interest and transaction.</p>
                    </div>
                </div>

            </div>
        </div>

        {/* SMEs */}
        <div className='grid grid-cols-1 place-items-start w-full mt-6'>
            <p className='text-2xl font-medium grid grid-cols-1'>
                <span>SMEs</span>
                <span className='text-gray-500 text-base'>( Small and Medium Enterpreise )</span>
            </p>
            <div className='flex-col mt-4'>

                {/* Signin */}
                <div className='grid grid-cols-8 place-items-center '>
                    <div className='col-span-2'>
                        <ClipboardListIcon className='h-14 text-amber-500 ' />
                    </div>
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Signup</p>
                        <p className='text-gray-500'>Signup your new account to use Neobank.</p>
                    </div>
                    
                </div>

                {/* Signup */}
                <div className='grid grid-cols-8 place-items-center my-4'>
                    <LoginIcon className='h-14 text-blue-600 col-span-2' />
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Signin</p>
                        <p className='text-gray-500'>Signin into Neobank to get access to new financial services for SMEs.</p>
                    </div>
                </div>

                {/* Verify */}
                <div className='grid grid-cols-8 place-items-center my-4'>
                    <CheckCircleIcon className='h-12 text-green-500 col-span-2 ' />
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Verify</p>
                        <p className='text-gray-500'>Verify your own business by KYC and prove of your business information to
                         give us your business insight for consideration about your loan request.</p>
                    </div>
                </div>

                {/* Request loan */}
                <div className='grid grid-cols-8 place-items-center my-4'>
                    <PencilAltIcon className='h-12 text-violet-500 col-span-2 ' />
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Request loan</p>
                        <p className='text-gray-500'>Request to get loan from Neobank as you need for your project.</p>
                    </div>
                </div>

                {/* Waiting*/}
                <div className='grid grid-cols-8 place-items-center my-4'>
                    <ClockIcon className='h-12 text-blue-700 col-span-2 ' />
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Waiting for approval</p>
                        <p className='text-gray-500'>Waiting for approval from Neobank,this phase is consideration.</p>
                    </div>
                </div>

                {/* Get Approval*/}
                <div className='grid grid-cols-8 place-items-center my-4'>
                    <ClipboardCheckIcon className='h-12 text-green-500 col-span-2 ' />
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Get approval</p>
                        <p className='text-gray-500'>Check your approval if you get approved for your loan,check your credit details on your SME profile info.</p>
                    </div>
                </div>

                {/* Repayment*/}
                <div className='grid grid-cols-8 place-items-center my-4'>
                    <CashIcon className='h-12 text-amber-500 col-span-2 ' />
                    <div className='col-span-6 place-self-start'>
                        <p className='text-2xl'>Repay your loan with interest</p>
                        <p className='text-gray-500'>Verify your own business by KYC and prove of your business information to
                         give us your business insight for consideration about your loan request.</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default HowItWork