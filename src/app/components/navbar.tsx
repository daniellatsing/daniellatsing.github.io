import Image from "next/image";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { FloatingNav } from "./floating-navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useCallback } from 'react';
import { useMediaQuery } from "@mui/material";
import { IconHome, IconUser, IconFolders } from '@tabler/icons-react';

export default function NavBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();
    const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');

    type AsyncFunction = (...args: any[]) => Promise<void>;

    const debounce = (func: AsyncFunction, delay: number | undefined) => {
        let timeoutId: NodeJS.Timeout | undefined;
        return (...args: any[]) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWorksClick = useCallback(debounce(async () => {
        if (router.isFallback || router.asPath === '/works') return; 
    
        try {
            if (router.pathname === "/") {
                scrollToSection('works');
            } else {
                await router.push("/");
                scrollToSection('works');
            }
        } catch (error) {
            console.error("Error during navigation:", error);
        }
    }, 300), [router]);

    const navItems = [
        {
            name: "home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-night dark:text-white" />
        },
        {
            name: "about",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-night dark:text-white" />
        },
        {
            name: "works",
            link: "#works",
            icon: <IconFolders className="h-4 w-4 text-night dark:text-white" />
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
            name: "MotorVerse", 
            link: "/works/motorverse" 
        },
        { 
            name: "Dear.M Journal", 
            link: "/works/dear-m-journal" 
        },
        // {
        //     name: "Indicators of Diabetes",
        //     link: "/works/indicators-of-diabetes"
        // }
    ];

    return (
        <nav className="relative w-full font-satoshi container mx-auto flex place-content-end items-center p-4 my-4 md:my-8">
            <Link href="/" className="absolute left-0 pl-4 hidden md:block">
            <Image 
                src="/logo.svg"
                alt="Logo" 
                width={0}
                height={0}
                className="w-[75%] h-auto dark:hidden"
                priority={true} 
            />
            <Image 
                src="/logo-dark.svg"
                alt="Logo Dark" 
                width={0}
                height={0}
                className="hidden w-[75%] h-auto dark:block"
                priority={true} 
            />
            </Link>
            <div className="flex justify-center gap-4 items-center font-bold text-lg text-night md:text-2xl md:gap-8">
                <Link href="/" className="hover:text-ash-gray transition duration-300 ease-in-out transform hover:-translate-y-1 md:hidden dark:hover:text-ash-gray dark:text-white">home</Link>
                <Link href="/about" className="hover:text-ash-gray transition duration-300 ease-in-out transform hover:-translate-y-1 dark:hover:text-ash-gray dark:text-white">about</Link>
                {!isMobileOrTablet ? (
                    <div 
                        className="hover:text-ash-gray transition duration-300 ease-in-out transform hover:-translate-y-1 dark:hover:text-ash-gray dark:text-white"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button type="button" id="menu-button" aria-expanded={dropdownOpen} aria-haspopup="true" onClick={toggleDropdown}>
                            works
                            <ExpandMoreRoundedIcon className={`size-8 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {dropdownOpen && (
                            <div 
                                className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-46 h-auto dark:bg-night dark:divide-gray-800 px-2" 
                                role="menu" 
                                aria-orientation="vertical" 
                                aria-labelledby="menu-button"
                            >
                                <div className="py-2 text-sm text-night dark:text-white">
                                    {worksItems.map((item) => (
                                        <Link 
                                            key={item.name} 
                                            href={item.link} 
                                            className="block px-2 py-3 hover:bg-gray-50 dark:hover:bg-night dark:hover:text-ash-gray hover:text-ash-gray whitespace-nowrap" 
                                            tabIndex={0}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button 
                        type="button" 
                        className="hover:text-ash-gray transition duration-300 ease-in-out transform hover:-translate-y-1 dark:hover:text-ash-gray dark:text-white"
                        onClick={handleWorksClick}
                    >
                        works
                    </button>
                )}
                <button className="border border-davys-gray py-1 px-3 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md md:py-2 md:px-4">
                    <Link 
                        href="https://drive.google.com/file/d/1LTKQe8D7K2CPIuEN9msG08PbAZuoispc/view?usp=sharing" 
                        className="hover:text-ash-gray dark:hover:text-ash-gray dark:text-white place-self-center"
                    >
                        resume
                    </Link>
                </button>
            </div>
            <FloatingNav navItems={navItems} onWorksClick={handleWorksClick} />
        </nav>
    );
}