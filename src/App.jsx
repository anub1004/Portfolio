import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./Components/AppLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout></AppLayout>,
      children: [
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/portfolio",
          element: <Portfolio></Portfolio>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
