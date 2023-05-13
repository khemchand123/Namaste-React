import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About';
import Error from './components/Error';

import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Profile from "./components/ProfileClass";
//import Instamart from './components/Instamart';

const Instamart = lazy(()=> import("./components/Instamart"));



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children : [
      {
        path: "/",
        element:  <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [{
          path: "profile",
          element: <Profile name="Khem Chand Saini"/>
        }]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
          path: "/restaurant/:id",
          element: <RestaurantMenu />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/swiggy-instamart",
        element: 
                <Suspense fallback={<h1>Loading.....</h1>}>
                   <Instamart />
                </Suspense>
      }  
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
