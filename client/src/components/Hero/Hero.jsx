import React from 'react';
import './hero.css';
const Hero = () => {
    return (
        <div className='relative bg-img text-white'>
            <div className='container mx-auto px-4  lg:mt-7 md:mt-7'>
                <div className="md:flex md:justify-between text-center md:text-left md:items-center md:gap-4">
                    <div className="md:w-1/2 md:text-left ">
                        <p className="mb-7 mx-auto md:mx-0 font-mont font-normal text-[13px] md:text-[15px]">Taste the town's finest culinary delights here.</p>
                        <span className='circle'></span>
                        <h1 className="font-normal font-bebas mb-7 leading-none text-[45px] xl:text-[80px] lg:text-[55px] md:text-[40px]">Enjoy
                            <span className="text-secondary font-normal font-bebas"> Delicious</span> <br /> and <span className="text-secondary font-normal font-bebas ">Fresh </span><span className='font-normal font-bebas'>Meals</span><br /> Everyday</h1>
                        <p className="mb-7 mx-auto md:mx-0 w-full md:w-3/4 font-mont font-normal text-[13px] md:text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="order-btn py-3 px-10 mb-7 bg-secondary hover:bg-opacity-90 text-white rounded ">Order Now</button>
                    </div>
                    <div className="md:w-1/2 md:text-center flex justify-center">
                        <div className="inline-block  ">
                            <img className="w-full h-full object-cover" src="/pizza-banner.png" alt="Home" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
