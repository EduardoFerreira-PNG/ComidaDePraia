import { BsArrowLeftSquareFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

import './Login_phone.sass'

const Login_phone = () => {
  return (
    <div className='container_phone'>
      <div className='comeback'>
        <Link to="/Login">
          <BsArrowLeftSquareFill />
        </Link>
      </div>
      <div className="phone_user">
        <div className='form_phone'>
          <label htmlFor="phone">Digite seu celular</label>
          <input type="text" name='phone' placeholder='Digite seu número de celular' />
        </div>
          <button className='login_phone'>Entrar</button>
      </div>
    </div>
  )
}

export default Login_phone