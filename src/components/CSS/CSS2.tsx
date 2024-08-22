import PDP from "@components/PDP/PDP";
import PLP1 from "@components/PLP/PLP1.tsx";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <PLP1 />,
    },
    { path: "/product/:id", element: <PDP /> },
  ],
  {
    basename: "/css/two",
  }
);

const CSS2 = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default CSS2;
