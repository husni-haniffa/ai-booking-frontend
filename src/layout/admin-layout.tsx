import { Outlet } from "react-router-dom"


export function AdminLayout() {
  return (
    <main className="container mx-auto py-8">
      <Outlet />
    </main>
  )
}
