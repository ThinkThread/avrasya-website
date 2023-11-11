export interface HeaderModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function HeaderModal({isOpen, setIsOpen}: HeaderModalProps) {
    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-row justify-between">
                                    <h3 className="text-2xl font-medium leading-6 text-gray-900" id="modal-title">
                                        Avrasya
                                    </h3>
                                    <button type="button" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-dismiss="modal" aria-label="Close" onClick={() => setIsOpen(false)}>
                                        <span className="sr-only">Close</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Avrasya is a fast and unique Node.js web framework designed for building web applications and APIs. Avrasya stands out with its simple usage, performance, and extensibility.
                                </p>
                                <div className="flex flex-row space-x-4">
                                    <a href="/get-started"
                                        className="text-orange-500 hover:text-blue-700">
                                        Get Started
                                    </a>
                                    <a href="/examples"
                                        className="text-orange-500 hover:text-blue-700">
                                        Examples
                                    </a>
                                    <a href="/team"
                                        className="text-orange-500 hover:text-blue-700">
                                        Team
                                    </a>
                                    <a href="https://github.com/ThinkThread/avrasya"
                                        className="text-orange-500 hover:text-blue-700">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}