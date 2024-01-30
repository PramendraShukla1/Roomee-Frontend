import React from 'react'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import NewArrivals from './components/NewArrivals'
import Spotlight from './components/Spotlight'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
<Navbar/>
<Offers/>
<NewArrivals/>
<Spotlight/>
<Footer/>
    </div>
  )
}

export default App