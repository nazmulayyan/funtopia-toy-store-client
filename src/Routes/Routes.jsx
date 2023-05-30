import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ToyDetails from "../Pages/Home/ShopByCategory/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/toyDetails/:id',
          element: <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        }
      ]
    },
  ]);

export default router;