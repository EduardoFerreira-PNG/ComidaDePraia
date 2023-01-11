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
            <div className="user">Criar conta <button>Entrar</button></div>
        </div>
        {/* <div className="sub_nav--container">
        <div className="sub_nav">
            <p className='active'>Início</p>
            <p>Restaurantes <BiRestaurant /></p>
            <p>Mercados <AiOutlineShoppingCart /> </p>
            <p>Bebidas <BiDrink /></p>
            <p>Farmácias <FaBriefcaseMedical /> </p>
            <p>Pets <MdPets /></p>
        </div>
        </div> */}
    </div>
  )
}
