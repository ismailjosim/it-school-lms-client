import React from 'react';

const Faqs = () => {
    return (
        <div>
            <section className="dark:bg-violet-500 my-5 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 text-left">
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What do IT School courses include?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    Each IT School course is created, owned and managed by the instructor's. The foundation of each IT School course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students.
                                </p>
                            </div>
                        </details>
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How do I take a IT School course?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    IT School courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app.
                                    <br />
                                    After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you're logged into your IT School account). You can also begin the course by logging in and navigating to your My learning page.
                                </p>
                            </div>
                        </details>
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Do I have to start my IT School course at a certain time? And how long do I have to complete it?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    There are no deadlines to begin or complete a course. Learn more about our Lifetime Access policy.
                                </p>
                            </div>
                        </details>
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Is there any way to preview a course?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    Yes! You can preview Most of our courses outline roadMap and how instructors will complete the whole course alone.  Learn how to preview a course, and review key information about it. This article outlines how you can search IT School ever-growing library, and find courses you're interested in taking.
                                </p>

                            </div>
                        </details>
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How can I pay for a course?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    IT School supports several different payment methods, depending on your account country and location.
                                </p>

                            </div>
                        </details>
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What if I don’t like a course I purchased?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    We want you to be satisfied, so all eligible courses purchased on IT School can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                                </p>

                            </div>
                        </details>
                    </div>
                </div>
            </section>

            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Fake address, 9999 City</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>contact@business.com</span>
                            </p>
                        </div>
                    </div>
                    <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                        </label>
                        <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Faqs;
