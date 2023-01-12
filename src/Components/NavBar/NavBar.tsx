import {ImLocation2} from 'react-icons/im'
import {FaUmbrellaBeach,FaBriefcaseMedical} from 'react-icons/fa'
import {BiRestaurant, BiDrink} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdPets} from 'react-icons/md'


import './NavBar.sass'



export const NavBar = () => {
  return (
    <div className="Container">
        <div className="nav">
            <div className="logo"><h1>ComidaDePraia <FaUmbrellaBeach /></h1></div>
            <div className="local"><p>Avenida do Oratório, <span>4473</span> <ImLocation2 /></p></div>
            <div className="user"><span>Criar conta</span> <button>Entrar</button></div>
        </div>
    </div>
  )
}
