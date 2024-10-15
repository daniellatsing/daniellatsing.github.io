import React from 'react';
import Image from "next/image";

export default function GardenTime() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#c7dac8] to-white flex-grow flex flex-col items-center py-20">
                <div className="flex flex-row justify-evenly items-center w-screen px-40 mx-auto">
                    <div>
                        <p className="text-night pb-1 md:text-4xl lg:text-6xl">Garden Time</p>
                        <p className="text-night md:text-2xl lg:text-4xl">Pomodoro and To-do List Web Application</p>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-auto">
                        <Image
                            src="/project-thumbnails/garden-time-logo.png"
                            alt="Garden Time Logo"
                            sizes="(min-width:320px) 50vw, (min-width:768px) 50vw, (min-width:1024px) 30vw"
                            width={0}
                            height={0}
                            style={{ width: '70%', height: 'auto' }}
                            priority={false}
                        />
                        <p className="sr-only">
                            <a href="https://www.flaticon.com/free-icons/tomato" title="tomato icons">Tomato icons created by Pixelmeetup - Flaticon</a>
                        </p>
                    </div>
                </div>
                <div className="border max-w-7xl w-full my-12 border-night"></div>
                <div className="text-md grid grid-rows-1 justify-items-center max-w-7xl mx-auto px-8 text-center md:grid-cols-3 md:gap-y-8 lg:grid-cols-[repeat(5,1fr)] lg:gap-x-8 lg:text-lg lg:text-left">
                    <div>
                        <p className="text-davys-grey">Role</p>
                        <p className="text-night">Full Stack Engineer</p>
                        <p className="text-night">UX Designer</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Duration</p>
                        <p className="text-night">3 months</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Team</p>
                        <p className="text-night">4 Software Engineers</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Skills</p>
                        <p className="text-night">Information Architecture</p>
                        <p className="text-night">Wireframing & Prototyping</p>
                        <p className="text-night">React</p>
                        <p className="text-night">JavaScript</p>
                        <p className="text-night">HTML & CSS</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Tools</p>
                        <p className="text-night">Figma</p>
                        <p className="text-night">FigJam</p>
                        <p className="text-night">VSCode</p>
                        <p className="text-night">Microsoft Azure</p>
                        <p className="text-night">MongoDB</p>
                    </div>
                    <div>
                        <button className="bg-white divide-y divide-gray-100 w-46 h-auto dark:bg-gray-700 dark:divide-gray-600 px-4 py-2 rounded-full shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
                            <a href="https://github.com/info441-wi24/garden-time" className="text-night">View Project</a>
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