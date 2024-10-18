import React from 'react';
import Image from "next/image";

export default function MSA() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#ae8db4] to-white dark:to-night flex-grow flex flex-col items-center pt-14 lg:py-20">
                <div className="flex flex-col items-center w-full max-w-7xl px-8 md:flex-row md:justify-center lg:justify-evenly">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <p className="text-white pb-1 text-4xl lg:text-5xl">Muslim Student Association</p>
                        <p className="text-night text-2xl md:text-nowrap lg:text-4xl dark:text-white">MSA Website Redesign</p>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-auto">
                        <Image
                            src="/project-thumbnails/msa-logo.png"
                            alt="Muslim Student Association Logo"
                            sizes="(min-width:320px) 20vw, (min-width:768px) 50vw, (min-width:1024px) 30vw"
                            width={0}
                            height={0}
                            style={{ width: '40%', height: 'auto' }}
                            priority={false}
                        />
                    </div>
                </div>
                <div className="border my-12 border-night w-4/5 lg:max-w-7xl lg:w-full dark:border-white" />
                <div className="text-sm grid grid-rows-1 justify-items-center max-w-7xl mx-auto px-8 text-center grid-cols-2 md:grid-cols-3 md:gap-y-8 lg:grid-cols-[repeat(6,1fr)] lg:gap-x-8 lg:text-lg lg:text-left">
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey dark:text-neutral-300">Role</p>
                        <p className="text-night dark:text-white">Full Stack Engineer</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey dark:text-neutral-300">Duration</p>
                        <p className="text-night dark:text-white">6 months</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey dark:text-neutral-300">Team</p>
                        <p className="text-night dark:text-white">1 Product Lead</p>
                        <p className="text-night dark:text-white">4 Software Engineers</p>
                        <p className="text-night dark:text-white">5 Designers</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey dark:text-neutral-300">Skills</p>
                        <p className="text-night dark:text-white">React</p>
                        <p className="text-night dark:text-white">JavaScript</p>
                        <p className="text-night dark:text-white">HTML & CSS</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey dark:text-neutral-300">Tools</p>
                        <p className="text-night dark:text-white">VSCode</p>
                        <p className="text-night dark:text-white">Sanity</p>
                        <p className="text-night dark:text-white">Vercel</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="bg-night divide-y divide-gray-100 w-46 h-auto dark:bg-white dark:divide-gray-600 px-4 py-2 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md lg:bg-white">
                            <a href="https://github.com/webimpactuw/muslim-student-assoc" className="text-white lg:text-night">View Project</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="self-center max-w-4xl mt-10 mb-8">
                <p className="text-davys-grey text-2xl text-center md:px-20 lg:text-4xl lg:text-left">
                    <i>sorry! this page is still under construction...</i>
                </p>
            </div>
        </div>
    );
}