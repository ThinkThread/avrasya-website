import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

export interface HeaderProps {
    isOpen: boolean;
    setIsOpen: any;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
    const [currentLanguage, setCurrentLanguage] = useState('en')

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])

    const handlerChangeLanguage = (language: string) => {
        // setCurrentLanguage(language)
    }

    return (
        <>
            {isMobile ? <>
                <header className="flex flex-row justify-between items-center w-screen h-16 px-10 relative top-0 left-0 right-0 z-10 py-10">
                    <div className="flex flex-row items-center space-x-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
                        <Link href="/">
                            <Image src="/avrasya.svg" width="32" height="32" alt='Avrasya Web Framework' />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-row items-center rounded-md">
                            <svg className="w-6 h-6 text-gray-100 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? <>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </> : <>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </>}
                            </svg>
                        </button>
                    </div>
                </header>
            </> : <>
                <header className="flex flex-row justify-between items-center w-screen h-16 px-10 relative top-0 left-0 right-0 z-10 py-10">
                    <div className="flex flex-row items-center space-x-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
                        <Link href="/">
                            <Image src="/avrasya.svg" width="32" height="32" alt='Avrasya Web Framework' />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                        <Link href="/get-started" className="border border-orange-500 rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-200">
                            <p className="text-gray-100 dark:text-gray-100">Get Started</p>
                        </Link>
                        <Link href="/examples" className="border border-orange-500 rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-200">
                            <p className="text-gray-100 dark:text-gray-100">Examples</p>
                        </Link>
                        <Link href="/team" className="border border-orange-500 rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-200">
                            <p className="text-gray-100 dark:text-gray-100">Team</p>
                        </Link>
                        <a href="https://github.com/ThinkThread/avrasya" className="flex flex-row items-center rounded-md">
                            <FaGithub size={32} />
                        </a>
                        {currentLanguage === 'tr' ? <>
                            <div className="flex flex-row items-center space-x-4">
                                <button onClick={() => handlerChangeLanguage('tr')} className="flex flex-row items-center rounded-md">
                                    <Image src="https://cdn.countryflags.com/thumbs/turkey/flag-400.png" width="32" height="32" alt='Türkçe' />
                                </button>
                            </div>
                        </> : <>
                            <div className="flex flex-row items-center space-x-4">
                                <button onClick={() => handlerChangeLanguage('en')} className="flex flex-row items-center rounded-md">
                                    <Image src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png" width="32" height="32" alt='English' />
                                </button>
                            </div>
                        </>}
                    </div>
                </header>
            </>}
        </>
    )
}