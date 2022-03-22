import { useEffect, useState } from 'react'
import InfoCard from './InfoCard'

const AccountInfo = ({username,publicAddress,assetsBalance}) => {
    
    const [totalAssetValue, setTotalAssetValue] = useState(0)
    const [totalDeposit, setTotalDeposit] = useState(0)
    const [totalInterest, setTotalInterest] = useState(0)
    const [netAPY, setNetAPY] = useState(0)
    const [showAddress, setShowAddress] = useState(false)

    useEffect(() => {

        let depositSum = assetsBalance?.reduce((total,asset) => {
            return total+asset.deposits
        },0)
        
        let interestSum = assetsBalance?.reduce((total,asset) => {
            return total+asset.interest
        },0)

        let apySum = assetsBalance?.reduce((total,asset) => {
            return total+asset.apy
        },0)

        setTotalAssetValue(depositSum+interestSum);
        setTotalDeposit(depositSum);
        setTotalInterest(interestSum);
        setNetAPY(apySum);    

    }, [publicAddress,assetsBalance])

    let assetInfo = [
        {
            name:"Total Asset Value",
            data:totalAssetValue,
            unit:"USD"
        },
        {
            name:"Total Deposits",
            data:totalDeposit,
            unit:"USD"
        },
        {
            name:"Total Interest",
            data:totalInterest,
            unit:"USD"
        },
        {
            name:"Net APY",
            data:netAPY,
            unit:"%"
        },
    ]
    
    return (
    <div className='border-2 shadow-xl rounded-xl p-6 space-y-3 w-8/12'>
        <p className='text-3xl font-bold place-self-start text-blue-600'>Account info</p>

        {/* Username */}
        <div className='grid grid-cols-12 place-items-start'>
            <p className='col-span-3 place-self-center text-gray-500 text-lg font-medium'>Username</p>
            <p className='col-span-9 font-medium text-xl rounded-full border-2 w-fit px-4 py-2 cursor-pointer transition duration-200 hover:border-blue-500 hover:shadow-lg transform ease-out'>
                {username}
            </p>
        </div>

        {/* Public address */}
        <div className='grid grid-cols-12 place-items-start'>
            <p className='col-span-3 place-self-center text-gray-500 text-lg font-medium'>Public address</p>
            <p className="col-span-9 font-medium text-xl border-2 rounded-full px-4 py-2 mt-2 cursor-pointer transition duration-200 w-fit hover:border-blue-500 hover:shadow-lg transform ease-out"
                onClick={() => setShowAddress(!showAddress)}>
                {showAddress ? (
                    publicAddress
                ) : (
                    publicAddress.slice(0,4)+"..."+publicAddress.slice(-4,)
                )}
            </p>  
        </div>    

        {assetInfo.map((info,index) => <InfoCard data={info.data} name={info.name} unit={info.unit} />)}
        
    </div>
  )
}

export default AccountInfo
