import React from 'react';
import Image from "next/image";
import Experience from "@/app/components/experience";

export default function About() {
    const bio_blurb = (
        <p className="text-base text-night text-center md:justify-items-center md:text-lg lg:mt-2 lg:text-left">
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
        <p className="text-base text-paynes-gray font-bold md:font-medium mt-8 md:text-center md:mt-11 md:text-lg md:pb-8 lg:pb-0 lg:text-left lg:text-xl">
            In my free time, my interests include visiting coffee 
            shops and cafes, playing video games, and watching the 
            latest K-dramas and variety shows!
        </p>
    );

    return(
        <div id="about" className="flex min-h-screen flex-col place-items-center font-satoshi md:py-8 lg:py-24">
            <div className="z-10 w-full max-w-6xl text-sm lg:flex flex-col px-20 md:mb-12 lg:mb-24">
                <h3 className="text-4xl text-reseda-green font-bold font-satoshi mb-4 whitespace-nowrap text-center md:mb-10 lg:text-left lg:text-5xl">about me</h3>
                <div className="flex flex-col md:place-items-center lg:flex-row">
                    <div className="flex-col max-w-lg">
                        {[bio_blurb]}
                        <p className="text-night mt-4 text-center text-base md:text-lg lg:text-xl lg:text-left lg:mt-11">Here are some technologies I have been working with:</p>
                        <ul className="text-base text-night mt-4 grid grid-cols-2 gap-4 md:text-lg lg:mt-11">
                            {tech_stack.map(function (tech_item, i) {
                                return (
                                    <li key={i} className="text-night">
                                        <span className="text-paynes-gray md:px-2">▹ </span>
                                        {tech_item}
                                    </li>
                                );
                            })}
                        </ul>
                        {[hobbies]}
                    </div>
                    <div className="justify-center place-self-center mt-8 md:mt-2 lg:pl-20">
                        <Image
                            src="/snoopy-reading-yotsuba.jpg"
                            alt="Snoopy reading yotsuba"
                            sizes="(min-width:320px) 50vw, (min-width:768px) 83.33vw, (min-width:1024px) 62.5vw"
                            width={0}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                            className="rounded shadow-xl"
                            priority={false}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-10 mb-12 md:mt-8 md:mb-20" />
            <div className="z-10 w-full max-w-5xl lg:flex flex-col">
                <p className="text-4xl text-reseda-green font-bold font-satoshi pb-4 mt-2 whitespace-nowrap text-center lg:text-5xl lg:place-self-end"><i>what</i> have I done?</p>
                <Experience />
            </div>
        </div>
    )
}