import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";
import SignUp from "../Pages/LogIn/SignUp";
import LogIn from "../Pages/LogIn/LogIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/footer",
            element:<Footer></Footer>
        },
        {
            path:"/nav",
            element:<Nav></Nav>
        },
        {
          path:"/signUp",
          
          element:<SignUp></SignUp>
        },
        {
          path:"/logIn",
          element:<LogIn></LogIn>
        }
        
      ],
    },
  ]);

  export default router;