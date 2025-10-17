import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  FileAudio,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Users,
  CreditCard,
  MessageSquareText,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState("client"); // default role (client)
  const navigate = useNavigate();

  // ✅ Load role from localStorage
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) setRole(storedRole);
  }, []);

  // ✅ Define different menus based on role
  const clientNavigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Audio Files", href: "/audio-files", icon: FileAudio },
    { name: "Templates", href: "/templates", icon: FileText },
  ];

  const adminNavigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Reviewer Management", href: "/reviewermanagement", icon: Users },
    { name: "Audio Management", href: "/assignedaudios", icon: FileAudio },
    { name: "Payments", href: "/payments", icon: CreditCard },
  ];

  const reviewerNavigation = [
    { name: "Dashboard", href: "/reviewer", icon: LayoutDashboard },
    { name: "Audio Management", href: "/myaudios", icon: FileAudio },
    { name: "Feedbacks", href: "/feedbacks", icon: MessageSquareText },
  ];

  // ✅ Choose the correct navigation list
  const navigation =
    role === "admin"
      ? adminNavigation
      : role === "reviewer"
      ? reviewerNavigation
      : clientNavigation;

  return (
    <aside
      className={`relative flex flex-col min-h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        collapsed ? "w-[75px]" : "w-[240px]"
      }`}
    >
      {/* Header */}
      <div className="relative flex items-center justify-center h-[80px] border-b border-gray-100">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-auto object-contain"
          onError={(e) => {
            e.currentTarget.src =
              "https://dummyimage.com/80x80/ebf5ff/1e40af.png&text=L";
          }}
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="absolute right-3 text-gray-600 hover:text-gray-800"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-3 px-2 space-y-1 overflow-y-auto">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-[8px] text-[14px] font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              }`
            }
          >
            <item.icon className="h-[18px] w-[18px]" />
            {!collapsed && item.name}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto bg-white border-t border-gray-100">
        {/* Settings */}
        <div className="px-3 pt-3">
          <Button
            variant="ghost"
            className={`w-full justify-start gap-3 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 ${
              collapsed ? "justify-center" : ""
            }`}
            onClick={() => navigate("/settings")}
          >
            <Settings className="h-[18px] w-[18px]" />
            {!collapsed && (
              <span className="text-[14px] font-medium">Settings</span>
            )}
          </Button>
        </div>

        {/* User Profile */}
        <div
          className={`px-3 pb-4 mt-2 flex items-center gap-3 transition rounded-lg ${
            collapsed ? "justify-center" : "hover:bg-gray-50"
          }`}
        >
          <Avatar className="h-9 w-9 border border-gray-200">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>TJ</AvatarFallback>
          </Avatar>

          {!collapsed && (
            <div className="flex flex-col leading-tight overflow-hidden">
              <p className="text-[13px] font-semibold text-gray-800 truncate">
                Taha Janjua
              </p>
              <p className="text-[11px] text-gray-500 truncate">
                tahajanjua123@gmail.com
              </p>
              <p className="text-[11px] text-gray-500 mt-1 capitalize">
                Role: {role}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
