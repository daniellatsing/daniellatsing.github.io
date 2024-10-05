import React from 'react';
import Image from "next/image";

export default function DearMJournal() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#f7e5f0] to-white self-center flex-grow flex flex-col items-center py-20">
                <div className="flex flex-row justify-evenly items-center w-screen px-40 mx-auto">
                    <div>
                        <p className="text-night text-6xl pb-1">Dear.M Journal</p>
                        <p className="text-night text-4xl">Journal Web Application</p>
                    </div>
                    <div>
                        <Image
                            src="/project-thumbnails/dearm-logo.svg"
                            alt="Dear.M Journal Logo"
                            width={175}
                            height={175}
                            priority={false}
                        />
                    </div>
                </div>
                <div className="border max-w-7xl w-full my-12 border-night"></div>
                <div className="text-lg grid grid-rows-1 grid-cols-[repeat(6,1fr)] gap-x-8 justify-items-center max-w-7xl mx-auto px-8">
                    <div>
                        <p className="text-davys-grey">Role</p>
                        <p className="text-night">Front End Engineer</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Duration</p>
                        <p className="text-night">3 months</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Team</p>
                        <p className="text-night">3 Front End Engineers</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Skills</p>
                        <p className="text-night">React</p>
                        <p className="text-night">JavaScript</p>
                        <p className="text-night">HTML & CSS</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Tools</p>
                        <p className="text-night">VSCode</p>
                        <p className="text-night">Figma</p>
                    </div>
                    <div>
                        <button className="bg-night divide-y divide-gray-100 w-46 h-auto dark:bg-gray-700 dark:divide-gray-600 px-4 py-2 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                            <a href="https://dearm-journal-a829a.web.app/" className="text-white">View Project</a>
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