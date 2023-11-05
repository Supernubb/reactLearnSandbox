import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About';
import Posts from './pages/Posts';

export default function UltimateReactCourse() {
    const router = createBrowserRouter([
        {
            path: "about",
            element: <About />,
        },
        {
            path: "posts",
            element: <Posts />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}
