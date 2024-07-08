import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import App from "../App";

import AddSpot from "../Pages/Add Tourist Spot/AddSpot";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import ViewDetail from "../Pages/ViewDetail/ViewDetail";
import AllSpot from "../Pages/All Spot/AllSpot";
import PrivetRoute from "./PrivetRoute";
import MyList from "../Pages/My List/MyList";
import Update from "../Pages/Update User/Update";
import AddCountry from "../Pages/Add Country Spot/AddCountry";
import CountryCard from "../Components/CountryCard/CountryCard";
import ViewCountryDetail from "../Components/CountryCard/View Country/ViewCountryDetail";

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
          element:<PrivetRoute><AddSpot></AddSpot></PrivetRoute>
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
          loader:({params})=>fetch(`https://my-tenth-assignment-server-one.vercel.app/spot/${params.id}`)
        },
        {
          path:'/allSpot',
          element:<PrivetRoute><AllSpot></AllSpot></PrivetRoute>,
          loader:()=>fetch('https://my-tenth-assignment-server-one.vercel.app/spot')
        },
        {
          path:'/myList',
          element:<PrivetRoute><MyList></MyList></PrivetRoute>
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params})=>fetch(`https://my-tenth-assignment-server-one.vercel.app/spot/${params.id}`)
        },
        {
          path:'/addCountry',
          element:<AddCountry></AddCountry>
        },
        {
          path:'/viewCountry/:id',
          element:<ViewCountryDetail></ViewCountryDetail>,
          loader:({params})=>fetch(`https://my-tenth-assignment-server-one.vercel.app/country/${params.id}`)
        }
      ]
    },
  ]);