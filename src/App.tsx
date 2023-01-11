import './App.sass'
import CenterMode from './Components/BestStore/BestStore'
import Filter from './Components/Filter/Filter'
import Search from './Components/Search/Search'
import Home from './Pages/Home'
import Example from './slide'

import banner from './img/8125917.png'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Home />
      <Search />
      <Filter />
      <CenterMode />
      <div className='banner_home'>
        <img src={banner} alt="banner" />
      </div>
      <Footer />
    </div>
  )
}

export default App
