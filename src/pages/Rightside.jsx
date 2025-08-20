import DestinationCard from "./DestinationCard"

function RightCards() {
  return (
    <div>
      <div className='w-[30%] border-[2px] items-center px-2'>
        <article className='border-[1px]  border-black-600 rounded-[12px] w-[400px] h-[450px] px-8 overflow-hidden'>
            <h1 className='text-2xl text-black-800  px-4 py-4 '>Destination Category</h1>
     
             <div className=" flex-col px-4 py-2">
    <DestinationCard 
    LocationTitle="Europe"
    LocationId="04"
    />
    <DestinationCard
    LocationTitle="France"
    LocationId="04"
    />
    <DestinationCard
    LocationTitle="Denmark"
    LocationId="05"
    />

   
    <hr className="border-t  border-black-600 mt-4" />
  </div>

</article>
  
     </div>
    </div>
  )
}

export default RightCards
