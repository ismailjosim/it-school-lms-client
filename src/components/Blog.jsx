import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold underline mb-5'>Recent Blogs</h2>
            <div className="">

                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-indigo-200 my-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">OCT 27, 2022</span>
                        <button className="px-2 py-1 font-bold rounded dark:bg-violet-500 text-white">Interview Question 01</button>
                    </div>
                    <div className="mt-3 text-left">
                        <h3 className="text-2xl font-bold">what is cors?</h3>
                        <p className="mt-2">
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                        </p>
                        <p className="mt-2">
                            Today Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.
                        </p>
                        <p className="mt-2">
                            Express allows you to configure and manage an HTTP server to access resources from the same domain.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-600 font-medium">ISMAIL</span>
                        </div>
                    </div>
                </div>

                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-indigo-200 my-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">OCT 27, 2022</span>
                        <button className="px-2 py-1 font-bold rounded dark:bg-violet-500 text-white">Interview Question 02</button>
                    </div>
                    <div className="mt-3 text-left">
                        <h3 className="text-2xl font-bold">Why are you using firebase?  What other options do you have to implement authentication?</h3>
                        <p className="mt-2">
                            Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                        </p>
                        <p className="mt-2">
                            Tired of writing boring code for your backend, or can't even write it at all? Try Google Firebase. So what's Google Firebase, and why should you build your app around it?
                        </p>
                        <h4 className='text-xl font-medium my-2 underline'>What Is Google Firebase?</h4>
                        <p className="mt-2">
                            Founded in 2011 as a chat API and acquired by Google in 2014, Google Firebase is a platform that now offers active backend as a service (BaaS) for building dynamic web and mobile apps.
                        </p>
                        <p className="mt-2">
                            Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.
                        </p>
                        <p className="mt-2">
                            Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.
                        </p>
                        <h4 className='text-xl font-medium my-2 underline'>Why Should You Use Google Firebase?</h4>
                        <p className="mt-2">
                            Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.
                        </p>
                        <p className="mt-2">
                            You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-600 font-medium">ISMAIL</span>
                        </div>
                    </div>
                </div>

                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-indigo-200 my-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">OCT 27, 2022</span>
                        <button className="px-2 py-1 font-bold rounded dark:bg-violet-500 text-white">Interview Question 03</button>
                    </div>
                    <div className="mt-3 text-left">
                        <h3 className="text-2xl font-bold">How does the private route work?</h3>
                        <p className="mt-2">
                            The react private route component renders child components <code>(children)</code> if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </p>
                        <p className="mt-2">
                            The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                        </p>
                        <li className="mt-2">
                            The App component is the root component of the example app, it contains the outer html, main nav and routes for the application.
                        </li>
                        <li className="mt-2">
                            The /login route is public, and the home route (/) is protected by the private route component that uses Redux to check if the user is logged in.
                        </li>
                        <li className="mt-2">
                            The last route is a catch-all redirect route that redirects any unmatched paths to the home page.
                        </li>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-600 font-medium">ISMAIL</span>
                        </div>
                    </div>
                </div>

                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-indigo-200 my-5">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">OCT 27, 2022</span>
                        <button className="px-2 py-1 font-bold rounded dark:bg-violet-500 text-white">Interview Question 04</button>
                    </div>
                    <div className="mt-3 text-left">
                        <h3 className="text-2xl font-bold">What is Node? How does Node work?</h3>
                        <p className="mt-2">
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
                        </p>
                        <h4 className='text-xl font-medium my-2 underline'>Working of Node.js:</h4>
                        <p className="mt-2">
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        </p>
                        <h4 className='text-xl font-medium my-2 underline'>Node.js basically works on two concept</h4>
                        <li>Asynchronous</li>
                        <li>Non-blocking I/O</li>
                        <p className="mt-2">
                            <strong>Non-blocking I/o</strong>: <br />
                            Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.
                        </p>
                        <p className="mt-2">
                            <strong>Asynchronous</strong>: <br />
                            Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-600 font-medium">ISMAIL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
