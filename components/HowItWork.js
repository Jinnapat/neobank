import MetaMask from "../public/image/metamask.png"
import { DatabaseIcon } from '@heroicons/react/solid'
import { CreditCardIcon,CashIcon, CheckCircleIcon, ClipboardCheckIcon, ClipboardListIcon, ClockIcon, LoginIcon,PencilAltIcon } from '@heroicons/react/outline'
import HowItWorkCard from './utils/HowItWorkCard'

const HowItWork = () => {
  return (
    <div className='grid grid-cols-1 w-10/12 lg:w-8/12 px-20 place-items-center mt-10'>
        
        <div className='grid grid-cols-1 place-self-start'>
            <p className='text-4xl font-bold'>How it work</p>
            <p className='text-gray-500 text-lg'>How to use our platform for Stablecoins Supplier and SMEs.</p>
        </div>

        {/* Stablecoins Supplier */}
        <HowItWorkCard 
            cardName="Stablecoins Supplier"
            cardDescription="Cryptocurrency supplier"
            processes={supplierProcesses}
        />


        {/* SMEs */}
        <HowItWorkCard 
            cardName="SMEs"
            cardDescription="Small and Medium Enerprises"
            processes={smeProcesses}
        />

    </div>
  )
}

export default HowItWork

let supplierProcesses = [
    {
        processName:"Connect wallet",
        processDetail:"Connect your crypto wallet to our platform to sign your transaction",
        iconType:"image",
        image:MetaMask,
        icon:"",
    },
    {
        processName:"Deposit Stablecoins",
        processDetail:"Read term and condition for your interest and Deposit your stablecoins to Curlent digital bank.",
        iconType:"icon",
        image:"",
        icon:<DatabaseIcon className='h-14 text-amber-400 col-span-2' />,
    },
    {
        processName:"Check Account Info",
        processDetail:"Check your account info after deposit to get information about your saving,interest and transaction.",
        iconType:"icon",
        image:"",
        icon:<ClipboardCheckIcon className='h-14 text-green-500 col-span-2 ' />,
    },
]

let smeProcesses = [
    {
        processName:"Signup",
        processDetail:"Signup your new account to use Curlent.",
        iconType:"icon",
        image:"",
        icon:<ClipboardListIcon className='h-14 text-amber-500 ' />,
    },
    {
        processName:"Signin",
        processDetail:"Signin into Curlent to get access to buy-now-pay-later services for SMEs.",
        iconType:"icon",
        image:"",
        icon:<LoginIcon className='h-14 text-blue-600 col-span-2' />,
    },
    {
        processName:"Verify",
        processDetail:"Verify your own business by KYC and prove of your business information to give us your business insight for consideration about your credit request.",
        iconType:"icon",
        image:"",
        icon:<CheckCircleIcon className='h-12 text-green-500 col-span-2 ' />,
    },
    {
        processName:"Request credit",
        processDetail:"Request to receive credit from Curlent as you need for your business operation we will consider your credit limit.",
        iconType:"icon",
        image:"",
        icon:<PencilAltIcon className='h-12 text-violet-500 col-span-2 ' />,
    },
    {
        processName:"Check approval",
        processDetail:"Check your approval if you get approved for your credit,check your credit details on your SME dashboard.",
        iconType:"icon",
        image:"",
        icon:<ClipboardCheckIcon className='h-12 text-green-500 col-span-2 ' />,
    },
    {
        processName:"Spend your credit with our merchant partners.",
        processDetail:"Spend your buy-now-pay-later credit to buy products and services with our merchant partners without pay your money at the Point of Sale.",
        iconType:"icon",
        image:"",
        icon:<CreditCardIcon className='h-12 text-blue-500 col-span-2 ' />,
    },
    {
        processName:"Repay your credit as deal with us.",
        processDetail:"Repay your money to Curlent equal to credit you use plus services charge that deal with Curlent on conditions.",
        iconType:"icon",
        image:"",
        icon:<CashIcon className='h-12 text-amber-500 col-span-2 ' />,
    },

]