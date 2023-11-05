import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About';
import Posts from './pages/Posts';

export default function UltimateReactCourse() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <>
                <a href="/about">About</a>
                <a href="/posts">Posts</a>
            </>,
        },
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
