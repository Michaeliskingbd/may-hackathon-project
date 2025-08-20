import React from 'react'
import PageTitle from './PageTitle'
import NavigationTrail from './NavigationTrail'

const GlobalHeader = ({title}) => {
  return (
    <section className="relative bg-[url('https://turmet-react.vercel.app/assets/img/breadcrumb/breadcrumb.jpg')] min-h-[50vh] text-white flex flex-col items-center justify-center text-center bg-cover bg-center">
  
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>


  <div className="relative z-100 space-y-5">
    <h1 className="text-4xl font-bold">{title}</h1>
    <NavigationTrail title={title} />
  </div>
</section>


  )
}

export default GlobalHeader