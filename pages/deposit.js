import Head from 'next/head'
import React, { useState } from 'react'
import Dashboard from '../components/supplier/desopit/dashboard/Dashboard'
import Info from '../components/supplier/desopit/Info'
import FilterTab from "../components/supplier/FilterTab"
import DepositBanner from '../components/supplier/desopit/DepositBanner'

const Deposit = () => {
    const [tab, setTab] = useState("dashboard")
    

  return (
    <div className='grid grid-cols-1 place-items-center'>
        <Head>
            <title>Dashboard</title>
        </Head>
        
        {/* Top section */}
        <div className='w-full grid grid-cols-1 place-items-center'>
            <DepositBanner />

            <FilterTab setTab={setTab}  />

            {tab === "dashboard" ? (
                <Dashboard />
            ) : ( 
                tab === "info" && (
                <Info />
                )
            )}      

            <div className=''>

            </div>
        </div>
        
    </div>
  )
}

export default Deposit