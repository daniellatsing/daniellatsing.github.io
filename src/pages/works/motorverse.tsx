import React from 'react';
import Image from "next/image";

export default function MotorVerse() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#576699] to-white self-center flex-grow flex flex-col items-center py-14">
                <div className="flex flex-row justify-evenly items-center w-screen px-40 mx-auto">
                    <div>
                        <p className="text-white text-6xl pb-1">MotorVerse</p>
                        <p className="text-night text-4xl">CarMax Mobile App Redesign</p>
                    </div>
                    <div>
                        <Image
                            src="/project-thumbnails/motorverse-logo.png"
                            alt="MotorVerse Logo"
                            width={250}
                            height={250}
                            priority={false}
                        />
                    </div>
                </div>
                <div className="border max-w-7xl w-full my-12 border-french-gray"></div>
                <div className="text-lg grid grid-rows-1 grid-cols-[repeat(6,1fr)] gap-x-8 justify-items-center max-w-7xl mx-auto px-8">
                    <div>
                        <p className="text-davys-grey">Role</p>
                        <p className="text-night">UX Researcher/Designer</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Duration</p>
                        <p className="text-night">3 weeks</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Teammates</p>
                        <p className="text-night">Erica Huynh</p>
                        <p className="text-night">Clarabelle Mckeirnan</p>
                        <p className="text-night">Sydney Morales</p>
                        <p className="text-night">Cammi Pham</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Skills</p>
                        <p className="text-night">User Personas</p>
                        <p className="text-night">Wireframing & Prototyping</p>
                        <p className="text-night">User Journey Mapping</p>
                        <p className="text-night">User Research</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Tools</p>
                        <p className="text-night">Figma</p>
                        <p className="text-night">FigJam</p>
                    </div>
                    <div>
                        <button className="bg-white divide-y divide-gray-100 w-46 h-auto dark:bg-gray-700 dark:divide-gray-600 px-4 py-2 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                            <a href="https://www.figma.com/proto/83jCeGmfTIBlDIhOjcGOEz/Final-Project%3A-MOTORVERSE-Wireframe?page-id=0%3A1&node-id=55-299&starting-point-node-id=1%3A10&t=VwlBSrdC0TSWglJk-1" className="text-night">View Project</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="self-center max-w-4xl mt-20 mb-8">
                <p className="text-davys-grey text-4xl">
                    <i>sorry! this page is still under construction...</i>
                </p>
            </div>
        </div>
    );
}