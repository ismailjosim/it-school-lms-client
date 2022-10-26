import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/favicon.png'
import { AuthContext } from '../contexts/AuthProvider';
import '../index.css';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);


    const handleUserSignOut = () => {
        userLogOut().then(() => { }).catch((error => console.log(error)))
    }

    return (
        <div className='mb-5'>
            <header className="text-gray-600 body-font shadow-md">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='bg-gray-600 rounded-full' width={40} src={logo} alt="IT School" />
                        <span className="ml-1 text-3xl font-semibold uppercase">School</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center font-semibold justify-center">
                        <Link to='/courses' className="mr-5 hover:text-gray-900">Courses</Link>
                        <Link to='/faqs' className="mr-5 hover:text-gray-900">FAQs</Link>
                        <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
                    </nav>

                    {user ?
                        <div className='flex gap-3 justify-center items-center flex-col md:flex-row'>

                            <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user?.photoURL} alt="Bordered avatar" />
                            <span className="font-medium">{user?.displayName}</span>
                            <button onClick={handleUserSignOut} className="inline-flex btn text-white bg-indigo-500 border-0 ml-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">log out</button>
                        </div>
                        :
                        <div className='flex justify-center items-center flex-col md:flex-row'>
                            <Link to='/login' className="inline-flex btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</Link>
                        </div>
                    }
                    <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 ml-2 cursor-pointer dark:text-slate-500">
                        <span>Light</span>
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                        </span>
                        <span>Dark</span>
                    </label>
                </div>

            </header>
        </div>

    );
};

export default Header;




