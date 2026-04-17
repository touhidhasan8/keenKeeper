import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="text-center border-b border-[#3d6d5b] pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
                        KeenKeeper
                    </h1>

                    <p className="text-[#c8f7d9] mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and
                        nurture the relationships that matter most.
                    </p>
                    <h1 className='font-bold text-xl'> Social Links </h1>
                    <div className="flex justify-center gap-5 text-2xl mt-2">
                        <a href="#" className="hover:text-[#acf5ca] transition duration-300">

                            <FaInstagramSquare />
                        </a>

                        <a href="#" className="hover:text-[#acf5ca] transition duration-300">
                            <FaFacebook />
                        </a>

                        <a href="#" className="hover:text-[#acf5ca] transition duration-300">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-sm text-[#c8f7d9]">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-white transition">
                            Terms of Service
                        </a>

                        <a href="#" className="hover:text-white transition">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;