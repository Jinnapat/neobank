import AccountBalance from "./AccountBalance"
import AccountInfo from "./AccountInfo"
import AccountTransaction from "./AccountTransaction"

const Account = ({accountInfo,transactionData,publicAddress,username}) => {
  let {assetData} = accountInfo

  
  return (
    <div className='grid grid-cols-1 place-items-start w-8/12 p-10'>

      <AccountInfo username={username} publicAddress={publicAddress} assetData={assetData} />
      
      <AccountBalance assetData={assetData} />
      
      <AccountTransaction transactionData={transactionData} />
      
    </div>
  )
}

export default Account