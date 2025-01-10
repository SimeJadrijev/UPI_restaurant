import { Page403, Page404 } from '@pages/error';
import { Navigate, useRoutes } from 'react-router';
import CompactLayout from './layouts/compact/CompactLayout.tsx';
import LoginPage from './pages/auth/LoginPage.tsx';
import RegisterPage from './pages/auth/RegisterPage.tsx';
import c from './styles/homePage.module.css';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: <LoginPage/>,
                },
                {
                    path: 'register',
                    element: <RegisterPage/>,
                },
            ],
        },
        {
            path: '/',
            element: ( // TODO ovo cemo izmijenit, imat cemo drugu komponentu za home page
                <div className={c.welcomeContainer}>
                    <h1 className={c.welcomeHeader}>Welcome to FoodHub!</h1>
                    <p className={c.welcomeSubtitle}>
                        Your favourite foods delivered fast at your door.
                    </p>
                    <button
                        className={c.authBtn}
                        onClick={() =>
                            (window.location.href = '/auth/register')
                        }
                    >
                        Register
                    </button>
                    <button
                        className={c.authBtn}
                        onClick={() => (window.location.href = '/auth/login')}
                    >
                        Login
                    </button>
                </div>
            ),
        },
        {
            element: <CompactLayout />,
            children: [
                { path: '404', element: <Page404 /> },
                { path: '403', element: <Page403 /> },
            ],
        },
        { path: '*', element: <Navigate to='/404' replace /> }, // guard all non-existing routes with 404 page
    ]);
}
