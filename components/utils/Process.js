import Image from "next/image"

const Process = ({processName,processDetail,iconType,icon,image,index}) => {
  return (
  
  <div className='grid grid-cols-8 place-items-center my-10' key={index}>
    
    <div className='col-span-2'>
      {iconType === "image" ? (
        <Image src={image} width={80} height={80} />
      ) : (
        iconType === "icon" && (
          (icon)
        )
      )}
        
    </div>
    <div className='col-span-6 place-self-start'>
        <p className='text-2xl'>{processName}</p>
        <p className='text-gray-500'>{processDetail}</p>
    </div>

  </div>

  )
}

export default Process