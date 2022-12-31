import {createBrowserRouter, Outlet} from 'react-router-dom';
import SingIn from '../SingIn';
import SingUp from '../SingUp';
import Home from '../Home';
import LangDing from '../LangDing';
import Navigation from '../Navigation';

import * as router from '../constants/routes';

import { PrivateRouter } from './PrivateRouter';

const HeaderLayout = () => (
    <>
        <header>
            <Navigation />
        </header>
        <Outlet />
    </>
);

const routerConfig = createBrowserRouter([
    {
        element: <HeaderLayout />,
        children: [
            {
                path: router.LANGDING,
                element: <LangDing />,
            },
            {
                path: router.HOME,
                element: (
                    <PrivateRouter>
                        <Home />
                    </PrivateRouter>
                ),
            },
            {
                path: router.SING_IN,
                element: <SingIn />,
            },
            {
                path: router.SING_UP,
                element: <SingUp />,
            },
            {
                path: router.SING_UP,
                element: <SingUp />,
            },
        ],
    },
]);

export { routerConfig };

