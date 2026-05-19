import {
  createBrowserRouter,
} from "react-router-dom"

import App from "./App"

import Login from "./features/auth/Login"
import Register from "./features/auth/Register"
import Profile from "./features/auth/Profile"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
])