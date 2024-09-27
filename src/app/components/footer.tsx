import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-20 mb-28" />
            <p className="text-center text-night font-bold text-4xl py-4 mb-36">Thank you for visiting :^)</p>
            {/* Footer social links */}
            <div className="container mx-auto font-general-regular flex place-content-between mb-12 sm:mb-28">
                <div className="align-start font-bold text-night">
                    <p className="text-5xl">&copy; 2024</p>
                    <p className="text-6xl">Daniella Tsing</p>
                </div>
                <ul className="flex justify-center gap-4 sm:gap-8 items-center">
                    {socialLinks.map((link) => (
                    <a
                        href={link.url}
                        target="__blank"
                        key={link.id}
                        className="flex items-center justify-center text-night hover:text-ash-gray dark:hover:text-indigo-400 cursor-pointer rounded-lg dark:bg-ternary-dark dark:hover:bg-ternary-light shadow-sm hover:shadow-md px-4 transition duration-300 ease-in-out transform hover:shadow-xl size-14 border border-davys-gray"
                    >
                        <i>{link.icon}</i>
                    </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}