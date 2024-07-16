import {
    createBrowserRouter,
    Outlet,
    redirect,
    RouterProvider,
} from "react-router-dom";
import Login from "../src/pages/auth/Login";
import Main from "../src/pages/main/Main";
import Register from "../src/pages/auth/Register";

const router = createBrowserRouter([
    {
        element: (
            <>
                <Outlet />
            </>
        ),
        loader: () => {
            if (!localStorage.getItem('access_token')) {
                return redirect('/login');
            }
            return null;
        },
        children: [
            {
                path: "/",
                element: <Main />,
            },
        ]
    },

    {
        path: "/about",
        element: <h1>About</h1>,
    },
    {
        path: "/login",
        element: <Login />,
        loader: () => {
            if (localStorage.getItem('access_token')) {
                return redirect('/');
            }
            return null;
        }
    },
    {
        path: "/register",
        element: <Register />,
        loader: () => {
            if (localStorage.getItem('access_token')) {
                return redirect('/');
            }
            return null;
        }
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;