import BalanceCard from "./BalanceCard"
const AccountBalance = ({assetsBalance}) => {
  return (
    <div className='grid grid-cols-1 place-items-center border-2 shadow-xl rounded-xl p-6 space-y-4 w-full place-self-center mt-10'>
        <p className='text-3xl font-bold place-self-start text-blue-600'>Account Balance on Neobank</p>
        
        {assetsBalance?.map((data,index) => <BalanceCard data={data} index={index} key={index}/>)}
        
    </div>
  )
}

export default AccountBalance