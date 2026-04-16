import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import LogoImg from '../../assets/logo.png'

const Navbar = () => {
    const navLinks = <div className='flex flex-col md:flex-row gap-4 '>
        <NavLink
            to="/"
            className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                 ${isActive ? "bg-[#244D3F] text-white" : "text-gray-700"}`}>
            <MdDashboard className="text-lg" />
            <span>Home</span>
        </NavLink>
        <NavLink
            to="/timeline"
            className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                 ${isActive ? "bg-[#244D3F] text-white" : "text-gray-700"}`}>
            < IoTimeOutline className="text-lg" />
            <span>Timeline</span>
        </NavLink>
        <NavLink
            to="/stats"
            className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                 ${isActive ? "bg-[#244D3F] text-white" : "text-gray-700"}`}>
            < FaChartLine className="text-lg" />
            <span>Stats</span>
        </NavLink>
    </div>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'}>  <img src={LogoImg} alt="logo image " /></Link>
            </div>

            <div className="navbar-end hidden md:flex">
                {navLinks}
            </div>
        </div>
    );
};

export default Navbar;