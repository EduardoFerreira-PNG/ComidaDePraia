import React from 'react'
import Filter from '../../Components/Filter/Filter'
import { NavBar } from '../../Components/NavBar/NavBar'
import Search from '../../Components/Search/Search'

import './market.sass'

const Market = () => {
  return (
    <div>
        <NavBar />
        <Search />
        <Filter />
        <h1>Mercados</h1>
    </div>
  )
}

export default Market