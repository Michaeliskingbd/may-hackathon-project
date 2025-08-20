const HeroBanner = () => {
  return (
    <section className="hero-section p-[20px]">
        <div className="hero-top bg-[url(https://images.unsplash.com/photo-1519922639192-e73293ca430e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-black/60 bg-blend-overlay h-screen rounded-[20px]">
            <div className="container m-0">
                <div className="hero-content pt-[300px] px-[90px] pb-[50px]">
                    <span className="sub-title text-white text-[18px] italic">
                        Get unforgettable pleasure with us
                    </span>
                    <h1 className='text-[53px] font-[700] text-white leading-[4rem]'>Discover Your Next <br/> Handpicked Journey</h1>
                    <p className='text-white text-[16px]'>There are many variations of passages of  available, but the majority have suffered alteration in <br/> some form, by injected humour words which don't look even slightly believable.</p>
                </div>
            </div>
        </div>

        <div className="price_search-section mt-[20px] border border-solid border-black-5 rounded-[20px] py-[40px] px-[30px]">
            <div className="container">
                <div className="hero-bottom">
                    <div className="header-wrapper lg:flex items-center justify-between mb-6">
                        <div className="header-wrapper_title">
                            <h2 className='text-[36px] font-[600] text-[#0a1f24]'>Find The Best Place</h2>
                        </div>

                        <ul className="header-wrapper_nav flex items-center gap-3">
                            <li className='border border-solid border-black-1 py-[10px] px-[20px] rounded-[5px]'><a href="" className="nav-link">Hotels</a></li>
                            <li className='border border-solid border-black-1 py-[10px] px-[20px] rounded-[5px]'><a href="" className="nav-link">Tours</a></li>
                            <li className='border border-solid border-black-1 py-[10px] px-[20px] rounded-[5px]'><a href="" className="nav-link">Flight</a></li>
                        </ul>
                    </div>

                    <div className="header-nav_content">
                        <div className="form-wrapper hotels">
                            <form action="">
                                <div className="hotel-wrapper flex justify-between items-center">
                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Destination</label>
                                        <input className='bg-[#F7F7F7] w-[220px] p-5 rounded-[5px]' type="text" name='name' id='name' placeholder='Enter your destination' />
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Price</label>
                                        <select className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="text">
                                            <option value="">
                                                Price
                                            </option>
                                            <option value="">
                                                #1000
                                            </option>
                                            <option value="">
                                                #1300
                                            </option>
                                            <option value="">
                                                #1500
                                            </option>
                                            <option value="">
                                                #2000
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Location</label>
                                        <select className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="text">
                                            <option>All City</option>
                                            <option>London</option>
                                            <option>Canada</option>
                                            <option>Denmark</option>
                                            <option>Finland</option>
                                        </select>
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Departure Month</label>
                                        <input className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="date" name='name' id='name' placeholder='Enter your destination' />
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Proceed</label>
                                        <button className='bg-[#113D48] text-white w-[220px] p-5 rounded-[5px]'> Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className="form-wrapper tours hidden">
                            <form action="">
                                <div className="hotel-wrapper flex justify-between items-center">
                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Destination</label>
                                        <input className='bg-[#F7F7F7] w-[220px] p-5 rounded-[5px]' type="text" name='name' id='name' placeholder='Enter your destination' />
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Price</label>
                                        <select className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="text">
                                            <option value="">
                                                Price
                                            </option>
                                            <option value="">
                                                #1000
                                            </option>
                                            <option value="">
                                                #1300
                                            </option>
                                            <option value="">
                                                #1500
                                            </option>
                                            <option value="">
                                                #2000
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Location</label>
                                        <select className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="text">
                                            <option>All City</option>
                                            <option>London</option>
                                            <option>Canada</option>
                                            <option>Denmark</option>
                                            <option>Finland</option>
                                        </select>
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Departure Month</label>
                                        <input className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="date" name='name' id='name' placeholder='Enter your destination' />
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Proceed</label>
                                        <button className='bg-[#113D48] text-white w-[220px] p-5 rounded-[5px]'> Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="form-wrapper flight hidden">
                            <form action="">
                                <div className="hotel-wrapper flex justify-between items-center">
                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Destination</label>
                                        <input className='bg-[#F7F7F7] w-[220px] p-5 rounded-[5px]' type="text" name='name' id='name' placeholder='Enter your destination' />
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Price</label>
                                        <select className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="text">
                                            <option value="">
                                                Price
                                            </option>
                                            <option value="">
                                                #1000
                                            </option>
                                            <option value="">
                                                #1300
                                            </option>
                                            <option value="">
                                                #1500
                                            </option>
                                            <option value="">
                                                #2000
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Location</label>
                                        <select className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="text">
                                            <option>All City</option>
                                            <option>London</option>
                                            <option>Canada</option>
                                            <option>Denmark</option>
                                            <option>Finland</option>
                                        </select>
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Departure Month</label>
                                        <input className='bg-[#F7F7F7] text-[#c4c4c4] w-[220px] p-5 rounded-[5px]' type="date" name='name' id='name' placeholder='Enter your destination' />
                                    </div>

                                    <div className="form-content grid">
                                        <label className='text-[16px] font-[600] text-[#0a1f24] mb-3' htmlFor="name">Proceed</label>
                                        <button className='bg-[#113D48] text-white w-[220px] p-5 rounded-[5px]'> Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroBanner