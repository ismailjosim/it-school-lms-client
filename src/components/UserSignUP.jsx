import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const UserSignUP = () => {
    const { UserSignUP, updateUserProfile } = useContext(AuthContext);

    const handleUserSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        UserSignUP(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUserProfile(name, photoURL);
            })
            .catch(error => {
                console.log("Error Found!", error);
            })

    }

    const handleUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then((error) => {
                console.log(error)
            })
            .catch((error) => {
                console.log("Error Found", error)
            })
    }



    return (
        <div className='flex justify-center mt-20'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-indigo-700 text-white">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign UP</h1>
                </div>
                <form onSubmit={handleUserSignUp} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm text-left">Full Name</label>
                            <input type="text" name="name" placeholder="Your Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                        </div>
                        <div>
                            <label htmlFor="photoURL" className="block mb-2 text-sm text-left">Photo URL</label>
                            <input type="text" name="photoURL" placeholder="Your Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-left">Email address</label>
                            <input type="email" name="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 text-white">Sign UP</button>
                        </div>
                        <p className="px-6 text-sm text-center text-white">Already have an account?
                            <Link to="/login" className="hover:underline dark:text-violet-400 ml-1">Sign In</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserSignUP;
