import React from 'react'

import './popular.sass'

const Popular = () => {
    return (
        <div className='container_popular'>
            <h2>Mais Populares</h2>
            <div className="popular_conjunto">
                <div className="popular">
                    <img src="https://images.rappi.com.br/restaurants_logo/logobknew-1657307319823.jpg?e=webp&d=100x100&q=80" alt="" />
                    <p>Burguer King</p>
                </div>
                <div className="popular">
                    <img src="https://images.rappi.com.br/restaurants_logo/log-1623883359763.png?e=webp&d=100x100&q=80" alt="" />
                    <p>KFC</p>
                </div>
                <div className="popular">
                    <img src="https://images.rappi.com.br/restaurants_logo/sbuxlogo-1646673982361.jpg?e=webp&d=100x100&q=80" alt="" />
                    <p>Starbucks</p>
                </div>
                <div className="popular">
                    <img src="https://images.rappi.com.br/restaurants_logo/900025182-1549377065.png?e=webp&d=100x100&q=80" alt="" />
                    <p>Mcdonald's</p>
                </div>
                <div className="popular">
                    <img src="https://images.rappi.com.br/restaurants_logo/logoeee52-1572636477692.png?e=webp&d=100x100&q=80" alt="" />
                    <p>Domino's Pizza</p>
                </div>
                <div className="popular">
                    <img src="https://images.rappi.com.br/restaurants_logo/sdfsdf5-1571864220431.png?e=webp&d=100x100&q=80" alt="" />
                    <p>Pizza Hut</p>
                </div>
            </div>
        </div>
    )
}

export default Popular