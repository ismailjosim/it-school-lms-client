import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/favicon.png'
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;

    return (
        <div className='mb-5'>
            <header className="text-gray-600 body-font shadow-md">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='bg-gray-600 rounded-full' width={40} src={logo} alt="IT School" />
                        <span className="ml-1 text-3xl font-semibold uppercase">School</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/courses' className="mr-5 hover:text-gray-900">Courses</Link>
                        <Link to='/faqs' className="mr-5 hover:text-gray-900">FAQs</Link>
                        <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
                    </nav>
                    <div className='flex justify-center items-center p-5 flex-col md:flex-row items-cente'>
                        <img className='bg-gray-600 rounded-full' width={40} src={logo} alt="IT School" />
                        <span className="ml-1 text-3xl font-semibold uppercase">{email}</span>
                    </div>
                    <Link to='/login' className="inline-flex btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</Link>
                </div>
            </header>
        </div>

    );
};

export default Header;
