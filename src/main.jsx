import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './routes/Home';
import Login from './routes/authentication/Login';
import Register from './routes/authentication/Register';
import Assignments from './routes/Assignments';
import CreateAssignment from './routes/CreateAssignment';
import AuthProvider from './provider/AuthProvider';
import MyAttempted from './routes/MyAttempted';
import PendingAssignments from './routes/PendingAssignments';
import PrivateRoutes from './MyPrivateRoutes/PrivateRoutes';
import UpdateAssignments from './components/UpdateAssignments';
import ViewAssignment from './components/ViewAssignment';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>
      },
      {
        path:"/assignments/:id",
        element:<PrivateRoutes>
          <ViewAssignment></ViewAssignment>
        </PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/assignments/')

      },
      {
        path: "/create",
        element: <PrivateRoutes>
          <CreateAssignment></CreateAssignment>
        </PrivateRoutes>
      },
      {
        path: "/attempted",
        element: <MyAttempted></MyAttempted>
      },
      {
        path: "/pending",
        element: <PrivateRoutes>
          <PendingAssignments></PendingAssignments>
        </PrivateRoutes>
      },
      {
        path: "/updateAssignments/:id",
        element: <UpdateAssignments></UpdateAssignments>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
