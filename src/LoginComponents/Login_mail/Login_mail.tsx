import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './login_mail.sass'

const Login_mail = () => {
  return (
    <div className='container_email'>
      <div className='comeback'>
        <Link to="/Login">
          <BsArrowLeftSquareFill />
        </Link>
      </div>
      <div className="email_user">
        <div className='form_email'>
          <label htmlFor="mail">Digite seu email</label>
          <input type="email" name='email' placeholder='Digite seu email' />
        </div>
          <button className='login_email'>Entrar</button>
      </div>
    </div>
  )
}

export default Login_mail