import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"

export function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}
