import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Mail,
  Image,
  Folder,
  Puzzle,
  Settings,
  Plus,
  UploadCloud,
  ChevronDown,
} from "lucide-react";
import avatarSrc from "@/assets/avatar.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="h-screen w-64 border-r bg-[#152033] text-white flex flex-col">

      {/* Logo */}
      <div className="p-4 text-xl font-bold">
        EmailOS
      </div>

      <Separator />

      {/* Navigation */}
      <nav className="flex flex-col gap-3 p-3">

        <Button
          variant="ghost"
          className={`justify-start hover:bg-[#233875] ${
            isActive("/dashboard") ? "bg-[#233875]" : ""
          }`}
          onClick={() => navigate("/dashboard")}
        >
          <LayoutDashboard className="mr-2" />
          Dashboard
        </Button>

        <Button variant="ghost" className="justify-start hover:bg-[#233875]">
          <Mail className="mr-2" />
          Previous Emails
        </Button>

        <Button variant="ghost" className="justify-start hover:bg-[#233875]">
          <Image className="mr-2" />
          Media Library
        </Button>

        <Button variant="ghost" className="justify-start hover:bg-[#233875]">
          <Folder className="mr-2" />
          Folder Manager
        </Button>

        <Button variant="ghost" className="justify-start hover:bg-[#233875]">
          <Puzzle className="mr-2" />
          Integrations
        </Button>

        <Button variant="ghost" className="justify-start hover:bg-[#233875]">
          <Settings className="mr-2" />
          Settings
        </Button>
      </nav>

      <Separator className="my-2" />

      {/* Secondary section */}
      <div className="p-2 flex flex-col gap-1">

        <Button
          variant="outline"
          className="justify-start hover:bg-[#233875]"
          onClick={() => navigate("/editor")}
        >
          <Plus className="mr-2" />
          New Email
        </Button>

        <Button variant="ghost" className="justify-start text-sm hover:bg-[#233875]">
          <UploadCloud className="mr-2" />
          Import Template
        </Button>
      </div>

      {/* Bottom user section */}
      <div className="mt-auto p-3 border-t">
        <div className="relative">

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="w-full flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-[#233875] transition-colors"
          >
            <Avatar>
              <AvatarImage src={avatarSrc} />
              <AvatarFallback>MV</AvatarFallback>
            </Avatar>

            <div className="flex-1 text-left text-sm">
              <div className="font-medium">Mitch</div>
              <div className="text-muted-foreground text-xs">Free Plan</div>
            </div>

            <ChevronDown
              className={`transition-transform ${menuOpen ? "-rotate-90" : ""}`}
            />
          </button>

          {menuOpen && (
            <div className="absolute left-full bottom-0 ml-2 z-10 min-w-[12rem] overflow-hidden rounded-xl border border-white/10 bg-[#152033] shadow-lg">

              <button
                onClick={() => setMenuOpen(false)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-[#233875]"
              >
                Account
              </button>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-[#233875]"
              >
                Billing
              </button>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-[#233875]"
              >
                Log out
              </button>

            </div>
          )}

        </div>
      </div>
    </aside>
  );
}