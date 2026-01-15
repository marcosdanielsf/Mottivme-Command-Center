import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { DashboardContent } from "@/components/dashboard-content"

export default function HomePage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden lg:ml-0">
        <Header />
        <main className="flex-1 overflow-y-auto pt-16 lg:pt-0">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}
