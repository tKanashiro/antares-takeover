import PDP from "@components/PDP/PDP";
import PLP4 from "@components/PLP/PLP4";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <PLP4 />,
    },
    { path: "/product/:id", element: <PDP /> },
  ],
  {
    basename: "/css/four",
  }
);

const CSS4 = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default CSS4;
