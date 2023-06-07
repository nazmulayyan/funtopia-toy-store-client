import { createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ToyDetails from "../Pages/Home/ShopByCategory/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyToy from "../Pages/MyToy/MyToy";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";

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
          path: '/myToys',
          element: <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
          // loader: () => fetch('http://localhost:5000/addToy')
        },
        {
          path: '/addToy',
          element: <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: '/toyDetails/:id',
          element: <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path: 'updateToy/:id',
          element:<UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
        
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;