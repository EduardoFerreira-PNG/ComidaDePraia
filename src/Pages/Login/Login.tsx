import {BsFacebook,BsApple,BsArrowLeftSquareFill} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {TbFaceId} from 'react-icons/tb'
import { Link } from 'react-router-dom'


import img_login from '../../img/beach_login.svg'
import './login.sass'



const Login = () => {
  return (
    <div className='container_login'>
      <div className='comeback'>
        <Link to="/">
        <BsArrowLeftSquareFill/>
        </Link>
      </div>
      <div className="img_login">
        <img src={img_login} alt="alt" />
      </div>
      <div className="user_login">
        <h2>Só mais um pouquinho <br/> e você ja pode pedir!</h2>
        <p>Como deseja fazer o login?</p>
        <div className="social">
          <button className='apple'><b><BsApple/></b> Entrar com a Apple</button>
          <button className='google'><b><FcGoogle/></b> Entrar com o Google</button>
          <button className='facebook'><b><BsFacebook/></b> Entrar com Facebook</button>
        </div>
        <div className="login">
          <Link to='/Login_phone'><button>Celular</button></Link> 
         <Link to='/Login_mail'><button>E-mail</button></Link> 
          <button>Reconhecimento Facial <TbFaceId/></button>
        </div>
      </div>
    </div>
  )
}

export default Login