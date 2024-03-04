import React from 'react';
import './categories.css';

const Categories = ({ categories, setCategories }) => {


    return (
        <>
            <div className='pt-14 pb-4'>
                <h2 className='text-center font-bebas font-bold text-3xl md:text-5xl'>Popular Categories</h2>
            </div>
            <div className='container mx-auto pt-8 pb-12 px-1'>

                <div className='categories pb-10 flex flex-wrap md:justify-center gap-1.5 lg:gap-5 md:gap-3 transition-shadow '>

                    <div className='bg-orange-400 hover:bg-orange-500 rounded flex flex-1 justify-center cursor-pointer items-center category-item  text-white mb-2 gap-4 md:gap-2 px-12 md:px-4 py-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-45'
                    >
                        <img className='w-12 h-12' src='/categories/burger-icon.png' alt='burger-icon' />
                        <h2>Burgers</h2>
                    </div>


                    <div className='bg-purple-400 hover:bg-purple-500 rounded flex flex-1 justify-center cursor-pointer items-center category-item text-white mb-2 gap-4 md:gap-2 px-12 md:px-4 py-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-45'
                    >
                        <img className='w-12 h-12' src='/categories/pizza-icon.png' alt='pizza-icon' />
                        <h2>Pizza</h2>
                    </div>


                    <div className='bg-red-500  hover:bg-red-600 rounded flex flex-1 justify-center  cursor-pointer items-center category-item text-white mb-2 gap-4 md:gap-2 px-12 md:px-4 py-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-45'>
                        <img className='w-12 h-12' src='/categories/fried-chicken.png' alt='fried-chicken-icon' />
                        <h2>Chicken</h2>
                    </div>


                    <div className='bg-blue-400  hover:bg-blue-500 rounded flex flex-1 justify-center cursor-pointer  items-center category-item text-white mb-2 gap-4 md:gap-2 px-12 md:px-4 py-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-45'>
                        <img className='w-12 h-12' src='/categories/drinks.png' alt='drinks-icon' />
                        <h2>Drinks</h2>
                    </div>


                    <div className='bg-green-400 hover:bg-green-500 rounded flex flex-1 justify-center cursor-pointer  items-center category-item text-white mb-3 gap-4 md:gap-2 px-12 md:px-4 py-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-45'>
                        <img className='w-12 h-12' src='/categories/deserts.png' alt='desserts-icon' />
                        <h2>Desserts</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
