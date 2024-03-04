import React from 'react'
import './cards.css';
const Cards = () => {
    return (
        <div className='container mx-auto pt-8 pb-12 px-10'>
            <div className="cardsss flex flex-wrap justify-around">

                <div className="card">
                    <div className="card-head">
                        <h3>Beef Burger</h3>
                        <div className='burger-desc'>
                            <p>amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.</p>
                        </div>
                    </div>
                    <img src="/beef-burger.png" alt="Avatar" className='w-40' />
                    <div className="price"><span className='text-red-600'>$15.99</span></div>
                </div>
                <div className="card">
                    <div className="card-head">
                        <h3>Grilled Chicken Burger</h3>
                        <div className='burger-desc'>
                            <p>amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.</p>
                        </div>
                    </div>
                    <img src="/grilled-chicken-burger.png" alt="Avatar" className='w-40' />
                    <div className="price"><span className='text-red-600'>$15.99</span></div>
                </div>
                <div className="card">
                    <div className="card-head">
                        <h3>Crispy Chicken Burger</h3>
                        <div className='burger-desc'>
                            <p>amet consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.</p>
                        </div>
                    </div>
                    <img src="/crispy-chicken-burger.png" alt="Avatar" className='w-40' />
                    <div className="price"><span className='text-red-600'>$15.99</span></div>
                </div>
            </div>

            {/* from here */}

        </div>
    )
}

export default Cards