"use client";
import ReactCodeMirror from "@uiw/react-codemirror";
import { FaNpm } from "react-icons/fa";
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import Link from "next/link";

export default function GetStarted() {
    return (
        <>
            <div>
                <div className="flex flex-col w-screen space-y-4 pt-4 px-10">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
                        <Link href="/">
                            Avrasya Web Framework
                        </Link>
                    </h1>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        Avrasya is a fast and unique Node.js web framework designed for building web applications and APIs. Avrasya stands out with its simple usage, performance, and extensibility.
                    </p>
                </div>
                <div className="flex flex-col w-screen space-y-4 pt-8 px-10" id="section1">
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-red-600 rounded-md">
                        <p className="text-white">Features</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-screen px-10 pt-4">
                    <Link href="/examples">
                        <div className="flex flex-col items-center space-y-4 px-4 py-2 bg-black-500 h-40 items-center justify-center border-2 border-red-600 rounded-xl">
                            <p className="text-sm text-gray-100 dark:text-gray-100 font-bold text-center">
                                Simple and easy to use
                            </p>
                        </div>
                    </Link>
                    <Link href="/examples">
                        <div className="flex flex-col items-center space-y-4 px-4 py-2 bg-black-500 h-40 items-center justify-center border-2 border-red-600 rounded-xl">
                            <p className="text-sm text-gray-100 dark:text-gray-100 font-bold text-center">
                                Fast and performant
                            </p>
                        </div>
                    </Link>
                    <Link href="/examples">
                        <div className="flex flex-col items-center space-y-4 px-4 py-2 bg-black-500 h-40 items-center justify-center border-2 border-red-600 rounded-xl">
                            <p className="text-sm text-gray-100 dark:text-gray-100 font-bold text-center">
                                Extensible
                            </p>
                        </div>
                    </Link>
                    <Link href="/examples">
                        <div className="flex flex-col items-center space-y-4 px-4 py-2 bg-black-500 h-40 items-center justify-center border-2 border-red-600 rounded-xl">
                            <p className="text-sm text-gray-100 dark:text-gray-100 font-bold text-center">
                                TypeScript support
                            </p>
                        </div>
                    </Link>
                    <Link href="/examples">
                        <div className="flex flex-col items-center space-y-4 px-4 py-2 bg-black-500 h-40 items-center justify-center border-2 border-red-600 rounded-xl">
                            <p className="text-sm text-gray-100 dark:text-gray-100 font-bold text-center">
                                Middleware support
                            </p>
                        </div>
                    </Link>
                    <Link href="/examples">
                        <div className="flex flex-col items-center space-y-4 px-4 py-2 bg-black-500 h-40 items-center justify-center border-2 border-red-600 rounded-xl">
                            <p className="text-sm text-gray-100 dark:text-gray-100 font-bold text-center">
                                Router support
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col w-screen space-y-4 pt-8 px-10" id="section2">
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-gray-800 rounded-md">
                        <p className="bg-gray-800">Getting Started</p>
                    </div>
                </div>
                <div className="flex flex-col w-screen space-y-4 pt-4 px-10">
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        To get started with Avrasya, follow these steps:
                    </p>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        1. Initial your project
                    </p>
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-blue-800 rounded-md">
                        <FaNpm />
                        <pre className="text-white">
                            <code className="text-white text-sm font-mono dark:text-white dark:font-mono">
                                npm init
                            </code>
                        </pre>
                    </div>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        2. Add TypeScript dependency
                    </p>
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-blue-800 rounded-md">
                        <FaNpm />
                        <pre className="text-white">
                            <code className="text-white text-sm font-mono dark:text-white dark:font-mono">
                                npm install -D typescript
                            </code>
                        </pre>
                    </div>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        3. Install Avrasya
                    </p>
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-blue-800 rounded-md">
                        <FaNpm />
                        <pre className="text-white">
                            <code className="text-white text-sm font-mono dark:text-white dark:font-mono">
                                npm i avrasya
                            </code>
                        </pre>
                    </div>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        Create src folder and add index.ts file to src folder and add this code to index.ts file
                    </p>
                    <ReactCodeMirror value={`
import Avrasya from "avrasya";

const avrasya = new Avrasya();

avrasya.router.get("/", (context) => {
    context.send("Hello World");
});

avrasya.router.get("/users/:id", (context) => {
    const id = context.params.id;
    context.send({ id });
});

avrasya.use((ctx) => {
    console.log("middleware");
    console.log(ctx.req.url + " " + ctx.req.method);
})

avrasya.listen(3000);
        `} extensions={[javascript()]} theme={"dark"} />
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        Add this code to package.json file
                    </p>
                </div>
                <div className="flex flex-col w-screen space-y-4 pt-4 px-10">
                    <ReactCodeMirror value={`
{
    "name": "basic-server",
    "version": "1.0.0",
    "main": "dist/index.js",
    "scripts": {
      "build": "tsc",
      "start": "tsc && node dist/index.js",
    },
    "devDependencies": {
      "typescript": "^5.2.2"
    },
    "dependencies": {
      "avrasya": "^1.0.24"
    }
  }  
            `} extensions={[json()]} theme={"dark"} />
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        3. Add this code to tsconfig.json file
                    </p>
                </div>
                <div className="flex flex-col w-screen space-y-4 pt-4 px-10">
                    <ReactCodeMirror value={`
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "dist",
        "strict": true,
        "esModuleInterop": true
    },
    "include": ["src/**/*"]
}
                `} extensions={[json()]} theme={"dark"} />
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        4. Run your project
                    </p>
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-blue-800 rounded-md">
                        <FaNpm />
                        <pre className="text-white">
                            <code className="text-white text-sm font-mono dark:text-white dark:font-mono">
                                npm run start
                            </code>
                        </pre>
                    </div>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        5. Open your browser and go to http://localhost:3000
                    </p>
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-blue-800 rounded-md">
                        <FaNpm />
                        <pre className="text-white">
                            <code className="text-white text-sm font-mono dark:text-white dark:font-mono">
                                http://localhost:3000
                            </code>
                        </pre>
                    </div>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        6. You can see this output
                    </p>
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-blue-800 rounded-md">
                        <pre className="text-white">
                            <code className="text-white text-sm font-mono dark:text-white dark:font-mono">
                                Hello World
                            </code>
                        </pre>
                    </div>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        7. Go to http://localhost:3000/users/1 and you can see this output
                    </p>
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-blue-800 rounded-md">
                        <pre className="text-white">
                            <code className="text-white text-sm font-mono dark:text-white dark:font-mono">
                                {"{ id: 1 }"}
                            </code>
                        </pre>
                    </div>
                    <p className="text-sm text-gray-100 dark:text-gray-100">
                        8. You can see middleware output in terminal
                    </p>
                    <div className="flex flex-row items-center space-x-2 px-4 py-2 bg-blue-800 rounded-md">
                        <pre className="text-white">
                            <code className="text-white text-sm font-mono dark:text-white dark:font-mono">
                                middleware
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
}
