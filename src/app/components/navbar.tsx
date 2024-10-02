import Image from "next/image";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { FloatingNav } from "./floating-navbar";

import React, { useState } from 'react';

export default function NavBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleScrollToWorks = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const section = document.getElementById('works');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
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
            link: "#works",
            onClick: handleScrollToWorks
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
        },
        {
            name: "Indicators of Diabetes",
            link: "/works/indicators-of-diabetes"
        }
    ];

    return (
        <nav className="relative w-full font-satoshi text-2xl container mx-auto font-general-regular flex place-content-end items-center mt-14 mb-16">
            <a href="/" className="absolute left-1">
                <Image 
                    src="/logo.svg" 
                    alt="Logo" 
                    height={50}
                    width={50}
                    style={{ objectFit: "contain", width: "auto" }} 
                    priority={true} 
                />
            </a>
            <div className="flex justify-center sm:gap-8 items-center font-bold text-2xl text-night">
                <a href="/" className="hover:text-ash-gray dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1">home</a>
                <a href="/about" className="hover:text-ash-gray dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1">about</a>
                <div 
                    className="hover:text-ash-gray dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <button type="button" id="menu-button" aria-expanded={dropdownOpen} aria-haspopup="true" onClick={toggleDropdown}>
                        works
                        <ExpandMoreRoundedIcon className={`size-8 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                        <div 
                            className="absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-46 h-auto dark:bg-gray-700 dark:divide-gray-600" 
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="menu-button"
                        >
                            <div className="py-2 text-sm text-night">
                                {worksItems.map((item) => (
                                    <a key={item.name} href={item.link} className="block px- py-3 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white hover:text-ash-gray dark:hover:text-indigo-400 whitespace-nowrap" tabIndex={0}>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <button className="border border-davys-gray py-2 px-4 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                    <a href="https://drive.google.com/file/d/1LTKQe8D7K2CPIuEN9msG08PbAZuoispc/view?usp=sharing" className="hover:text-ash-gray dark:hover:text-indigo-400 place-self-center">resume</a>
                </button>
            </div>
            <FloatingNav navItems={navItems} />
        </nav>
    );
}