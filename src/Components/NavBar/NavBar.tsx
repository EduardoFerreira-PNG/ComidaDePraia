import { ImLocation2 } from 'react-icons/im'
import { FaUmbrellaBeach, FaBriefcaseMedical } from 'react-icons/fa'
import { BiRestaurant, BiDrink } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdPets } from 'react-icons/md'


import Login from '../../Pages/Login/Login'


import './NavBar.sass'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="Container">
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <h1>ComidaDePraia <FaUmbrellaBeach /></h1>
          </Link>
        </div>
        {/* <div className="local"><p>Avenida do Oratório, <span>4473</span> <ImLocation2 /></p></div> */}
        <div className='category'>
          <li>
            <Link to='/Restaurant'><a href="#">Restaurante</a></Link>
            <Link to='/Market'><a href="#">Mercado</a></Link>
            <a href="#">Farmácia</a>
            <a href="#">Bebidas</a>
            <a href="#">Pet</a>
          </li>
        </div>
        <div className="user">
        <Link to="/Login"> <span >Criar conta</span></Link>
          <button>
            <Link to="/Login"><a>Entrar</a></Link>
          </button>
        </div>
      </div>

    </div>
  )
}
