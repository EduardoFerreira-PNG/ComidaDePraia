import CenterMode from '../../Components/BestStore/BestStore'
import Filter from '../../Components/Filter/Filter'
import Footer from '../../Components/Footer/Footer'
import { NavBar } from '../../Components/NavBar/NavBar'
import Search from '../../Components/Search/Search'
import SubNav from '../../Components/SubNav/SubNav'
import banner from '../../img/8125917.png'

import './home.sass'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Search />
      <Filter />
      <CenterMode />
      <SubNav />
      <div className='banner_home'>
        <img src={banner} alt="banner" />
      </div>
      <Footer />
    </div>
  )
}

export default Home