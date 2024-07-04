import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import App from "../App";

import AddSpot from "../Pages/Add Tourist Spot/AddSpot";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import ViewDetail from "../Pages/ViewDetail/ViewDetail";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/addSpot',
          element:<AddSpot></AddSpot>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/viewDetail/:id',
          element:<ViewDetail></ViewDetail>,
          loader:({params})=>fetch(`http://localhost:5000/spot/${params.id}`)
        }
      ]
    },
  ]);