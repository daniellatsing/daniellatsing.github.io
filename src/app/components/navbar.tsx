import Image from 'next/image';
import Logo from "../logo.svg";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';import { FloatingNav } from './ui/floating-navbar';

import React, { useState } from 'react';

export default function NavBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const navItems = [
        {
            name: "home",
            link: "/"
        },
        {
            name: "about",
            link: "/about"
        },
        {
            name: "works",
            link: "/works"
        }
    ];

    const worksItems = [
        { 
            name: "HerHeartCo", 
            link: "/works/herheartco" 
        },
        { 
            name: "Garden Time", 
            link: "/works/garden-time" 
        },
        { 
            name: "Muslim Student Association", 
            link: "/works/msa" 
        },
        { 
            name: "Carmax", 
            link: "/works/carmax" 
        },
        { 
            name: "Dear.m Journal", 
            link: "/works/dear-m-journal" 
        }
    ];

    return (
        <nav className="w-full font-satoshi text-2xl container mx-auto font-general-regular flex place-content-end items-center mt-14 mb-12 sm:mb-28">
            <div className="absolute left-16 h-20 w-20">
                <a href="/">
                    <Image src={Logo} alt="Logo" layout="fill" objectFit="contain" />
                </a>
            </div>
            <div className="flex justify-center sm:gap-8 items-center font-bold text-2xl text-night">
                <a href="/" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1">home</a>
                <a href="/about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1">about</a>
                <div className="relative">
                    <button type="button" id="menu-button" aria-expanded={dropdownOpen} aria-haspopup="true" onClick={toggleDropdown}>
                        works
                        <ExpandMoreRoundedIcon className="ml-1" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="py-2 text-sm text-night">
                                {worksItems.map((item) => (
                                    <a key={item.name} href={item.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-indigo-500 dark:hover:text-indigo-400">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <button className="border border-davys-gray py-2 px-4 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    <a href="https://drive.google.com/file/d/1aXOJIailit-5V0jgALfyzuRcnFywWBiG/view?usp=sharing" className="hover:text-indigo-500 dark:hover:text-indigo-400 self-center">resume</a>
                </button>
            </div>
            <FloatingNav navItems={navItems}/>
        </nav>
    );
}