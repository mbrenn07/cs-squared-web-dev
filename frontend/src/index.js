import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import About from './pages/about/About';
import ContactUs from './pages/contactus/ContactUs';
import Officers from './pages/officers/Officers';
import { Stack } from "@mui/material"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Landing Page</h1>
        <Stack spacing={1}>
          <Link to="about">About Us</Link>
          <Link to="contactus">Contact Us</Link>
          <Link to="officers">Officers</Link>
        </Stack>
      </div>
    ),
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
  {
    path: "officers",
    element: <Officers />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
