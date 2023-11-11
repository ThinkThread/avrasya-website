"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaGithub, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Team() {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
    const team = [
        {
            name: 'Muhtalip Dede',
            avatar: 'https://media.licdn.com/dms/image/C4D03AQFDqddN0DHQ0w/profile-displayphoto-shrink_400_400/0/1567144958537?e=1704931200&v=beta&t=gZUh8xobnSp0XCVAv63_SKeB7u8_49cNkHdJ9OuqkYw',
            github: 'https://github.com/muhtalipdede',
            twitter: 'https://twitter.com/MuhtalipDede',
            linkedin: 'https://www.linkedin.com/in/muhtalipdede',
            website: 'https://muhtalipdede.github.io',
        },
        {
            name: 'Harun Sokullu',
            avatar: 'https://media.licdn.com/dms/image/D4D03AQGRNbtToKH62Q/profile-displayphoto-shrink_400_400/0/1682278798469?e=1704931200&v=beta&t=9BIAPrzPrttgQ5BppTmta3BVNjcDdC1nxOrwlPgZN9g',
            github: 'https://github.com/suphero',
            twitter: 'https://twitter.com/suphero',
            linkedin: 'https://www.linkedin.com/in/suphero',
            website: 'https://harunsokullu.com/',
        },
    ]
    return (
        <>
            <div className="flex flex-col w-screen space-y-4 pt-4 px-10">
                <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-gray-500 rounded-md">
                    <p className="text-white">The Team</p>
                </div>
            </div>
            {isMobile ? <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-screen px-10 pt-4">
                    {team.map((member) => (
                        <div className="flex flex-col items-center space-y-4 px-4 py-2 bg-gray-500 rounded-md h-60 items-center justify-center" key={member.name}>
                            <img src={member.avatar} alt={member.name} className="rounded-full h-24 w-24" />
                            <p className="text-sm text-gray-100 dark:text-gray-100 font-bold text-center">
                                {member.name}
                            </p>
                            <div className="flex flex-row space-x-2">
                                <a href={member.github} className="flex flex-row items-center rounded-md">
                                    <FaGithub size={20} color="white" />
                                </a>
                                <a href={member.twitter} className="flex flex-row items-center rounded-md">
                                    <FaTwitter size={20} color="white" />
                                </a>
                                <a href={member.linkedin} className="flex flex-row items-center rounded-md">
                                    <FaLinkedin size={20} color="white" />
                                </a>
                                <a href={member.website} className="flex flex-row items-center rounded-md">
                                    <FaGlobe size={20} color="white" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </> :
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-screen px-10 pt-4">
                        {team.map((member) => (
                            <div className="flex flex-col items-center space-y-4 px-4 py-2 bg-gray-500 rounded-md h-80 items-center justify-center" key={member.name}>
                                <img src={member.avatar} alt={member.name} className="rounded-full h-32 w-32" />
                                <p className="text-sm text-gray-100 dark:text-gray-100 font-bold text-center">
                                    {member.name}
                                </p>
                                <div className="flex flex-row space-x-2">
                                    <a href={member.github} className="flex flex-row items-center rounded-md">
                                        <FaGithub size={32} color="white" />
                                    </a>
                                    <a href={member.twitter} className="flex flex-row items-center rounded-md">
                                        <FaTwitter size={32} color="white" />
                                    </a>
                                    <a href={member.linkedin} className="flex flex-row items-center rounded-md">
                                        <FaLinkedin size={32} color="white" />
                                    </a>
                                    <a href={member.website} className="flex flex-row items-center rounded-md">
                                        <FaGlobe size={32} color="white" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}
