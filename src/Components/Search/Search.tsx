
import {FaSearch} from 'react-icons/fa'

import './Search.sass'

const Search = () => {
  return (
    <div className='container_search'>
        <div className="search">
        <input className='search_input' type="search" placeholder='Buscar Lojas' />
        <button className='search_button'>Buscar<FaSearch/></button>
        </div>
    </div>
  )
}

export default Search