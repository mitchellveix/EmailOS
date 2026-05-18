import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { FilePlus, LayoutGrid, Folder, Clock } from "lucide-react";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 bg-[#e7edf3]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, Mitch!</p>
          </div>
          <Button className="bg-[#233875] text-white hover:bg-blue-700 px-4 py-5">+ Create New Email</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
          <DashboardCard
            title="Create New Email"
            description="Start with a template"
            bgColor="#ecf1fc"
            titleColor="#1c2c4f"
            Icon={FilePlus}
          />
          <DashboardCard
            title="Templates"
            description="Browse your email templates"
            bgColor="#f2f0fc"
            titleColor="#2f2952"
            Icon={LayoutGrid}
          />
          <DashboardCard
            title="Folders"
            description="Organize emails into folders"
            bgColor="#ebf5ef"
            titleColor="#234434"
            Icon={Folder}
          />
          <DashboardCard
            title="Recent Emails"
            description="View your recent emails"
            bgColor="#fbf5eb"
            titleColor="#5a4720"
            Icon={Clock}
          />
        </div>
      </main>
    </div>
  );
}