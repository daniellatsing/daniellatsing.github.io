import React from 'react';
import Image from "next/image";

export default function GardenTime() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#c7dac8] to-white self-center flex-grow flex flex-col items-center py-20">
                <div className="flex flex-row justify-evenly items-center w-screen px-40 mx-auto">
                    <div>
                        <p className="text-night text-6xl pb-1">Garden Time</p>
                        <p className="text-night text-4xl">Pomodoro and To-do List Web Application</p>
                    </div>
                    <div>
                        <Image
                            src="/project-thumbnails/garden-time-logo.png"
                            alt="Garden Time Logo Icon created by Pixelmeetup - Flaticon"
                            width={175}
                            height={175}
                            priority={false}
                        />
                        <p className="sr-only">
                            <a href="https://www.flaticon.com/free-icons/tomato" title="tomato icons">Tomato icons created by Pixelmeetup - Flaticon</a>
                        </p>
                    </div>
                </div>
                <div className="border max-w-7xl w-full my-12 border-night"></div>
                <div className="text-lg grid grid-rows-1 grid-cols-[repeat(5,1fr)] gap-x-8 justify-items-center max-w-7xl mx-auto px-8">
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