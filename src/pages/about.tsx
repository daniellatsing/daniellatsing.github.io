import React from 'react';
import Image from "next/image";
import Experience from "@/app/components/experience";

export default function About() {
    const bio_blurb = (
        <p className="text-xl text-night mt-4 md:text-center md:justify-items-center md:text-lg lg:text-left">
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
        <p className="text-xl text-paynes-gray font-medium mt-11 md:text-center md:text-lg md:pb-8 lg:pb-0 lg:text-left">
            In my free time, my interests include visiting coffee 
            shops and cafes, playing video games, and watching the 
            latest K-dramas and variety shows!
        </p>
    );

    return(
        <div id="about" className="flex min-h-screen flex-col place-items-center font-satoshi md:py-8 lg:py-24">
            <div className="z-10 w-full max-w-6xl text-sm lg:flex flex-col px-20 md:mb-12 lg:mb-24">
                <h3 className="text-5xl text-reseda-green font-bold font-satoshi pb-10 whitespace-nowrap md:text-5xl md:text-center lg:text-left">about me</h3>
                <div className="flex lg:flex-row md:flex-col md:place-items-center">
                    <div className="flex-col max-w-lg">
                        {[bio_blurb]}
                        <p className="text-xl text-night mt-11 md:text-center md:text-lg lg:text-left">Here are some technologies I have been working with:</p>
                        <ul className="text-lg text-night mt-11 grid grid-cols-2 gap-4">
                            {tech_stack.map(function (tech_item, i) {
                                return (
                                    <li key={i} className="text-night">
                                        <span className="text-paynes-gray px-2">▹ </span>
                                        {tech_item}
                                    </li>
                                );
                            })}
                        </ul>
                        {[hobbies]}
                    </div>
                    <div className="justify-center place-self-center lg:pl-20">
                        <Image
                            src="/snoopy-reading-yotsuba.jpg"
                            alt="Snoopy reading yotsuba"
                            sizes="(min-width:320px) 50vw, (min-width:768px) 83.33vw, (min-width:1024px) 62.5vw"
                            width={0}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                            className="rounded shadow-xl md:"
                            priority={false}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-16 md:mb-20" />
            <div className="z-10 w-full max-w-5xl text-sm lg:flex flex-col">
                <p className="text-5xl text-reseda-green font-bold font-satoshi pb-4 mt-2 whitespace-nowrap md:text-center md:text-4xl lg:place-self-end"><i>what</i> have I done?</p>
                <Experience />
            </div>
        </div>
    )
}