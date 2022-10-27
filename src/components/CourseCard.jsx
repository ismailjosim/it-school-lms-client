import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, subtitle, thumbnail, price } = course;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-left">{title}</h2>
                <p className='text-justify'>{subtitle}</p>
                <div className="flex justify-between items-center">
                    <p className='flex gap-1 font-bold text-indigo-800 text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{price}</span>
                    </p>

                    <Link to={`/course/${ course.id }`} className="btn bg-indigo-500 border-0 text-white">Read Details</Link>
                </div>
            </div>

        </div>
    );
};

export default CourseCard;
