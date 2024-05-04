import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Ccardfirst from '../components/Ccardfirst'
import Thirdsec from '../components/Thirdsec'
import Ccartsec from '../components/Ccartsec'
import Fourthsec from '../components/Fourthsec'
import Fifthsec from '../components/Fifthsec'
import Footer from '../components/Footer'
import ReactSlik from '../components/ReactSlik'
// import ReactSlik from '../components/ReactSlik'




// import Bcard from '../components/Bcard'

const Homepage = () => {
  return (
    <div className=' overflow-hidden'>
        <Header/>
        <Banner/>
        <Ccardfirst/>
        <Thirdsec/>
        <Ccartsec/>
        <Fourthsec/>
        <Fifthsec/>
        <Footer/>
        {/* <ReactSlik/> */}
    </div>
  )
}

export default Homepage