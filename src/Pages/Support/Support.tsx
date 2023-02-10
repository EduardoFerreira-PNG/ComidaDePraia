import React from 'react'

import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { BiPhoneCall } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'


import { NavBar } from '../../Components/NavBar/NavBar'

import logo from '../../img/support_img.png'

import './support.sass'
import Footer from '../../Components/Footer/Footer'

const Support = () => {
    return (
        <div className='container_support'>
            <NavBar />
            <h3>Canais de atendimento</h3>
            <div className="support">
                <div className="card_support">
                    <TfiHeadphoneAlt />
                    <p>OUVIDORIA</p>
                    <p>118951362123</p>
                </div>
                <div className="card_support">
                    <BiPhoneCall />
                    <p>FALE CONOSCO</p>
                    <p>118951362123</p>
                </div>
                <div className="card_support">
                    <BsWhatsapp />
                    <p>SAC WHATSAPP</p>
                    <p>118951362123</p>
                </div>
                <div className="card_support">
                    <AiOutlineMail />
                    <p>E-MAIL</p>
                    <p>118951362123</p>
                </div>
            </div>
            <div className="form_support">
                <form className="user">
                    <h2>Formulário</h2>
                    <label htmlFor="name">Digite seu Nome completo</label>
                    <input type="text" placeholder='Digite seu nome completo' maxLength={20} required />
                    <label htmlFor="email">Digite seu E-mail</label>
                    <input type="email" placeholder='Digite seu e-mail' required />
                    <label htmlFor="date">Data de Nascimento</label>
                    <input type="date" />
                    <label htmlFor="problem">Digite o problema que está enfrentando</label>
                    <textarea name="problem" id="problem" cols="30" rows="10" placeholder='Digite o problema detalhadamente'></textarea>
                    <input type="button" name="btn_form" className='btn_form' value='Enviar' />
                </form>
                <img src={logo} alt="sim" />
            </div>
            <Footer />
        </div>
    )
}

export default Support