import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./components/layout/Rootlayout";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;