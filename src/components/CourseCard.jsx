import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, subtitle, thumbnail } = course;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-left">{title}</h2>
                <p className='text-justify'>{subtitle}</p>
                <div className="card-actions justify-end">
                    <Link to={`/course/${ course.id }`} className="btn bg-indigo-500 border-0">Read Details</Link>
                </div>
            </div>

        </div>
    );
};

export default CourseCard;
