//rfce
import React from 'react' // May be we don't need this
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Alert from './Components/Alert/Alert'
import Sec1iPadPro from './Components/Sec1iPadPro/Sec1iPadPro'
import Sec2MacBookAir from './Components/Sec2MacBookAir/Sec2MacBookAir'
import Sec3iPhone11Pro from './Components/Sec3iPhone11Pro/Sec3iPhone11Pro'
import Sec4iPhone11CDC from './Components/Sec4iPhone11CDC/Sec4iPhone11CDC'
import Sec5tvAndWatch from './Components/Sec5tvAndWatch/Sec5tvAndWatch'
import Sec6ArcadeCard from './Components/Sec6ArcadeCard/Sec6ArcadeCard'
function App() {
  return (
    <>
    <Header />
    <Alert />
    <Sec1iPadPro />
    <Sec2MacBookAir />
    <Sec3iPhone11Pro />
    <Sec4iPhone11CDC />
    <Sec5tvAndWatch />
    <Sec6ArcadeCard />
    <Footer />
    </>
  )
}

export default App

