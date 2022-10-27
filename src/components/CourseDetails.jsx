import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
    const CourseDetailsData = useLoaderData();
    const { id, details, subtitle, thumbnail, title } = CourseDetailsData
    const { description1, description2, description3, description4, description7, description8 } = (details[1]);
    const keyPoints = details[1].keyPoints;
    const { list1, list2, list3, list4 } = details[1].lists;
    const { requirement1, requirement2, requirement3, requirement4 } = details[2].requirements;
    const { access, articles, certificate, duration, exercises, resources } = details[0];
    return (
        <div className=" p-5 mx-auto sm:p-10 md:p-16">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded relative">

                <Pdf targetRef={ref} filename="course-details.pdf">
                    {
                        ({ toPdf }) => <button className='btn text-white bg-indigo-500 hover:bg-indigo-700 border-0 absolute right-0' onClick={toPdf}>
                            <span className='mr-2'>download PDF</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                            </svg>
                        </button>
                    }
                </Pdf>
                <div ref={ref} className="text-slate-900">
                    <img src={thumbnail} alt="course_Image" className="w-full h-60 sm:h-96" />
                    <div className="py-2 text-left bg-indigo-500 text-white px-3">
                        <h2 className=" text-2xl font-semibold sm:text-3xl my-3">{title}</h2>
                        <div className="flex sm:flex-row flex-col-reverse gap-5 justify-between items-center my-5">
                            <p>{subtitle}</p>
                            <Link to={`/course/checkout/${ id }`} className="btn text-white hover:text-black bg-slate-800 hover:bg-white border-0">Get premium access</Link>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">This course includes:</h2>
                            <ul>
                                <li className='flex gap-2 my-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                    </svg>

                                    <span>{duration}</span>
                                </li>
                                <li className='flex gap-2 my-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>

                                    <span>{articles}</span>
                                </li>
                                <li className='flex gap-2 my-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                    </svg>

                                    <span>{resources}</span>
                                </li>
                                <li className='flex gap-2 my-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>

                                    <span>{exercises}</span>
                                </li>
                                <li className='flex gap-2 my-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{access}</span>
                                </li>
                                <li className='flex gap-2 my-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>

                                    <span>{certificate}</span>
                                </li>

                            </ul>

                        </div>

                    </div>
                    <div className='bg-indigo-100 p-2 text-left'>
                        <div>
                            <h2 className="text-2xl font-semibold">Requirements</h2>
                            <li>{requirement1}</li>
                            <li>{requirement2}</li>
                            <li>{requirement3}</li>
                            <li>{requirement4}</li>
                        </div>
                        <h2 className="text-left text-2xl font-semibold">Description</h2>
                        <div className="text-left leading-8">
                            <p className='mb-2'>{description1}</p>
                            <p className='mb-2'>{description2}</p>
                            <p className='mb-2'>{description3}</p>
                            <p className='mb-2'>{description4}</p>
                            <h2 className="text-left text-2xl font-semibold">You Will Learn From this Course</h2>

                            {
                                keyPoints.map((items, idx) => <li key={idx}>{items}</li>)
                            }
                            <h2 className="text-left text-2xl font-semibold my-3">Who this course is for:</h2>
                            <li>{list1}</li>
                            <li>{list2}</li>
                            <li>{list3}</li>
                            <li>{list4}</li>
                            <p className='mb-2'>{description7}</p>
                            <p className='mb-2'>{description8}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;

