import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "@/layout/main-layout"
import { AdminLayout } from "@/layout/admin-layout"
import Home from "@/pages/home"
import Hotel from "@/pages/hotel"
import AdminDashboard from "@/pages/admin/dashboard"
import SignUpPage from "@/auth/sign-up"
import SignInPage from "@/auth/sign-in"
import RootLayout from "@/layout/root-layout"
import ProtectedRoute from "@/auth/protected-route"
import { Unauthorized } from "@/components/shared/unauthorized"
import { checkRole } from "@/auth/roles"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/hotels/:_id",
            element: <Hotel />
          },
          {
            path: "/unauthorized",
            element: <Unauthorized />
          },
          {
            path: "/admin",
            element: (
              <ProtectedRoute
                isAllowed={() => checkRole('admin')}
                redirectPath="/unauthorized"
              >
                <AdminLayout />
              </ProtectedRoute>
            ),
            children: [
              {
                path: "/admin",
                element: <AdminDashboard />
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  },
  {
    path: "/sign-up",
    element: <SignUpPage />
  }
])