import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../contexts/AuthProvider';
import '../index.css';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleUserSignOut = () => {
        userLogOut().then(() => { }).catch((error => console.log(error)))
    }

    return (
        <div className='mb-6 sm:px-5 px-0 border-b-2 shadow-md shadow-gray-400'>
            <div className="py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <div className='sm:mx-0 mx-5'>
                    <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
                        <ul className="items-center space-x-8 lg:flex font-semibold hidden sm:flex">
                            <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
                            <Link to='/courses' className="mr-5 hover:text-gray-900">Courses</Link>
                            <Link to='/faqs' className="mr-5 hover:text-gray-900">FAQs</Link>
                            <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
                        </ul>
                        <Link to='/' className="inline-flex items-center lg:mx-auto">
                            <img width={120} src={logo} alt="IT School" />
                        </Link>
                        {user ?
                            <div className="dropdown dropdown-end items-center hidden ml-auto space-x-8 lg:flex">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user?.photoURL} alt="Bordered avatar" />
                                </label>
                                <ul tabIndex={0} className="mt-40 gap-5 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <span className="font-medium">{user?.displayName}</span>
                                    </li>
                                    <li>
                                        <button onClick={handleUserSignOut} className="inline-flex btn text-white bg-indigo-500 border-0 ml-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">log out</button>
                                    </li>
                                </ul>
                            </div>
                            :
                            <ul className='absolute right-0 sm:block hidden'>
                                <li>
                                    <Link to='/login' className="inline-flex btn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</Link>
                                </li>

                            </ul>


                        }
                        <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer absolute sm:right-32 right-10 dark:text-slate-500">
                            <span>Light</span>
                            <span className="relative">
                                <input id="Toggle1" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                            </span>
                            <span>Dark</span>
                        </label>


                        <div className="ml-auto lg:hidden md:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full z-50">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <Link to='/'>
                                                <img width={120} src={logo} alt="IT School" />
                                            </Link>

                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="items-center hidden ml-auto space-x-8 lg:flex">
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
                                            </ul>
                                            <ul className="space-y-4">

                                                <li>
                                                    <Link to='/courses' className="mr-5 hover:text-gray-900">Courses</Link>


                                                </li>
                                                <li>
                                                    <Link to='/faqs' className="mr-5 hover:text-gray-900">FAQs</Link>

                                                </li>
                                                <li>
                                                    <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
                                                </li>
                                                <li>
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
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;





