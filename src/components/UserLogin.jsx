import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';




const UserLogin = () => {
    const { userSignIn, googleProviderLogin, githubProviderLogin } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleUserLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log("Error Found", error);
                setPasswordError(error.message)
            });
    }
    // handle google login
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log("Error Found", error);
            })

    }

    const handleGutHubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='flex justify-center my-10'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-indigo-700 text-white">
                {passwordError && <p className='text-black bg-[#F4AEA0] font-medium rounded-md'>There was a problem logging in. Check your email and password or create an account.</p>}
                <div className="mb-8 text-center">
                    <h2 className="my-3 text-4xl font-bold">Sign in</h2>
                </div>
                <form onSubmit={handleUserLogin} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-left">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <Link href="/" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Enter Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 hover:bg-white dark:text-gray-900">Sign in</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <hr className='w-[45%]' />
                            <span>OR</span>
                            <hr className='w-[45%]' />
                        </div>
                    </div>
                </form>
                <div className="space-y-4">
                    <h3 className="block mb-2">Sign In With</h3>

                    <div className='flex justify-center items-center gap-3 pb-2'>
                        <button onClick={handleGoogleSignIn} className='text-2xl'>
                            <FcGoogle />
                        </button>
                        <button onClick={handleGutHubSignIn} className='text-2xl'>
                            <BsGithub />
                        </button>
                    </div>

                </div>
                <p className="px-6 text-sm text-center text-white">Don't have an account yet?
                    <Link to="/signup" className="hover:underline dark:text-violet-400 ml-1">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default UserLogin;
