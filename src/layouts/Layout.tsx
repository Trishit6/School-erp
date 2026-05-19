import { Outlet } from "react-router-dom"
import Sidebar from "../components/layout/sidebar"
import Topbar from "../components/layout/topbar"

export default function Layout() {
  return (
    <div className="flex h-screen bg-[#f6f7f9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-4 md:p-5">
          <Outlet />
        </main>
      </div>
    </div>
  )
}