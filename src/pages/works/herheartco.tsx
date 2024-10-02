import React from 'react';
import Image from "next/image";

export default function MSA() {

    return (
        <div className="flex flex-col font-satoshi font-bold mx-auto">
            <div className="bg-gradient-to-b from-[#f7b4a4] to-white self-center flex-grow flex flex-col items-center py-20">
                <div className="flex flex-row justify-evenly items-center w-screen px-40 mx-auto">
                    <div>
                        <p className="text-night text-6xl pb-1">HerHeartCo</p>
                        <p className="text-night text-4xl">Mobile Application</p>
                    </div>
                    <div>
                        <Image
                            src="/project-thumbnails/hhc-logo.svg"
                            alt="HerHeartCo Logo"
                            width={376}
                            height={50}
                            priority={false}
                        />
                    </div>
                </div>
                <div className="border max-w-7xl w-full my-12 border-night"></div>
                <div className="text-lg grid grid-rows-1 grid-cols-[repeat(5,1fr)] gap-x-8 justify-items-center max-w-7xl mx-auto px-8">
                    <div>
                        <p className="text-davys-grey">Role</p>
                        <p className="text-night">Full Stack Engineer</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Duration</p>
                        <p className="text-night">6 months</p>
                    </div>
                    <div>
                        <p className="text-davys-grey">Team</p>
                        <p className="text-night">1 Product Manager</p>
                        <p className="text-night">1 UX Researcher</p>
                        <p className="text-night">1 Data Visualization Engineer</p>
                        <p className="text-night">2 Full Stack Engineers</p>
                    </div>
                    <div>
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
            <div className="self-center max-w-4xl mt-20 mb-8">
                <p className="text-davys-grey text-4xl">
                    <i>sorry! this page is still under construction...</i>
                </p>
            </div>
        </div>
    );
}