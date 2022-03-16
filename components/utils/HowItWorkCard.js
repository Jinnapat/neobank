import Process from "./Process"

const HowItWorkCard = ({cardName,cardDescription,processes}) => {
  return (
    <div className='grid grid-cols-1 place-items-start w-full mt-6 border-2 p-4 rounded-xl shadow-xl'>
        <p className='text-2xl font-medium grid grid-cols-1'>
            {cardName}
            <span className='text-gray-500 text-base mt-1'>{cardDescription}</span>
        </p>
        <div className='flex-col mt-4'>
            {processes.map((process,index) => (
                <Process processName={process.processName} processDetail={process.processDetail}
                iconType={process.iconType} icon={process.icon} image={process.image} index={index} />    
            )) }
        </div>
    </div>
  )
}

export default HowItWorkCard