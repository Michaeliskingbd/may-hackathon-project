import React from 'react'

const DestinationCard = ({LocationTitle, LocationId}) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex gap-2 items-center'>
        <input type='checkbox' className='text-white w-[30px] h-[20px]' />
        <p className='text-black'>{LocationTitle}</p>
      </div>
      <h3 className='text-black'>{LocationId}</h3>
    </div>
  )
}

export default DestinationCard
