import {AiTwotoneTrophy} from 'react-icons/ai'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import {FaExternalLinkAlt} from 'react-icons/fa'

import './CardStore.sass'

const CardStore = ({ logo, description, tittle }: any) => {
    return (
        <div className='container_card'>
            <div className='card'>
                <div className='logo'>
                    <img src={logo} alt={tittle} />
                </div>
                <div className='description'>
                    <h1>{tittle}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className='rate'>
                <p className='trophies'>1º <AiTwotoneTrophy/></p>
                <p className='likes'>80 <BsFillBookmarkHeartFill/></p>
                <p className='link'>Peça já <FaExternalLinkAlt/></p>
            </div>
        </div>

    )
}

export default CardStore