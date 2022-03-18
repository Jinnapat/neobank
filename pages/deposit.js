import Head from 'next/head'
import { useState } from 'react'
import Account from '../components/supplier/desopit/account/Account'
import FilterTab from "../components/supplier/FilterTab"
import DepositBanner from '../components/supplier/desopit/DepositBanner'
import SupplyBoard from '../components/supplier/desopit/dashboard/SupplyBoard'

const Deposit = () => {
    const [tab, setTab] = useState("dashboard")
    let accountInfo = {
        username:"Gognumbdev",
        publicAddress:"0x5593572e312C4F8Fc2fe924907624B39D1d6B65c",
        assetData:accountAssetData,
    }

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
                <SupplyBoard accountAssetData={accountAssetData} />
            ) : ( 
                tab === "account info" && (
                <Account accountInfo={accountInfo} transactionData={transactionData} />
                )
            )}      

            <div className=''>

            </div>
        </div>
        
    </div>
  )
}

export default Deposit

let accountAssetData = [
    {
      asset:"USDT",
      apy:1.59,
      deposits:100.52,
      interest:1.5982,
      balance:0.0018
    },
    {
      asset:"USDC",
      apy:2.02,
      deposits:50.15,
      interest:1.01303,
      balance:10.48
    },
    {
      asset:"BUSD",
      apy:1.805,
      deposits:80.46,
      interest:1.4523,
      balance:0.00
    },
    {
      asset:"DAI",
      apy:2.55,
      deposits:40.02,
      interest:1.02051,
      balance:1.234
    },
    {
      asset:"UST",
      apy:5.13,
      deposits:200,
      interest:10.26,
      balance:0.00
    }
  ]

  let transactionData = [
    //   Deposits
      {
        transactionNumber:1647569216177,
        asset:"USDT",
        transaction:"deposit",
        amount:100.52,
        date:'Fri Mar 18 2022 09:06:56 GMT+0700 (Indochina Time)',
      },
      {
        transactionNumber:1647569467429,
        asset:"USDC",
        transaction:"deposit",
        amount:50.15,
        date:'Fri Mar 18 2022 09:11:07 GMT+0700 (Indochina Time)'
      },
      {
        transactionNumber:1647569591539,
        asset:"BUSD",
        transaction:"deposit",
        amount:80.46,
        date:'Fri Mar 18 2022 09:13:11 GMT+0700 (Indochina Time)'
      },
      {
        transactionNumber:1647569705808,
        asset:"DAI",
        amount:40.02,
        transaction:"deposit",
        date:'Fri Mar 18 2022 09:15:05 GMT+0700 (Indochina Time)'
      },
      {
        transactionNumber:1647569742330,
        asset:"UST",
        amount:200,
        transaction:"deposit",
        date:'Fri Mar 18 2022 09:15:42 GMT+0700 (Indochina Time)'
      },
    //   Withdrawal
    {
        transactionNumber:1647569216177,
        asset:"USDT",
        transaction:"withdraw",
        amount:100.52,
        date:'Fri Mar 18 2022 09:06:56 GMT+0700 (Indochina Time)',
      },
      {
        transactionNumber:1647569467429,
        asset:"USDC",
        transaction:"withdraw",
        amount:50.15,
        date:'Fri Mar 18 2022 09:11:07 GMT+0700 (Indochina Time)'
      },
      {
        transactionNumber:1647569591539,
        asset:"BUSD",
        transaction:"withdraw",
        amount:80.46,
        date:'Fri Mar 18 2022 09:13:11 GMT+0700 (Indochina Time)'
      },
      {
        transactionNumber:1647569705808,
        asset:"DAI",
        amount:40.02,
        transaction:"withdraw",
        date:'Fri Mar 18 2022 09:15:05 GMT+0700 (Indochina Time)'
      },
      {
        transactionNumber:1647569742330,
        asset:"UST",
        amount:200,
        transaction:"withdraw",
        date:'Fri Mar 18 2022 09:15:42 GMT+0700 (Indochina Time)'
      }

  ]