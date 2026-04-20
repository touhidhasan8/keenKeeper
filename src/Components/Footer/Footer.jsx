import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white mt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
                <div className="text-center border-b border-[#3d6d5b] pb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
                        KeenKeeper
                    </h1>

                    <p className="text-[#c8f7d9] mt-4 max-w-2xl mx-auto text-sm md:text-base px-4 leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and
                        nurture the relationships that matter most.
                    </p>
                    
                    <div className="mt-2">
                        <h3 className="font-bold text-lg mb-4">Social Links</h3>
                        <div className="flex justify-center gap-6 text-2xl sm:text-3xl">
                            <a href="#" className="hover:text-[#acf5ca] transition duration-300 transform hover:scale-110">
                                <FaInstagramSquare />
                            </a>
                            <a href="#" className="hover:text-[#acf5ca] transition duration-300 transform hover:scale-110">
                                <FaFacebook />
                            </a>
                            <a href="#" className="hover:text-[#acf5ca] transition duration-300 transform hover:scale-110">
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-3 text-xs sm:text-sm text-[#c8f7d9]">
                    <p className="order-2 md:order-1 text-center">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 order-1 md:order-2">
                        <a href="#" className="hover:text-white transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-200">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-200">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;