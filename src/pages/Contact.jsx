import React from 'react'
import GlobalHeader from '../Components/GlobalHeader'
import ContactDetails from '../Components/ContactDetails'
import ContactFormAndMap from '../Components/ContactFormAndMap'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <section>
      <GlobalHeader title={"Contact"}/>
    <ContactDetails />
    <ContactFormAndMap/>
    <Footer/>
    </section>
  )
}

export default Contact