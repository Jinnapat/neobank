import { useEffect, useState } from "react"
import TransactionCard from "./TransactionCard"
import TransactionFilter from "./TransactionFilterTab"

const AccountTransaction = ({transactions}) => {
  const [tab, setTab] = useState("all")
  const [deposits, setDeposits] = useState([])
  const [withdrawal, setWithdrawal] = useState([])

  useEffect(() => {
    let findDeposits = transactions.filter(data => data.transaction === "deposit")
    let findWithdrawal = transactions.filter(data => data.transaction === "withdraw")

    setDeposits(findDeposits);
    setWithdrawal(findWithdrawal);

  }, [transactions])
  

  return (
    <div className='grid grid-cols-1 border-2 shadow-xl rounded-xl p-6 space-y-4 w-full place-self-center mt-10'>
      
      <p className='text-3xl font-bold place-self-start text-blue-600'>Transaction on Nebank</p>
      
      <TransactionFilter setTab={setTab} />

      {tab === "all" && (transactions.slice().reverse().map((data,index) => <TransactionCard data={data} index={index} />))}
      
      {tab === "deposit" && (deposits.slice().reverse().map((data,index) => <TransactionCard data={data} index={index} />))}
      
      {tab === "withdraw" && (withdrawal.slice().reverse().map((data,index) => <TransactionCard data={data} index={index} />))}


    </div>
  )
}

export default AccountTransaction