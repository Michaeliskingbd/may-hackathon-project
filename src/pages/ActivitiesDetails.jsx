import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { oshe } from"../assets/location.svg";

const ActivitiesDetails = () => {
  return (
    <section className='pt-20 pb-20'>
        
        <div className='container pl-72 '>
          <div className=' flex justify-between '>
            <div className=''>
              <h3 className='text-3xl '>The Montcalm At Brewery Japan City</h3>
              <ul className='flex gap-5 items-center py-4'>
                <li>(16 Reviews)</li>
                <li className='flex text-red-400'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> </li>
                <li>California</li>
              </ul>
            </div >
            <ul className=''>
                <li className='flex border-[1px] border-[#1CA8CB] justify-center py-3 w-28 h-14 rounded-xl '> <a href='#'> Share</a> <BsShare className='text-[#1CA8CB] my-1 mx-1' /></li>
            </ul>
          </div>
          <hr></hr>
          <div className='container'>
            <div className='flex flex-wrap items-center gap-3'>
                
                <div>
                    <img src={oshe} alt="" />
                <p>okpo</p>
                    
                </div>
                <div>
                    <h6>Location</h6>
                    <span>California</span>
                </div>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default ActivitiesDetails