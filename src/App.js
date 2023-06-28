import React, { lazy, Suspense, useState} from "react";
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
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(()=> import("./components/Instamart"));



const AppLayout = () => {

  const [user, setUser] = useState({
    name : "Khem Chand",
    email: "Khem.Chand@cognizant.com"
  });

  return (
    <Provider store={store}>
    <UserContext.Provider value={
         {
          user: user,
          setUser
        }
    }>
      <div className="app">
         <Header />
         <Outlet />
         <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart />
      }  
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
