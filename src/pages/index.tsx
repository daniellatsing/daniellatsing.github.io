import { TypewriterEffect } from '@/app/components/ui/typewriter-effect';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export default function Home() {
    const words = [
        {
            text: "hi",
            className: "font-bold font-satoshi text-5xl text-night pb-10 mt-2"
        },
        {
            text: "there,",
            className: "font-bold font-satoshi text-5xl text-night pb-10 mt-2"
        },
        {
            text: "i'm",
            className: "font-bold font-satoshi text-5xl text-night pb-10 mt-2"
        },
        {
            text: "daniella",
            className: "font-bold font-satoshi text-5xl text-feldgrau pb-10 mt-2"
        }
    ]
    return ( 
        <main id="home" className="flex min-h-screen flex-col place-items-center py-24 font-satoshi">
            <div className="z-10 w-full max-w-7xl text-sm lg:flex">
                <TypewriterEffect words={words} />
            </div>
            <div className="z-10 w-full max-w-7xl text-sm lg:flex">
                <p className="font-bold text-2xl text-davys-grey pb-6">I am a Seattle-based software developer with a passion for designing intuitive and accessible solutions through the implementation through code and human-centered design.</p>
            </div>
            {/* <div className="border border-feldgrau rounded-md px-6 py-6 hover:text-indigo-500 dark:hover:text-indigo-400 dark:bg-ternary-dark hover:text-indigo-500 dark:hover:text-indigo-400 dark:hover:bg-ternary-light shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl -start">
                <a href="mailto:daniellatsing@gmail.com" id="intro-contact" className="flex flex-row text-feldgrau font-bold text-base text-xl place-items-center">
                    <EmailRoundedIcon className=""/>
                    <p className="px-2">Send a Message!</p>
                </a>
            </div> */}
            {/* <div className="w-full mt-52 border border-french-gray dark:border-secondary-dark" /> */}
            <div className="w-full mt-8 border border-french-gray dark:border-secondary-dark" />
        </main>
  );
}
