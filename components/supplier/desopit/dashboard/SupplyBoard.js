import HeaderBoard from "./board/HeaderBoard"
import UserAssetInfo from "./board/UserAssetInfo"

const SupplyBoard = () => {
  return (
    <div className='grid grid-cols-1 place-items-start gap-y-4'>
      <p className='text-2xl font-bold ml-8'>Supply Assets</p>
        
        <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {boardHeaderNames.map(name => 
                      <HeaderBoard headerName={name} />
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {boardAssetData.map((assetInfo,index) => (
                    <UserAssetInfo assetInfo={assetInfo} index={index} />
                  )) }
                </tbody>
              </table>
    </div>
  )
}

export default SupplyBoard

let boardHeaderNames = ["Asset","APY","Deposits","Interest","Balance"]

let boardAssetData = [
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