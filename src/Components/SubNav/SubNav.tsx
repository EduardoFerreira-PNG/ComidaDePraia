import mercado from '../../img/link-mercados.png'
import restaurante from '../../img/link-restaurantes.png'
import farmacia from '../../img/link-farmacia.png'
import petshop from '../../img/link-petshop.png'
import bebidas from '../../img/link-bebidas.png'

import './SubNav.sass'
import { Link } from 'react-router-dom'

const SubNav = () => {
    return (
        <div className='sub_nav--container'>
                <h4>Categorias</h4>
                <div className="sub_nav">
                    <Link to='/Restaurant'><a href="#"><img src={restaurante} alt="" /></a></Link>
                    <Link to='/Market'><a href="#"><img src={mercado} alt="" /></a></Link>
                    <a href="#"><img src={farmacia} alt="" /></a>
                    <a href="#"><img src={petshop} alt="" /></a>
                    <a href="#"><img src={bebidas} alt="" /></a>
                </div>
        </div>
    )
}

export default SubNav