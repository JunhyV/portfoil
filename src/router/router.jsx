import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic/>,
        children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/about',
            element: <AboutMe/>,
        },
        {
            path: '/projects',
            element: <Projects/>,
        },
        {
            path: '/contact',
            element: <Contact/>,
        },
        ]
    }
    
])