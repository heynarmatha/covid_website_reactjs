import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contactus from "./components/contactUs";
import ContagionScreen from "./components/contagion";
import Layout from "./components/layout";
import NotFound from "./components/notFound";
import OverviewScreen from "./components/overviewScreen/overview";
import SymptomsScreen from "./components/symptoms";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <OverviewScreen />,
        },
        {
          path: "/contagion",
          element: <ContagionScreen />,
        },
        {
          path: "/symptoms",
          element: <SymptomsScreen />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
