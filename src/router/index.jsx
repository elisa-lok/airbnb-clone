import React from "react"
import { Navigate } from "react-router-dom"


const Home = React.lazy(() => import("@/views/home"))
//import Home from "@/views/home"
//const Entire = React.lazy(() => import("@/views/entire"))
//const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>
  }
]

export default routes