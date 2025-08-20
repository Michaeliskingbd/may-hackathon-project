import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <section className="relative bg-[url('https://turmet-react.vercel.app/assets/img/footer/footer-bg.jpg')] min-h-[50vh] text-white flex flex-col items-center justify-center text-center bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-0"></div>

      <div className="flex flex-col lg:flex-row gap-7 space-x-7 relative z-10">
        <div className="bg-[#242625] h-[500px] pt-24 flex flex-col">
          logo
          <form className="flex flex-col justify-center space-y-3 lg:px-20">
            <h1 className="text-white text-3xl font-bold">Subscribe Newsletter</h1>
            <p className="text-white">Get Our Latest Deals and Update</p>
            <div className="flex flex-row space-x-4">
              <div className="flex justify-center items-center border border-gray-400 rounded-2xl w-[350px] h-[50px] flex-1">
                <input
                  className="outline-none w-full h-full bg-transparent text-white placeholder-white px-2"
                  type="email"
                  placeholder="Your Email Address"
                />
              </div>
            </div>
            <button className="bg-[#1ca8cb] border-2 border-[#198daa] w-full rounded-2xl p-5 text-white font-bold">
              Subscribe
            </button>
          </form>
          <div className="flex flex-row justify-center space-x-5 p-7 items-center">
            <div className="bg-white flex items-center justify-center rounded-full w-10 h-10">
              <FaFacebook className="text-lg text-[#1ca8cb]" />
            </div>
            <div className="bg-white flex items-center justify-center rounded-full w-10 h-10">
              <FaXTwitter className="text-lg text-[#1ca8cb]" />
            </div>
            <div className="bg-white flex items-center justify-center rounded-full w-10 h-10">
              <FaLinkedin className="text-lg text-[#1ca8cb]" />
            </div>
            <div className="bg-white flex items-center justify-center rounded-full w-10 h-10">
              <FaInstagram className="text-lg text-[#1ca8cb]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:pt-24">
          <div className="w-full sm:flex sm:flex-col lg:flex-row gap-10 justify-start">
          <div className='pb-5'>
            <div className="pb-5">
              <h1 className="text-3xl text-white text-left font-bold">Quick Links</h1>
              <hr className="border-t-4 border-[#1ca8cb] w-[150px]" />
            </div>
            <ul className="text-left text-lg text-white space-y-5">
              <li>Home</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Services</li>
              <li>Tour</li>
            </ul>
          </div>

          
  <div className='pb-5'>
    <div className="pb-5">
      <h1 className="text-3xl text-white text-left font-bold">Services</h1>
      <hr className="border-t-4 border-[#1ca8cb] w-[150px]" />
    </div>
    <ul className="text-left text-lg text-white space-y-5">
      <li>Wanderlust Adventures</li>
      <li>Globe Trotters Travel</li>
      <li>Odyssey Travel Services</li>
      <li>Jet Set Journeys</li>
      <li>Dream Destinations Travel</li>
    </ul>
  </div>

          <div className="lg:px-10">
            <div className="pb-5">
              <h1 className="text-3xl text-left text-white font-bold">Contact Us</h1>
              <hr className="border-t-4 border-[#1ca8cb] w-[150px]" />
            </div>
            <ul className="text-left text-lg text-white space-y-5">
              <li className="flex items-center gap-3">
                <div className="bg-[#1ca8cb] w-10 h-10 flex items-center justify-center rounded-xl shadow-md">
                  <IoLocationSharp className="text-white text-xl" />
                </div>
                <span>
                  16A Soun Ajagungbade Ave, <br /> New Bodija Estate Ibadan
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-[#1ca8cb] w-10 h-10 flex items-center justify-center rounded-xl shadow-md">
                  <MdEmail className="text-white text-xl" />
                </div>
                <span>info@appclickmaycohort.com</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-[#1ca8cb] w-10 h-10 flex items-center justify-center rounded-xl shadow-md">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <span>+234 81-6379-1552 | +234 81-6379-1552</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
