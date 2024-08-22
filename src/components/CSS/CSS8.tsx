import PDP from "@components/PDP/PDP";
import PLP from "@components/PLP/PLP";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <PLP />,
    },
    { path: "/product/:id", element: <PDP /> },
  ],
  {
    basename: "/css/eight",
  }
);

const CSS8 = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default CSS8;
