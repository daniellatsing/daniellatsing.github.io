import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";

const socialLinks = [
    {
      id: 1,
      icon: <EmailIcon />,
      url: "mailto:daniellatsing@gmail.com",
    },
    {
      id: 2,
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/daniellatsing/",
    },
    {
      id: 3,
      icon: <GitHubIcon />,
      url: "https://github.com/daniellatsing",
    },
  ];

export default function Footer() {
    return (
        <div className="w-full font-satoshi">
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-10 mb-12 md:mt-16 md:mb-20" />
            <p className="text-center text-night font-bold md:text-2xl md:mb-16 hidden lg:block lg:text-4xl lg:py-4 lg:mb-24 dark:text-white">Thank you for visiting :^)</p>
            {/* Footer social links */}
            <div className=" flex place-content-between mb-10 px-8 md:px-12 md:mb-18 sm:mb-20">
                <div className="align-start font-bold text-night dark:text-white">
                    <p className="text-xl md:text-4xl lg:text-5xl">&copy; 2024</p>
                    <p className="text-2xl md:text-5xl lg:text-6xl">Daniella Tsing</p>
                </div>
                <ul className="flex justify-center gap-2 items-center md:gap-6">
                    {socialLinks.map((link) => (
                    <Link
                        href={link.url}
                        target="__blank"
                        key={link.id}
                        className="flex items-center justify-center text-night hover:text-ash-gray dark:hover:text-ash-gray cursor-pointer rounded-lg dark:bg-ternary-dark dark:hover:bg-ternary-light shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:shadow-xl size-12 border border-davys-gray md:px-4 md:size-14 dark:dark:text-white"
                    >
                        <i>{link.icon}</i>
                    </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}