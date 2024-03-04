import React from 'react';
import { FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
            {/* Upper section */}
            <div className="bg-white flex justify-between items-center p-4">
                <div className="flex items-center">
                    <FaPhone className="text-black mr-2" />
                    <span className="text-black">Call Us: +92 321 3427371</span>
                </div>
                <div>
                    <div>
                        <img src="public/logo-black.png" className='w-22 h-auto' alt="" />
                    </div>
                </div>
                <div className="flex items-center">
                    <FaUser className="text-black mr-4" />
                    <FaShoppingCart className="text-black" />
                </div>
            </div>

            {/* Lower section */}
            <div className="sticky top-0 bg-yellow-400 flex justify-between items-center px-4 py-2 z-10 h-26">
                <nav className="flex">
                    <Link to="/menu" className="text-white mx-2">Menu</Link>
                    <Link to="/contact" className="text-white mx-2">Contact</Link>
                    <Link to="/about" className="text-white mx-2">About</Link>
                </nav>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Order Now
                </button>
            </div>
        </>
    );
};

export default Navbar;
