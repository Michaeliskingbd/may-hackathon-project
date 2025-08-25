import React from 'react'

export const Teamdetails = () => {
  return (
  <section className="h-[300vh] mt-10 py-10 px-20 space-y-14">
  <div className="flex bg-white rounded-2xl border shadow-sm py-3 px-6">
    
    {/* Left Image */}
    <div className="w-1/3">
      <img
        className="w-[90%] h-full object-cover rounded-xl"
        src="https://turmet-react.vercel.app/assets/img/team/04.jpg"
        alt="profile"
      />
    </div>

    {/* Right Content */}
    <div className="w-2/3 p-5 flex flex-col justify-between">
      
      {/* Name + Role */}
      <div>
        <h2 className="text-[1.9rem] font-semibold text-gray-800">Savannah Nguyen</h2>
        <span className="text-[1.1rem] text-gray-500">Tourist Guide</span>
        <p className="text-gray-600 mt-3 text-[1.05rem] leading-relaxed">
          Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget lacus a
          felis accumsan pharetra in dignissim enim. In amet odio mollis urna
          aliquet volutpat. Sed bibendum nisl vehicula imperdiet <br /> imperdiet,augue
          massa fringilla.
        </p>
      </div>

      
      {/* Divider line */}
      <div className="border-t my-6"></div>


      {/* Contact info */}
<ul className="grid grid-cols-3 gap-4 text-sm">
  <li className='text-[1.15rem]'>
    <span className="text-blue-600 font-medium">Experience:</span>{" "}
    <span className="text-gray-700">10 Years</span>
  </li>
  <li className='text-[1.15rem]' >
    <span className="text-blue-600 font-medium">Position:</span>{" "}
    <span className="text-gray-700">Guider</span>
  </li>
  <li className='text-[1.15rem]' >
    <span className="text-blue-600 font-medium">Phone:</span>{" "}
    <span className="text-gray-700">+208-555-0122</span>
  </li>
</ul>

      {/* Social Icons */}
        {/* Social icons */}
      {/* Social Icons */}
<div className="flex space-x-3 mt-4">
  {/* Facebook */}
  <a href="#" className="p-2 border rounded-md hover:bg-blue-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-600">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
    </svg>
  </a>

  {/* Twitter */}
  <a href="#" className="p-2 border rounded-md hover:bg-blue-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-sky-500">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.88-2.35 8.46 8.46 0 0 1-2.7 1.03A4.22 4.22 0 0 0 16 4a4.23 4.23 0 0 0-4.22 4.23c0 .33.04.65.1.95a12 12 0 0 1-8.7-4.4 4.23 4.23 0 0 0 1.31 5.64 4.18 4.18 0 0 1-1.91-.53v.05a4.23 4.23 0 0 0 3.39 4.15c-.46.12-.94.18-1.44.18-.35 0-.7-.03-1.03-.1a4.23 4.23 0 0 0 3.95 2.94A8.48 8.48 0 0 1 2 19.54a11.94 11.94 0 0 0 6.45 1.89c7.74 0 11.97-6.41 11.97-11.96 0-.18 0-.35-.01-.53A8.3 8.3 0 0 0 22.46 6z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" className="p-2 border rounded-md hover:bg-pink-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-pink-500">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.8-3.8a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="#" className="p-2 border rounded-md hover:bg-blue-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-700">
      <path d="M20.45 20.45h-3.6v-5.4c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.5h-3.6V9h3.5v1.6h.1c.5-1 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.5v6.4zM5.35 7.5a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.15 20.45h-3.6V9h3.6v11.45z"/>
    </svg>
  </a>
</div>
    </div>
  </div>


  

    <div className="bg-white-50 py-12">
  <div className="container mx-auto px-6 md:px-12">
    <div className="flex flex-col md:flex-row gap-8 ">
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-5">
        <h2 className="text-[2rem] font-bold text-gray-800">
          Professional Info
        </h2>
        <p className="text-gray-600 text-[1rem] leading-relaxed text-sm">
          Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, made of owl the
          quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <p className="text-gray-600 text-[1rem] leading-relaxed text-sm">
          The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend
          porta arcu. In hac augu ehabitasse the is platea augue thelorem turpoi
          dictumst. In lacus libero faucibus.
        </p>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col justify-evenly  ">
        {/* Skill 1 */}
        <div >
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Language Skills</span>
            <span className="text-gray-600">86%</span>
          </div>
          <div className="w-full bg-gray-200  h-3">
            <div
              className="bg-cyan-500 h-3 "
              style={{ width: "86%" }}
            ></div>
          </div>
        </div>

        {/* Skill 2 */}
        <div >
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Tour Guide</span>
            <span className="text-gray-600">72%</span>
          </div>
          <div className="w-full bg-gray-200  h-3">
            <div
              className="bg-cyan-500 h-3 "
              style={{ width: "72%" }}
            ></div>
          </div>
        </div>

        {/* Skill 3 */}
        <div className='mt-4'>
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>Planning</span> {/* corrected spelling */}
            <span className="text-gray-600">62%</span>
          </div>
          <div className="w-full bg-gray-200  h-3">
            <div
              className="bg-cyan-500 h-3 "
              style={{ width: "62%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div>
 <hr className="border-t border-gray-300 mt-8" />

<div className="mt-25 py-20">
  <div>
    <h2 className="text-[2.5rem] font-semibold">Related Guider</h2>
  </div>


<div className="flex  px-8 py-16">
    {/* Card 1 */}
    <div className="w-1/3 relative">
      <img
        className="w-[90%] h-full object-cover rounded-xl"
        src="https://turmet-react.vercel.app/assets/img/team/02.jpg"
        alt="profile"
      />
      
        {/* White Box */}
  <div className="absolute -bottom-12 right--1/2  w-[85%] bg-white rounded-xl shadow-xl p-10 text-center">
    <h3 className="text-lg font-semibold text-gray-800">Esther Howard</h3>
    <p className="text-sm text-gray-500">Tourist Guide</p>

              <div className="flex justify-center gap-4 mt-4">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      </div>
    </div>

    {/* Card 2 */}
    <div className="w-1/3 relative">
      <img
        className="w-[90%] h-full object-cover rounded-xl"
        src="https://turmet-react.vercel.app/assets/img/team/03.jpg"
        alt="profile"
      />
      <div className="absolute -bottom-12 right--1/2 w-[85%] bg-white rounded-xl shadow-xl p-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Leslie Alexander</h3>
        <p className="text-sm text-gray-500">Tourist Guide</p>


              <div className="flex justify-center gap-4 mt-4">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      </div>
    </div>

    {/* Card 3 */}
    <div className="w-1/3 relative">
      <img
        className="w-[90%] h-full object-cover rounded-xl"
        src="https://turmet-react.vercel.app/assets/img/team/04.jpg"
        alt="profile"
      />
      <div className="absolute -bottom-12 right--1/2 w-[85%] bg-white rounded-xl shadow-xl p-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Theresa Web</h3>
        <p className="text-sm text-gray-500">Tourist Guide</p>
             <div className="flex justify-center gap-4 mt-4">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-blue-500 hover:bg-blue-100"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      </div>
    </div>
  </div>
</div>

</section>


  )
}

export default Teamdetails
