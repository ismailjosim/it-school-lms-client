import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/favicon.png'

const Header = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='bg-gray-600 rounded-full' width={40} src={logo} alt="IT School" />
                        <span className="ml-1 text-3xl font-semibold uppercase">School</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to='/courses' className="mr-5 hover:text-gray-900">Courses</Link>
                        <Link to='/faqs' className="mr-5 hover:text-gray-900">FAQs</Link>
                        <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
                    </nav>
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</button>
                </div>
            </header>
        </div>

    );
};

export default Header;
