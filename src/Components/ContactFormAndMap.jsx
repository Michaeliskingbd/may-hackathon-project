import React from 'react'

const ContactFormAndMap = () => {
  return (
    <section className='lg:flex flex-row mt-32 justify-center'>
      < div className='bg-[#113d48] min-h-[700px] flex-1 px-4 py-24'>
            <form className='flex flex-col justify-center space-y-5 lg:px-20 lg:w-[80%] lg:float-right'>
                <p className='text-white'>Contact us</p>
            <h1 className='text-white text-4xl font-bold pb-5'>Send Message Anytime</h1>
           <div className="flex flex-row space-x-4">
  <div className="flex justify-center items-center border border-gray-400 rounded-2xl w-[350px] h-[50px] flex-1">
    <input
      className="outline-none w-full h-full bg-transparent text-white placeholder-white px-2"
      type="text"
      placeholder="Your Name"
    />
  </div>

  <div className="flex justify-center items-center border border-gray-400 rounded-2xl w-[350px] h-[50px] flex-1">
    <input
      className="outline-none w-full h-full text-white bg-transparent placeholder-white px-2"
      type="email"
      placeholder="Your Email"/>
  </div>
</div>
            <div className="flex justify-center border-2 border-gray-500 rounded-2xl w-full h-[70px]">
                <input className="outline-none w-full bg-transparent text-white placeholder-white px-2" type='text' placeholder='Your Subject'/></div>
           <div className='flex justify-center border-2 border-gray-500 w-full h-[20vh] rounded-2xl'>
            <textarea className='bg-transparent text-left text-white outline-none pt-3 w-full placeholder-white pl-2' placeholder='Your Message'/></div>
            <button className='border-2 border-[#198daa] w-full rounded-2xl p-5 text-white'>Submit Message</button>
            </form>
            </div>
        <div className="w-full h-[800px] flex-1">
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.349629432014!2d3.915263!3d7.406827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d78b798abc5%3A0x9d0cfaa314f6d30!2sBodija%20Estate%2C%20Ibadan%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
        className="w-full h-[800px] border-0 rounded-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </section>
  )
}

export default ContactFormAndMap