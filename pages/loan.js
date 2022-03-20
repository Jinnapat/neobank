import { useState } from "react"
import PaddedInputField from '../components/PaddedInputField'
import { Tab } from "@headlessui/react"
import CircleContainer from "../components/CircleContainer"
import { CheckCircleIcon,ExclamationCircleIcon } from '@heroicons/react/outline'

const MIN_LOAN = 150

const testPendingFundData = [
    {date: "22/02/2565", amount: 500},
    {date: "23/02/2565", amount: 400},
    {date: "24/02/2565", amount: 300},
    {date: "25/02/2565", amount: 200},
    {date: "26/02/2565", amount: 100},
]

const testPendingRepayData = [
    {date: "22/02/2565", amount: 500, due: "22/02/2565"},
    {date: "23/02/2565", amount: 400, due: "22/02/2565"},
    {date: "24/02/2565", amount: 300, due: "22/02/2565"},
    {date: "25/02/2565", amount: 200, due: "22/02/2565"},
    {date: "26/02/2565", amount: 100, due: "22/02/2565"},
]

const testRepaidData = [
    {date: "22/02/2565", amount: 500, close: "22/02/2565"},
    {date: "23/02/2565", amount: 400, close: "22/02/2565"},
    {date: "24/02/2565", amount: 300, close: "22/02/2565"},
    {date: "25/02/2565", amount: 200, close: "22/02/2565"},
    {date: "26/02/2565", amount: 100, close: "22/02/2565"},
]

const LoanCard = ({ prefixes, data}) => {
    return (
        <div className="border-2 rounded-lg shadow mb-3 p-3">
            {prefixes.map(([prefix, field], idx) => {
                return <p key={idx}>{prefix} {data[field]}</p>
            })}
        </div>
    )
}

const PendingFundZone = ({pendingFundData}) => {
    const prefixes = [
        ["Requested Date", "date"], 
        ["Requested amount", "amount"]
    ]

    return (
        <ScrollableBox data={pendingFundData} prefixes={prefixes}/>
    )
}

const PendingRepayZone = ({pendingRepayData}) => {
    const prefixes = [
        ["Granted Date", "date"], 
        ["Granted amount", "amount"],
        ["Due Date", "due"]
    ]

    return (
        <ScrollableBox data={pendingRepayData} prefixes={prefixes}/>
    )
}

const RepayZone = ({repaidData}) => {
    const prefixes = [
        ["Granted Date", "date"], 
        ["Granted amount", "amount"],
        ["Repaid Date", "close"]
    ]

    return (
        <ScrollableBox data={repaidData} prefixes={prefixes}/>
    )
}

const ScrollableBox = ({data, prefixes}) => {
    return (
        <div className="p-2 border-2 rounded overflow-y-auto h-80">
            {data.map((raw, idx)=>{
                return <LoanCard key={idx} data={raw} prefixes={prefixes}/>
            })}
        </div>
    )
}

const LoanPage = () => {
    const [amount, setAmount] = useState(0)

    const getDisplayTabClassNames = ({selected}) => {
        return (
            "w-full py-2.5 text-sm leading-5 font-medium rounded-lg " +
            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 " +
            (selected ? 'bg-blue-600 shadow text-white' : 'text-black hover:bg-white/[0.12] hover:text-blue-800')
        )
    }

    const verifyLoanAmount = (askedAmount) => {
        return askedAmount >= MIN_LOAN
    }

    return (
        <div className="border-2 flex flex-col max-w-lg mx-auto space-y-3 px-7 py-5 rounded-lg mt-3">
            <h1 className="font-bold">Dashboard</h1>
            <div className="justify-evenly flex space-y-2">
                <CircleContainer value={amount} title="Total Loan" color="black"/>
                <CircleContainer value={amount} title="Total Fund Recieved" color="black"/>
                <CircleContainer value={amount} title="Total" color="red-500"/>
            </div>
            
            
            <div>
                {verifyLoanAmount(amount) ? 
                    <CheckCircleIcon className='h-6 text-green-500' />
                    : 
                    (<div className="flex space-x-2">
                        <ExclamationCircleIcon className='h-6 text-red-500' />
                        <p>minimal is {MIN_LOAN} USD</p>
                    </div>)
                }
            </div>
            <PaddedInputField type="number" placeholder="amount" setter={setAmount} value={amount}/>
            <button className="bg-blue-600 p-2 rounded-sm text-white">Submit</button>

            <Tab.Group>
                <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                    <Tab className={getDisplayTabClassNames}>
                        Requested
                    </Tab>
                    <Tab className={getDisplayTabClassNames}>
                        Pending Repay
                    </Tab>
                    <Tab className={getDisplayTabClassNames}>
                        Repayed
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <PendingFundZone pendingFundData={testPendingFundData}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <PendingRepayZone pendingRepayData={testPendingRepayData}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <RepayZone repaidData={testRepaidData}/>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}


export default LoanPage