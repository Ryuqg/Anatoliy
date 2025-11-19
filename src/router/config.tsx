
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Services from "../pages/services/page";
import Portfolio from "../pages/portfolio/page";
import Investors from "../pages/investors/page";
import About from "../pages/about/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/investors",
    element: <Investors />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;