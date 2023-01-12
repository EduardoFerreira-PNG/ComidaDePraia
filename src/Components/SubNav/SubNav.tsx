import mercado from '../../img/link-mercados.png'
import restaurante from '../../img/link-restaurantes.png'
import farmacia from '../../img/link-farmacia.png'
import petshop from '../../img/link-petshop.png'
import bebidas from '../../img/link-bebidas.png'

import './SubNav.sass'

const SubNav = () => {
    return (
        <div className='sub_nav--container'>
                <h4>Sessões</h4>
                <div className="sub_nav">
                    <a href="#"><img src={restaurante} alt="" /></a>
                    <a href="#"><img src={mercado} alt="" /></a>
                    <a href="#"><img src={farmacia} alt="" /></a>
                    <a href="#"><img src={petshop} alt="" /></a>
                    <a href="#"><img src={bebidas} alt="" /></a>
                </div>
        </div>
    )
}

export default SubNav