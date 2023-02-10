import Filter from '../../Components/Filter/Filter'
import Footer from '../../Components/Footer/Footer'
import { NavBar } from '../../Components/NavBar/NavBar'
import Search from '../../Components/Search/Search'
import Shortcuts from '../../Components/Shortcuts/Shortcuts'
import Popular from '../../Components/Popular/Popular'

import { AiFillStar } from 'react-icons/ai'
import { GiKnifeFork } from 'react-icons/gi'
import { MdSportsMotorsports } from 'react-icons/md'
import { RxArrowRight } from 'react-icons/rx'
import { RxArrowLeft } from 'react-icons/rx'

import './restaurant.sass'

const Restaurant = () => {
    return (
        <div className='page_restaurant'>
            <NavBar />
            <Search />
            <Shortcuts />
            <Popular />
            <Filter />
            <h2 className='tittle_page'>Restaurantes</h2>
            <div className="container_restaurant">
                <div className="card_restaurant">
                    <div className="img_food">
                    </div>
                    <div className="status_restaurant">
                        <img src="https://i.pinimg.com/736x/93/6b/e5/936be505a49e38aef67094517345d2e5.jpg" alt="" />
                        <div className="information">
                            <div className="name">
                                <h4>Dona maria</h4>
                                <p> <AiFillStar /> 4,7</p>
                            </div>
                            <div className="status">
                                <p><GiKnifeFork /> lanches</p>
                                <p><MdSportsMotorsports /> 20 a 30 min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_restaurant">
                    <div className="img_food">
                    </div>
                    <div className="status_restaurant">
                        <img src="https://i.pinimg.com/736x/93/6b/e5/936be505a49e38aef67094517345d2e5.jpg" alt="" />
                        <div className="information">
                            <div className="name">
                                <h4>Dona maria</h4>
                                <p> <AiFillStar /> 4,7</p>
                            </div>
                            <div className="status">
                                <p><GiKnifeFork /> lanches</p>
                                <p><MdSportsMotorsports /> 20 a 30 min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_restaurant">
                    <div className="img_food">
                    </div>
                    <div className="status_restaurant">
                        <img src="https://i.pinimg.com/736x/93/6b/e5/936be505a49e38aef67094517345d2e5.jpg" alt="" />
                        <div className="information">
                            <div className="name">
                                <h4>Dona maria</h4>
                                <p> <AiFillStar /> 4,7</p>
                            </div>
                            <div className="status">
                                <p><GiKnifeFork /> lanches</p>
                                <p><MdSportsMotorsports /> 20 a 30 min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_restaurant">
                    <div className="img_food">
                    </div>
                    <div className="status_restaurant">
                        <img src="https://i.pinimg.com/736x/93/6b/e5/936be505a49e38aef67094517345d2e5.jpg" alt="" />
                        <div className="information">
                            <div className="name">
                                <h4>Dona maria</h4>
                                <p> <AiFillStar /> 4,7</p>
                            </div>
                            <div className="status">
                                <p><GiKnifeFork /> lanches</p>
                                <p><MdSportsMotorsports /> 20 a 30 min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_restaurant">
                    <div className="img_food">
                    </div>
                    <div className="status_restaurant">
                        <img src="https://i.pinimg.com/736x/93/6b/e5/936be505a49e38aef67094517345d2e5.jpg" alt="" />
                        <div className="information">
                            <div className="name">
                                <h4>Dona maria</h4>
                                <p> <AiFillStar /> 4,7</p>
                            </div>
                            <div className="status">
                                <p><GiKnifeFork /> lanches</p>
                                <p><MdSportsMotorsports /> 20 a 30 min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card_restaurant">
                    <div className="img_food">
                    </div>
                    <div className="status_restaurant">
                        <img src="https://i.pinimg.com/736x/93/6b/e5/936be505a49e38aef67094517345d2e5.jpg" alt="" />
                        <div className="information">
                            <div className="name">
                                <h4>Dona maria</h4>
                                <p> <AiFillStar /> 4,7</p>
                            </div>
                            <div className="status">
                                <p><GiKnifeFork /> lanches</p>
                                <p><MdSportsMotorsports /> 20 a 30 min</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="next_page">
                <a href="#"><RxArrowLeft /></a>
                <p>1</p>
                <a href="#"><RxArrowRight /></a>
            </div>
            <Footer />
        </div>
    )
}

export default Restaurant