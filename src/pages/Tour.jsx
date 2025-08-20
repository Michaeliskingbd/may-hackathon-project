import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { CiLocationOn } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { CiClock2 } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import {FaArrowRight } from 'react-icons/fa'
import {FaArrowLeft } from 'react-icons/fa'




export default function TourCard({ Location,cardpics,people,days,Resorts,button,duration, price, Rating }) {
    return(
         <div> 
         <section>
    <div>
    <article>
    <div>
        <div className='bg-black text-white rounded-lg absolute flex justify-center p-2 right-[14px] top-[10px]'>
       <CiHeart className='flex items-center text-2xl'/>
        </div>
       <img className='w-[300px] h-[240px] object-cover rounded-[10px]  ' src={cardpics} alt=" cards" />
    </div>

    <div className='flex justify-between items-center px-4 py-4'>
    <div className='flex gap-1 items-center'>
       <p className='text-black'><CiLocationOn /> </p>
       <h3 className='text-black text-[10px]'>{Location}</h3>
    </div>

    <div className='flex bg-[#1CA8CB] text-white gap-3 w-[100px] h-[30px] justify-center items-center rounded-[20px]'>
    <p className='text-[#58d2f0d4]'><FaStar /></p>
    <h3>{Rating}</h3>
    </div>
    </div>

    <div>
    <h3 className='text-black text-[20px] flex justify-center '> {Resorts}</h3>

    <div className='flex gap-[30px] items-center px-4 py-4'>
        <div className='flex gap-2  items-center'>
            <p className='text-[#1CA8CB] '><CiClock2 /></p>
            <h3 className='text-black text-[12px] '>{duration}</h3>
        </div>
        <div className='flex gap-2 text-white items-center'>
            <p className='text-[#1CA8CB]'><CiUser /></p>
            <h3 className='text-[12px] text-black'> {people}</h3>
        </div>
    </div>
    </div>

    <div className="border-[1px] border-dashed border-[#33bee1b3]"></div>

      <div className='flex gap-[20px] items-center p- px-4 py-4'>
    <div className='flex gap-1 items-center'>
       <p className='text-black text-[15px]'> {price}</p>
       <h3 className='text-black text-[12px]'>{days}</h3>
    </div>

    <div className='flex  justify-center items-center'>
        
      <button className=' bg-[#1ca8cb70] text-[#1CA8CB] w-[140px] h-[35px] rounded-[20px]'>{button}</button>
      <p className='absolute text-[#29c9f1eb] text-[13px] right-[33px]'><FaArrowRight /></p>
    </div>

    </div>
    </article>
    </div>
</section>
  
    </div>
  )
}


