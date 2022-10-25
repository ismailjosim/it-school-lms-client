import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import UserSignUP from '../components/UserSignUP';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Main from '../layouts/Main';
import Courses from '../components/Courses';
import Faqs from '../components/Faqs';
import Blog from '../components/Blog';


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
                element: <Courses />
            },
            {
                path: '/faqs',
                element: <Faqs />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])

export default routes;
