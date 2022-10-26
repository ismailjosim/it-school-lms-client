import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const coursesData = useLoaderData();

    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:gap-5 gap-0'>
                <div className="card bg-indigo-500 text-white shadow-xl mb-10 sm:h-[40%] md:h-full h-auto">
                    {
                        coursesData.map(course => <div className="rounded-sm my-3" key={course.id}>
                            <Link to={`/course/${ course.id }`} className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>

                                <span>{course.name}</span>
                            </Link>
                        </div>
                        )
                    }
                </div>


                <div className='col-span-2 grid sm:grid-cols-2 grid-cols-1 gap-5 sm:m-0'>
                    {
                        coursesData.map(course => <CourseCard key={course.id} course={course}></CourseCard>)

                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;
/*
 <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                <Header handleAddTask={handleAddTask}></Header>
                <div className='col-span-1 bg-white text-center md:h-full lg:sm:h-2/4 p-4 rounded-lg'>
                    <Aside taskAdd={taskAdd}></Aside>
                </div>
            </div>

*/
