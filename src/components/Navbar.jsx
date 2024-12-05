import React, {useState} from "react";
import Image from "../assets/image.PNG";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white font-poppins text-sm ">
            <ul className="block md:hidden">
                <li className="mr-4 mt-3">
                    <img src={Image} alt="navbar logo" className="w-28 h-auto" />
                </li>
                </ul>

            <ul className="hidden md:flex items-center">
                <li className="mr-4 mt-3">
                    <img src={Image} alt="navbar logo" className="w-28 h-auto" />
                </li>
                <li className="p-3 hover:text-[#e14d41] ease-in-out duration-500 font-semibold">
                    <Link to="/">
                    Home
                    </Link>
                    </li>
                <li className="p-3 hover:text-[#e14d41] ease-in-out duration-500 font-semibold">
                    <Link to="/about">
                    About
                    </Link>
                </li>
                <li className="p-3 hover:text-[#e14d41] ease-in-out duration-500 font-semibold">
                    <Link to="/pricing">Pricing</Link></li>
            </ul>
            <ul className="hidden md:flex">
            <li className="ml-1 pt-6">
                    <Link to="/contact">
                        <button className="bg-[#e14d41] hover:bg-[#95362f] ease-in-out duration-400 py-2 px-6 font-bold rounded-full text-sm">
                            Contact Us
                        </button>
                    </Link>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />} 

                
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-red-500 ease-in-out duration-700 bg-black" : "fixed left-[-100%]"}>
                <ul className="pt-24 uppercase p-5">
                <li className="p-3 hover:text-[#e14d41] ease-in-out duration-500 border-b border-gray-400">
                    <Link to="/home">Home</Link>
                </li>
                <li className="p-3 hover:text-[#e14d41] ease-in-out duration-500 border-b border-gray-400">
                    <Link to="/about">About</Link>
                </li>
                <li className="p-3 hover:text-[#e14d41] ease-in-out duration-500 border-b border-gray-400">
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li className="ml-1 pt-6">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="ml-1 pt-6">
                    <Link to="/contact">
                        <button className="bg-[#e14d41] hover:bg-[#95362f] ease-in-out duration-400 py-2 px-6 font-bold rounded-full text-sm">
                            Contact Us
                        </button>
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    );



};

export default Navbar;
