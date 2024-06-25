import Image from 'next/image';
import Logo from "../logo.svg";

export default function NavBar() {

    return (
        <div className="w-full font-satoshi text-2xl container mx-auto font-general-regular flex place-content-end items-center mt-14 mb-12 sm:mb-28">
            <div className="absolute left-16 h-20 w-20">
                <a href="/">
                    <Image src={Logo} alt="Logo" layout="fill" objectFit="contain" />
                </a>
            </div>
            <div className="flex justify-center gap-4 sm:gap-8 items-center font-bold text-2xl text-night">
                <a href="#home" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1">home</a>
                <a href="#about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1">about</a>
                <a href="#experience" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1">experience</a>
                <a href="#works" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition duration-300 ease-in-out transform hover:-translate-y-1">works</a>
            </div>
        </div>
    );
}