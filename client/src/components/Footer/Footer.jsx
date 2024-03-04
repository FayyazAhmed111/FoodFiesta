import React from 'react';
import { FaFacebook, FaInstagram, FaDribbble, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const socialIcons = [
        { name: "facebook", icon: <FaFacebook /> },
        { name: "instagram", icon: <FaInstagram /> },
        { name: "twitter", icon: <FaTwitter /> },
        { name: "dribbble", icon: <FaDribbble /> }
    ];

    return (
        <>
            <footer className='  bg-dark text-white'>
                <div className='max-w-screen-2xl mx-auto'>
                    <div className=' flex flex-col md:flex-row justify-between gap-5 sm-px-8 px-5 py-12  '>

                        <div className='mb-5'>
                            <img src="/logo-white.png" className='w-48 mb-3' alt="Logo" />
                            <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                        </div>
                        <div className='mb-5'>
                            <h6 className="footer-title ">Usefull Links</h6>
                            <ul className=''>
                                <li className='mb-2'><a className="link link-hover">About Us</a></li>
                                <li className='mb-2'><a className="link link-hover">Menu</a></li>
                                <li className='mb-2'><a className="link link-hover">Cart</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h6 className="footer-title ">Help</h6>
                            <ul className=''>
                                <li className='mb-2'><a className="link  link-hover">Contact Us</a></li>
                                <li className='mb-2'><a className="link link-hover">FAQs</a></li>
                                <li className='mb-2'><a className="link link-hover">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className='mb-5'>
                            <h6 className="footer-title">Our Newsletter</h6>
                            <fieldset className="form-control w-80">
                                <div className="join mb-4">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="input  text-black join-item focus-visible:outline-none" />
                                    <button className="btn bg-secondary text-white  border-0 join-item">Subscribe</button>
                                </div>
                                <div className=' flex gap-4 items-center '>
                                    {socialIcons.map((social, index) => (
                                        <a className='text-xl' href={`#${social.name}`} key={index}>
                                            <div className="border border-opacity-70 border-gray-300 hover:bg-secondary hover:border-opacity-0  rounded-full p-3">
                                                {social.icon}
                                            </div>
                                        </a>
                                    ))}
                                </div>

                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className="d-flex border-t border-opacity-25 border-base-300 justify-center text-center items-center p-6 text-neutral-content">
                    <aside className="items-center ">
                        <p>
                            Copyright © 2023 Food-fiesta,  All right reserved.
                        </p>
                    </aside>
                </div>

            </footer >
        </>
    )
}

export default Footer