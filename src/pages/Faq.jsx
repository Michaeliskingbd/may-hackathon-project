import React from 'react'
import GlobalHeader from '../Components/GlobalHeader'
import Footer from '../Components/Footer'
import FaqDetails from '../Components/FaqDetails'

const Faq = () => {
  return (
    <section>
      <GlobalHeader title={"FAQ"} />
      <FaqDetails/>
      <Footer/>
      </section>
  )
}

export default Faq