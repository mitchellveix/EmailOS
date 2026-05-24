import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import DashboardPage from "@/pages/DashboardPage";
import EditorPage from "@/pages/EditorPage";

export default function App() {
  const location = useLocation();
  const showSidebar = location.pathname === "/dashboard";

  return (
    <div className="flex min-h-screen">
      {showSidebar && <Sidebar />}

      <main
        className={`flex-1 bg-[#f9fafc] ${
          showSidebar ? "p-6" : ""
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/editor"
            element={<EditorPage />}
          />
        </Routes>
      </main>
    </div>
  );
}