
import { NavBar } from '../Components/NavBar/NavBar'

import './Home.sass'

const Home = () => {
  return (
    <div>
        <NavBar />
        <div className='tittle_home'>
        <h2>Bateu fome?</h2>
        <p>Peça onde estiver, que levamos até você!</p>
      </div>
    </div>
  )
}

export default Home