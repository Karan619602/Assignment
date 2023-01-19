import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import { Form } from './Components/form-component';
import { User } from './Components/User';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import {Layout} from './Components/layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Layout/>
    ),
  },
  {
    path: "form",
    element: (<Form/>),
  },
  {
    path: "getuser",
    element: (<User/>),
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

