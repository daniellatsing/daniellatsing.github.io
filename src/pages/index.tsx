import { TypewriterEffect } from '@/app/components/ui/typewriter-effect';

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
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-16 mb-28" />
            <div id="works" className="z-10 w-full max-w-7xl lg:flex">
                <p className="text-5xl text-feldgrau font-bold">works</p>
            </div>
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-24 mb-52" />
        </main>
  );
}
