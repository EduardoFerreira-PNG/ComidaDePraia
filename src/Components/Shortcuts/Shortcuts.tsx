import React from 'react'

import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

import './shortcuts.sass'

const Shortcuts = () => {

  return (
    <div className='container'>
        <p className='arrow_left'> <BsFillArrowLeftCircleFill /> </p>
        <div className='shortcuts'>
           <div className="card">
            <img src="https://exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info" alt="" />
            <p>Burgers</p>
           </div>
           <div className="card">
            <img src="data:image/jpeg;base64,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" alt="" />
            <p>Japonesa</p>
           </div>
           <div className="card">
            <img src="https://img.freepik.com/fotos-gratis/uma-fatia-de-pizza-crocante-com-carne-e-queijo_140725-6974.jpg?w=2000" alt="" />
            <p>Pizza</p>
           </div>
           <div className="card">
            <img src="https://www.sorpack.com.br/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/k/sku_20213_01.png" alt="" />
            <p>Bolos</p>
           </div>
           <div className="card">
            <img src="https://61239.cdn.simplo7.net/static/61239/sku/promocoes-1-combo-c-3-pacotes-de-coxinhas-1651450083770.png" alt="" />
            <p>Salgados</p>
           </div>
           <div className="card">
            <img src="https://conteudo.imguol.com.br/c/entretenimento/44/2019/10/21/salada-com-ovos-1571670959482_v2_450x337.jpg" alt="" />
            <p>Saudavel</p>
           </div>
           <div className="card">
            <img src="https://www.sabornamesa.com.br/media/k2/items/cache/b7e870fe16253b03d4f5e4eca7c887cf_XL.jpg" alt="" />
            <p>Açai</p>
           </div>
           <div className="card">
            <img src="https://i0.statig.com.br/bancodeimagens/2m/x8/6n/2mx86nv7kxv8cybegti6zvw0t.jpg" alt="" />
            <p>Brasileira</p>
           </div>
           <div className="card">
            <img src="https://i0.wp.com/bernadetealves.com/wp-content/uploads/2020/10/Dia-Mundial-do-Macarrao-classicos-italianos-que-conquistaram-paladares-Espaguete-a-Bolonhesa-Bernadete-Alves.jpg?fit=878%2C575&ssl=1" alt="" />
            <p>Italiana</p>
           </div>
           <div className="card">
            <img src="https://i0.wp.com/bernadetealves.com/wp-content/uploads/2020/10/Dia-Mundial-do-Macarrao-classicos-italianos-que-conquistaram-paladares-Espaguete-a-Bolonhesa-Bernadete-Alves.jpg?fit=878%2C575&ssl=1" alt="" />
            <p>Italiana</p>
           </div>
           <div className="card">
            <img src="https://i0.wp.com/bernadetealves.com/wp-content/uploads/2020/10/Dia-Mundial-do-Macarrao-classicos-italianos-que-conquistaram-paladares-Espaguete-a-Bolonhesa-Bernadete-Alves.jpg?fit=878%2C575&ssl=1" alt="" />
            <p>Italiana</p>
           </div>
           <div className="card">
            <img src="https://i0.wp.com/bernadetealves.com/wp-content/uploads/2020/10/Dia-Mundial-do-Macarrao-classicos-italianos-que-conquistaram-paladares-Espaguete-a-Bolonhesa-Bernadete-Alves.jpg?fit=878%2C575&ssl=1" alt="" />
            <p>Italiana</p>
           </div>
        </div>
        <p className='arrow_right'> <BsFillArrowRightCircleFill/>  </p>
    </div>
  )
}

export default Shortcuts