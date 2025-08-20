import TourCard from "./Tour"
import cardpics from '../assets/cardpics.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'
import card7 from '../assets/card7.png'
import card8 from '../assets/card8.png'
import card9 from '../assets/card9.png'
const Tourdata = () => {
  return (
    <div>
        <section className="flex p-0 m-0">
             <div className='bg-white grid grid-cols-3 gap-5 px-4 py-2 w-[70%] border-[2px]'>
            <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="BROOKLYN NY"
            cardpics={cardpics} 
            people="50+" 
            duration="10 Days"
            Resorts="Brooklyn Beach Resort Tour"
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            Rating="4.7"
            />
            </article>
    

    <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="CLEVELAND OH"
            cardpics={card2} 
            people="50+" 
            duration="10 Days"
            Resorts="Cleveland Beach Resort Tour"
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            />
            </article>

            <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="SACRAMENTO CA"
            cardpics={card3} 
            people="50+" 
            duration="10 Days"
            Resorts="Brooklyn Beach Resort Tour"
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            />
            </article>

            <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="LONDON UK"
            cardpics={card4} 
            people="50+" 
            duration="10 Days"
            Resorts="London Chumphon Town Tour "
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            />
            </article>

            <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="NORWOOD MA"
            cardpics={card5} 
            people="50+" 
            duration="10 Days"
            Resorts="Places to Visit in Norwood"
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            />
            </article>

            <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="PERTH AU"
            cardpics={card6} 
            people="50+" 
            duration="10 Days"
            Resorts="Perth Beach Resort Tour"
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            />
            </article>

            <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="Brooklyn"
            cardpics={card7} 
            people="50+" 
            duration="10 Days"
            Resorts="Brooklyn Beach Resort Tour"
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            />
            </article>

            <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="Brooklyn"
            cardpics={card8} 
            people="50+" 
            duration="10 Days"
            Resorts="Brooklyn Beach Resort Tour"
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            />
            </article>

            <article className='relative background-white w-[300px] h-[450px] border-[1px] border-black-300 rounded-[12px] overflow-hidden'>
           <TourCard 
           Location="Brooklyn"
            cardpics={card9} 
            people="50+" 
            duration="10 Days"
            Resorts="Brooklyn Beach Resort Tour"
            button="Book Now"
            price="$59.00"
            days="/ Per Day"
            />
            </article>
           </div>
        </section>
    </div>
  )
}

export default Tourdata


