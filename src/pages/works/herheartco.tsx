import React from 'react';
import Image from "next/image";

export default function MSA() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#f7b4a4] to-white flex-grow flex flex-col items-center pt-14 md:py-20">
                <div className="flex flex-col items-center w-full max-w-7xl px-8 md:flex-row md:justify-center lg:justify-evenly">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <p className="text-night pb-1 text-4xl lg:text-5xl">HerHeartCo</p>
                        <p className="text-night text-2xl md:text-nowrap lg:text-4xl">Mobile Application</p>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-auto">
                        <Image
                            src="/project-thumbnails/hhc-logo.svg"
                            alt="HerHeartCo Logo"
                            sizes="(min-width:320px) 40vw, (min-width:768px) 50vw, (min-width:1024px) 30vw"
                            width={0}
                            height={0}
                            style={{ width: '80%', height: 'auto' }}
                            priority={false}
                        />
                    </div>
                </div>
                <div className="border my-12 border-night w-4/5 lg:max-w-7xl lg:w-full" />
                <div className="text-sm grid grid-rows-1 justify-items-center max-w-7xl mx-auto px-8 text-center grid-cols-2 md:grid-cols-3 md:gap-y-8 lg:grid-cols-[repeat(5,1fr)] lg:gap-x-8 lg:text-lg lg:text-left">
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Role</p>
                        <p className="text-night">Full Stack Engineer</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Duration</p>
                        <p className="text-night">6 months</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Team</p>
                        <p className="text-night">1 Product Manager</p>
                        <p className="text-night">1 UX Researcher</p>
                        <p className="text-night">1 Data Visualization Engineer</p>
                        <p className="text-night">2 Full Stack Engineers</p>
                    </div>
                    <div className="mb-2 md:mb-0">
                        <p className="text-davys-grey">Skills</p>
                        <p className="text-night">React Native</p>
                        <p className="text-night">JavaScript</p>
                        <p className="text-night">HTML & CSS</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Tools</p>
                        <p className="text-night">VSCode</p>
                    </div>
                </div>
            </div>
            <div className="self-center max-w-4xl mt-10 mb-8">
                <p className="text-davys-grey text-2xl  text-center md:px-20 md:text-4xl lg:text-left">
                    <i>sorry! this page is still under construction...</i>
                </p>
            </div>
        </div>
    );
}