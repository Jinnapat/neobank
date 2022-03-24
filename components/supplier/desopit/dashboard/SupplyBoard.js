import HeaderBoard from "./board/HeaderBoard"
import UserAssetInfo from "./board/UserAssetInfo"

const SupplyBoard = ({assetsBalance}) => {
  
  return (
    <div className='grid grid-cols-1 place-items-start gap-y-4 w-8/12'>
      <p className='text-2xl font-bold ml-8'>Supply Assets</p>
        
        <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {boardHeaderNames.map((name, index) => 
                      <HeaderBoard headerName={name} key={index}/>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* {accountAssetData.map((assetInfo,index) => (
                    <UserAssetInfo assetInfo={assetInfo} index={index} />
                  )) } */}

                  {/* real */}
                  {assetsBalance?.map((assetInfo,index) => (
                    <UserAssetInfo assetInfo={assetInfo} index={index} key={index}/>
                  )) }

                </tbody>
              </table>
    </div>
  )
}

export default SupplyBoard

let boardHeaderNames = ["Asset","APY","Deposits","Interest","Services"]