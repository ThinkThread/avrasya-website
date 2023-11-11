"use client";

export default function Home() {
  return (
    <>
      <main className="flex w-screen space-y-4">
        <div className="flex flex-col w-screen space-y-4 pt-6 px-10" id="section1">
          <h1 className="xl:text-6xl text-5xl text-left text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
            The
          </h1>
          <h1 className="xl:text-6xl text-5xl text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
            Simple
          </h1>
          <h2 className="xl:text-6xl text-5xl text-left text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-500">
            Node.js
          </h2>
          <h2 className="xl:text-6xl text-5xl text-left text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            Web
          </h2>
          <h2 className="xl:text-6xl text-5xl text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Framework
          </h2>
          <p className="text-lg text-left text-gray-100 dark:text-gray-100 max-w-prose xl:text-2xl xl:max-w-none xl:leading-10 justify-center text-justify">
            Avrasya is a fast and unique Node.js web framework designed for building web applications and APIs. Avrasya stands out with its simple usage, performance, and extensibility.
          </p>
        </div>
      </main>
    </>
  )
}