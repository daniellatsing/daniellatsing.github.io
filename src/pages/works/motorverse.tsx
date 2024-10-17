import React from 'react';
import Image from "next/image";

export default function MotorVerse() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#576699] to-white flex-grow flex flex-col items-center pt-14 md:py-20">
                <div className="flex flex-col items-center w-full max-w-7xl px-8 md:flex-row md:justify-center lg:justify-evenly">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <p className="text-white pb-1 text-4xl lg:text-5xl">MotorVerse</p>
                        <p className="text-night text-2xl md:text-nowrap lg:text-4xl">CarMax Mobile App Redesign</p>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-auto">
                        <Image
                            src="/project-thumbnails/motorverse-logo.png"
                            alt="MotorVerse Logo"
                            sizes="(min-width:320px) 40vw, (min-width:768px) 50vw, (min-width:1024px) 30vw"
                            width={0}
                            height={0}
                            style={{ width: '40%', height: 'auto' }}
                            priority={false}
                        />
                    </div>
                </div>
                <div className="border my-12 border-french-gray w-4/5 lg:max-w-7xl lg:w-full" />
                <div className="text-sm grid grid-rows-1 justify-items-center max-w-7xl mx-auto px-8 text-center grid-cols-2 md:grid-cols-3 md:gap-y-8 lg:grid-cols-[repeat(6,1fr)] lg:gap-x-8 lg:text-lg lg:text-left">
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Role</p>
                        <p className="text-night">UX Researcher/Designer</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Duration</p>
                        <p className="text-night">3 weeks</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Teammates</p>
                        <p className="text-night">Erica Huynh</p>
                        <p className="text-night">Clarabelle Mckeirnan</p>
                        <p className="text-night">Sydney Morales</p>
                        <p className="text-night">Cammi Pham</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Skills</p>
                        <p className="text-night">User Personas</p>
                        <p className="text-night">Wireframing & Prototyping</p>
                        <p className="text-night">User Journey Mapping</p>
                        <p className="text-night">User Research</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Tools</p>
                        <p className="text-night">Figma</p>
                        <p className="text-night">FigJam</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="bg-night divide-y divide-gray-100 w-46 h-auto dark:bg-gray-700 dark:divide-gray-600 px-4 py-2 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md md:bg-white">
                            <a href="https://www.figma.com/proto/83jCeGmfTIBlDIhOjcGOEz/Final-Project%3A-MOTORVERSE-Wireframe?page-id=0%3A1&node-id=55-299&starting-point-node-id=1%3A10&t=VwlBSrdC0TSWglJk-1" className="text-white md:text-night">View Project</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="self-center max-w-4xl mt-10 mb-8">
                <p className="text-davys-grey text-2xl text-center md:px-20 md:text-4xl lg:text-left">
                    <i>sorry! this page is still under construction...</i>
                </p>
            </div>
        </div>
    );
}