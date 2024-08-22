import PDP from "@components/PDP/PDP";
import PLP0 from "@components/PLP/PLP0";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <PLP0 />,
    },
    { path: "/product/:id", element: <PDP /> },
  ],
  {
    basename: "/css",
  }
);

const CSS0 = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default CSS0;
