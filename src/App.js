// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Rootlayout from "./components/layout/Rootlayout";
// import Home from "./pages/Home";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Rootlayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact", // Define the route path for ContactPage
        element: <ContactForm />, // Associate it with the ContactPage component
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
