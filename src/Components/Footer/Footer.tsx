import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './Footer.sass'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <b>ComidaDePraia</b>
        <a href="#">Sobre nós</a>
        <a href="#">Perguntas Frequentes</a>
        <a href="#">FAQ</a>
        <Link to="/Support"><a href="#">Suporte</a></Link>
        <p>Atendimento de Seg á Sex das 8:00 ás 20:00</p>
        <p>Cidade Metropolitana: (11)4108-8852</p>
        <p>Central de Atendimento: 0800 4105 3358</p>
        <p>Email: comidadepraiasuporte@outlook.com</p>
      </div>
      <div className="center">
        <b>Descubra</b>
        <a href="#">Trabalhe conosco</a>
        <a href="#">Cadastre seu Restaurante ou Mercado</a>
        <a href="#">ComidaDePraia Card</a>
        <a href="#">Lojinha</a>
      </div>
      <div className="right_socialmedia">
        <b>Social</b>
        <div className="social">
          <a href="#"><BsInstagram /></a>
          <a href="#"><BsFacebook /></a>
          <a href="#"><BsYoutube /></a>
          <a href="#"><FaTiktok /></a>
        </div>
      </div>

    </div>
  )
}

export default Footer