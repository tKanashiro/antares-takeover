import PDP from "@components/PDP/PDP";
import PLP7 from "@components/PLP/PLP7";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <PLP7 />,
    },
    { path: "/product/:id", element: <PDP /> },
  ],
  {
    basename: "/css/seven",
  }
);

const CSS7 = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default CSS7;
