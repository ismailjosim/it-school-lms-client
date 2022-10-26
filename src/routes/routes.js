import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import UserSignUP from '../components/UserSignUP';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Main from '../layouts/Main';
import Courses from '../components/Courses';
import Faqs from '../components/Faqs';
import Blog from '../components/Blog';
import CourseDetails from '../components/CourseDetails';
import Checkout from '../components/Checkout';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <UserLogin></UserLogin>
            },
            {
                path: '/signup',
                element: <UserSignUP></UserSignUP>
            },
            {
                path: '/courses',
                loader: () => fetch('https://assignment-project-server-ismailjosim.vercel.app/courses'),
                element: <Courses />
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://assignment-project-server-ismailjosim.vercel.app/course/${ params.id }`),
                element: <CourseDetails />
            },
            {
                path: '/faqs',
                element: <Faqs />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/course/checkout/:id',
                loader: ({ params }) => fetch(`https://assignment-project-server-ismailjosim.vercel.app/course/${ params.id }`),
                element: <Checkout />
            }

        ]
    }
])

export default routes;
