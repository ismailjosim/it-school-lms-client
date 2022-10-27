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
                        <div className="flex justify-between items-center my-5">
                            <p>{subtitle}</p>
                            <Link to={`/course/checkout/${ id }`} className="btn text-white hover:text-black bg-slate-800 hover:bg-white border-0">Get premium access</Link>
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

