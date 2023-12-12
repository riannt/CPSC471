
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import AddReservedTime from "./pages/AddReservedTime";
import AddClass from "./pages/AddClass";
import AddAssesment from "./pages/AddAssesment";
import Navbar from "./components/Navbar";
import "./style.scss"

/*
Main app file for the front end
*/

//layout for pages
const Layout = () => {
  return(
    <>
    <Navbar />
    <Outlet/>
    </>
  )
}


//Pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/edit-profile",
        element:<EditProfile/>
      },
      {
        path:"/add-reserved-time",
        element:<AddReservedTime/>
      },
      {
        path:"/add-class",
        element:<AddClass/>
      },
      {
        path:"/add-assesment",
        element:<AddAssesment/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },

]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
