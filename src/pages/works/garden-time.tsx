import React from 'react';
import Image from "next/image";

export default function GardenTime() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#c7dac8] to-white flex-grow flex flex-col items-center pt-14 md:py-20">
                <div className="flex flex-col justify-evenly items-center w-full max-w-7xl px-8 md:flex-row md:justify-center lg:justify-evenly">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <p className="text-night pb-1 text-3xl lg:text-5xl text-nowrap">Garden Time</p>
                        <p className="text-night text-lg lg:text-4xl text-pretty">Pomodoro and To-do List Web Application</p>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-auto">
                        <Image
                            src="/project-thumbnails/garden-time-logo.png"
                            alt="Garden Time Logo"
                            sizes="(min-width:320px) 20vw, (min-width:768px) 50vw, (min-width:1024px) 30vw"
                            width={0}
                            height={0}
                            style={{ width: '40%', height: 'auto' }}
                            priority={false}
                        />
                        <p className="sr-only">
                            <a href="https://www.flaticon.com/free-icons/tomato" title="tomato icons">Tomato icons created by Pixelmeetup - Flaticon</a>
                        </p>
                    </div>
                </div>
                <div className="border my-12 border-night w-4/5 lg:max-w-7xl lg:w-full" />
                <div className="text-sm grid grid-rows-1 justify-items-center max-w-7xl mx-auto px-8 text-center grid-cols-2 md:grid-cols-3 md:gap-y-8 lg:grid-cols-[repeat(6,1fr)] lg:gap-x-8 lg:text-lg lg:text-left">
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Role</p>
                        <p className="text-night">Full Stack Engineer</p>
                        <p className="text-night">UX Designer</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Duration</p>
                        <p className="text-night">3 months</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Team</p>
                        <p className="text-night">4 Software Engineers</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Skills</p>
                        <p className="text-night">Information Architecture</p>
                        <p className="text-night">Wireframing & Prototyping</p>
                        <p className="text-night">React</p>
                        <p className="text-night">JavaScript</p>
                        <p className="text-night">HTML & CSS</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Tools</p>
                        <p className="text-night">Figma</p>
                        <p className="text-night">FigJam</p>
                        <p className="text-night">VSCode</p>
                        <p className="text-night">Microsoft Azure</p>
                        <p className="text-night">MongoDB</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="bg-night divide-y divide-gray-100 w-46 h-auto dark:bg-gray-700 dark:divide-gray-600 px-4 py-2 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md lg:bg-white">
                            <a href="https://github.com/info441-wi24/garden-time" className="text-white lg:text-night">View Project</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="self-center max-w-4xl mt-20 mb-8">
                <p className="text-davys-grey text-2xl text-center md:px-20 lg:text-4xl lg:text-left">
                    <i>sorry! this page is still under construction...</i>
                </p>
            </div>
        </div>
    );
}