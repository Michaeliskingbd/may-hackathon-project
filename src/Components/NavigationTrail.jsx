import React from 'react'
import PageTitle from './PageTitle'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const NavigationTrail = ({title}) => {
  return (
    <div className="flex justify-center mt-3">
  <div className="flex flex-row justify-center items-center text-white border-2 border-white rounded-full w-[230px] py-3 px-4">
    <span className="cursor-pointer hover:underline text-lg">Home</span>
    <MdOutlineKeyboardDoubleArrowRight className="text-2xl mx-2" />
    <span className="cursor-pointer hover:underline  font-semibold text-lg">{title}</span>
  </div>
</div>
  )
}

export default NavigationTrail