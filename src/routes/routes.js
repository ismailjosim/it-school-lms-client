import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/Auth/UserLogin';
import UserSignUP from '../components/Auth/UserSignUP';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Main from '../layouts/Main';

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
            }
        ]
    }
])

export default routes;
