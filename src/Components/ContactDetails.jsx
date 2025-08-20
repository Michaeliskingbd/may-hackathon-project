import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { LuMailPlus } from 'react-icons/lu'
import { MdAddCall } from 'react-icons/md'

const ContactDetails = () => {
  return (
   <section className="bg-white flex justify-center items-center mt-20 px-3">
  <div className="bg-white flex flex-col justify-center items-center md:flex-row lg:flex-row gap-5 w-full max-w-6xl">

    <div className="bg-[#f7f7f7] flex flex-col justify-center items-center w-full max-w-sm h-[300px] rounded-lg shadow-md text-center hover:bg-[#1ca8cb] p-5">
      <div className="border border-gray-500 rounded-lg p-6 sm:p-8 md:p-12">
        <IoLocationSharp className="text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Our Address</h1>
        <p className="text-lg">
          16A Soun Ajagungbade Ave, New Bodija Estate Ibadan
        </p>
      </div>
    </div>

    <div className="bg-[#1ca8cb] justify-center flex flex-col text-white items-center w-full max-w-sm h-[300px] rounded-lg shadow-md text-center p-5">
      <div className="border border-white rounded-lg p-6 md:p-12">
        <LuMailPlus className="text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">info@maycohort.com</h1>
        <p className="text-lg">
          Email us anytime for inquiries on your travel Plans.
        </p>
      </div>
    </div>

    <div className="bg-[#f7f7f7] flex flex-col justify-center items-center w-full max-w-sm h-[300px] rounded-lg shadow-md text-center hover:bg-[#1ca8cb] p-5">
      <div className="border border-gray-500 rounded-lg p-6 sm:p-8 md:p-12">
        <MdAddCall className="text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Hot:081-6379-1552</h1>
        <p className="text-lg">
          Call us any kind suppor,we will wait for it.
        </p>
      </div>
    </div>

  </div>
</section>


  )
}

export default ContactDetails