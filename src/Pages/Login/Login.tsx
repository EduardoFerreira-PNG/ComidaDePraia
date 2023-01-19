import {BsFacebook,BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {TbFaceId} from 'react-icons/tb'


import img_login from '../../img/beach_login.svg'
import './Login.sass'



const Login = () => {
  return (
    <div className='container_login'>
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
          <button>Celular</button>
          <button>E-mail</button>
          <button>Reconhecimento Facial <TbFaceId/></button>
        </div>
      </div>
    </div>
  )
}

export default Login