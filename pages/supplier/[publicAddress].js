import Head from 'next/head'
import { useEffect, useState } from 'react'
import Account from '../../components/supplier/desopit/account/Account'
import FilterTab from "../../components/supplier/FilterTab"
import DepositBanner from '../../components/supplier/desopit/DepositBanner'
import SupplyBoard from '../../components/supplier/desopit/dashboard/SupplyBoard'
import { useDispatch, useSelector } from 'react-redux'
import { updateAssets, updateTransactions } from '../../redux/actions/supplierAction'
const config = require("../../next.config")

const Deposit = ({supplierData}) => {
    const [tab, setTab] = useState("dashboard")
    const {publicAddress,username,assets,transactions} = useSelector(state => state.supplier)
    const dispatch = useDispatch();

  
    useEffect(() => {
      console.log(supplierData)
      dispatch(updateAssets(supplierData.accountBalance.assetsBalance))
      dispatch(updateTransactions(supplierData.transactions.transactionsHistory))
    }, [supplierData, dispatch])
  
    console.log(assets,transactions)
    console.log(username)

  return (
    <div className='grid grid-cols-1 place-items-center'>
        <Head>
            <title>Crypto Asset</title>
        </Head>
        
        {/* Top section */}
        <div className='w-full grid grid-cols-1 place-items-center'>
            <DepositBanner />

            <FilterTab setTab={setTab}  />

            {tab === "dashboard" ? (
                <SupplyBoard assetsBalance={assets} />
            ) : ( 
                tab === "account info" && (
                <Account assetsBalance={assets} transactions={transactions} publicAddress={publicAddress} username={username} />
                )
            )}      

        </div>
        
    </div>
  )
}

export default Deposit

// This gets called on every request
export async function getServerSideProps(context) {
  
  let publicAddress = context.params.publicAddress;
  // fetch order data
  const res = await fetch(`${config.domainName}/api/supplier/${publicAddress}`)
  const supplierData = await res.json()
  
  
  return { props: { supplierData} }
}