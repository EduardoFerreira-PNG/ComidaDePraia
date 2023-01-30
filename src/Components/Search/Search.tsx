
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import './Search.sass'

const Search = () => {

    const [valor, setValor] = useState("")

  return (
    <div className='container_search'>
      <div className='tittle_home'>
        <h2>Bateu fome?</h2>
        <p>Pede na <span>praia</span></p>
      </div>
      <div className="search">
        <input className='search_input' type="search" placeholder='Buscar Lojas' value={valor} onChange={(e) => setValor(e.target.value)} />
        <button className='search_button'>Buscar<FaSearch /></button>
      </div>
    </div>
  )
}

export default Search