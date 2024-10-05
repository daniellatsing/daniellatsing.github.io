import React from 'react';
import Image from "next/image";
import JobList from '@/app/components/jobList.js';

export default function About() {
    const bio_blurb = (
        <p className="text-xl text-night mt-4">
            I am a graduate of the 
            <a href="https://www.washington.edu/" className="text-paynes-gray font-bold"> University of Washington</a>,
            majoring in Informatics with a concentration in software development 
            and human-centered interaction. I have interests in software development,
            app development, and game development, as well as UX design.
        </p>
    );

    const tech_stack = [
        "Java",
        "Javascript",
        "React.js",
        "React Native",
        "HTML & CSS",
        "Python",
        "R",
        "SQL"
    ];

    const hobbies = (
        <p className="text-xl text-paynes-gray font-medium mt-11">
            In my free time, my interests include visiting coffee 
            shops and cafes, playing video games, and watching the 
            latest K-dramas and variety shows!
        </p>
    );

    return(
        <div id="about" className="flex min-h-screen flex-col place-items-center py-24 font-satoshi">
            <div className="z-10 w-full max-w-7xl text-sm lg:flex flex-col mb-24">
                <p className="text-5xl text-reseda-green font-bold font-satoshi pb-10 whitespace-nowrap">about me</p>
                <div className="flex flex-row px-20">
                    <div className="flex-col max-w-lg">
                        {[bio_blurb]}
                        <p className="text-xl text-night mt-11">Here are some technologies I have been working with:</p>
                        <ul className="text-lg text-night mt-11 grid grid-cols-2 gap-4">
                            {tech_stack.map(function (tech_item, i) {
                                return (
                                    <li className="text-night">
                                        <span className="text-paynes-gray px-2">▹ </span>
                                        {tech_item}
                                    </li>
                                );
                            })}
                        </ul>
                        {[hobbies]}
                    </div>
                    <div className="justify-center pl-48 place-self-center">
                        <Image
                            src="/snoopy-reading-yotsuba.jpg"
                            alt="Snoopy reading yotsuba"
                            width={400}
                            height={400}
                            className="rounded shadow-xl"
                            priority={false}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-16 mb-32" />
            <div className="z-10 w-full max-w-7xl text-sm lg:flex flex-col">
                <p className="text-5xl text-reseda-green font-bold font-satoshi pb-10 mt-2 whitespace-nowrap"><i>What</i> have I done?</p>
                {/* <JobList /> */}
            </div>
        </div>
    )
}