import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import Home from "./pages/home";
import MainLayout from "./layout/main-layout";
import AdminLayout from "./layout/admin-layout";
import DemoPage from "./pages/admin/hotels";
import { ProfileForm } from "./pages/admin/create-hotel-form";
import Dashboard from "./pages/admin/dashboard";
import Hotel from "./pages/hotel";
import SignInPage from "./auth/sign-in";
import SignUpPage from "./auth/sign-up";


const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/:_id",
            element: <Hotel />,
          },
        ],
      },
      {
        element: <AdminLayout />,
        children: [
          {
            path: "/admin",
            element: <Dashboard />,
          },
          {
            path: "/admin/bookings",
            element: <DemoPage />,
          },
          {
            path: "/admin/hotels",
            element: <DemoPage />,
          },
          {
            path: "/admin/new-hotel",
            element: <ProfileForm />,
          },
        ],
      },
    ],
  },
  {
        path: "/sign-in",
        element: <SignInPage />
      },
      {
        path: "/sign-up",
        element: <SignUpPage />
      }
]);

export default routes;
