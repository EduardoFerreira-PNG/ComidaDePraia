import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar'

import './support.sass'

const Support = () => {
  return (
      <div className='container_support'>
        <NavBar />
        <h2>Bem vindo ao Suporte</h2>
        <div className="support">
            <div className="card_support">
                <p>SAC</p>
                <p>118951362123</p>
            </div>
            <div className="card_support">
                <p>SAC</p>
                <p>118951362123</p>
            </div>
            <div className="card_support">
                <p>SAC</p>
                <p>118951362123</p>
            </div>
        </div>
    </div>
  )
}

export default Support