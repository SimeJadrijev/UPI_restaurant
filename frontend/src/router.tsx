import {
    LoginPage,
    Page403,
    Page404,
    RegisterPage,
    LandingPage,
    AllMealsPage,
    SingleMealPage,
    DailyOffers,
    PaymentPage,
    EditUserPage,
} from '@routes/elements.tsx';
import { Navigate, useRoutes } from 'react-router';
import { AuthLayout, CompactLayout, MainLayout } from './layouts';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: 'auth',
            element: <AuthLayout />,
            children: [
                {
                    path: 'login',
                    element: <LoginPage />,
                },
                {
                    path: 'register',
                    element: <RegisterPage />,
                },
            ],
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    element: <LandingPage />,
                    index: true,
                },
                {
                    path: 'meals',
                    element: <AllMealsPage />,
                },
                {
                    path: 'meals/:id',
                    element: <SingleMealPage />,
                },
                {
                    path: 'daily-offers',
                    element: <DailyOffers />,
                },
                {
                    path: 'edit-user',
                    element: <EditUserPage />,
                },
            ],
        },
        {
            element: <CompactLayout />,
            children: [
                { path: '404', element: <Page404 /> },
                { path: '403', element: <Page403 /> },
            ],
        },
        {
            path: 'payment',
            element: <PaymentPage />,
        },
        { path: '*', element: <Navigate to="/404" replace /> }, // guard all non-existing routes with 404 page
    ]);
}
