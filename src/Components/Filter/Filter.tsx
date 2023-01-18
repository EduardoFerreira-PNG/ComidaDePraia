import {BsFilter} from 'react-icons/bs'
import {MdSportsMotorsports} from 'react-icons/md'
import {CiDiscount1} from 'react-icons/ci'
import {GrTurbolinux} from 'react-icons/gr'
import {BiCurrentLocation} from 'react-icons/bi'


import './Filter.sass'

const Filter = () => {
  return (
    <div className='filter_container'>
      <div className="filters">
            <p className='active_filter'>Filtros <BsFilter /></p>
            <p>Perto de você <BiCurrentLocation /></p>
            <p>Frete Grátis <MdSportsMotorsports /></p>
            <p>Descontos Exclusivos <CiDiscount1 /></p>
            <p>Turbo <GrTurbolinux /></p>
        </div>
    </div>
  )
}

export default Filter