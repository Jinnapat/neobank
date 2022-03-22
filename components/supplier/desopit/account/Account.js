import AccountBalance from "./AccountBalance"
import AccountInfo from "./AccountInfo"
import AccountTransaction from "./AccountTransaction"

const Account = ({assetsBalance,transactions,publicAddress,username}) => {

  
  return (
    <div className='grid grid-cols-1 place-items-start w-8/12 p-10'>

      <AccountInfo username={username} publicAddress={publicAddress} assetsBalance={assetsBalance}  />
      
      <AccountBalance assetsBalance={assetsBalance} />
      
      <AccountTransaction transactions={transactions} />
      
    </div>
  )
}

export default Account