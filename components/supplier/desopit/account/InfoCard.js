const InfoCard = ({name,data,unit}) => {
  return (
    <div className='grid grid-cols-12 place-items-start'>
        <p className='col-span-3 place-self-center text-gray-500 text-lg font-medium'>{name}</p>
        <p className='col-span-9 font-medium text-xl rounded-full border-2 w-fit px-4 py-2 cursor-pointer transition duration-150 hover:border-blue-500 hover:shadow-lg transform ease-out'>
            {data.toFixed(2)} {unit}
        </p>
    </div>
  )
}

export default InfoCard