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
  Menu,
  X,
  SettingsIcon,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [role, setRole] = useState("client");
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) setRole(storedRole);
  }, []);

  const clientNavigation = [
    { name: "Dashboard", href: "/client/dashboard", icon: LayoutDashboard },
    { name: "Audio Files", href: "/client/audio-files", icon: FileAudio },
    { name: "Templates", href: "/client/templates", icon: FileText },
    { name: "Settings", href: "/client/settings", icon: SettingsIcon },
  ];

  const adminNavigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Reviewer Management", href: "/admin/reviewermanagement", icon: Users },
    { name: "Audio Management", href: "/admin/assignedaudios", icon: FileAudio },
    { name: "Payments", href: "/admin/payments", icon: CreditCard },
  ];

  const reviewerNavigation = [
    { name: "Dashboard", href: "/reviewer/dashboard", icon: LayoutDashboard },
    { name: "Audio Management", href: "/reviewer/myaudios", icon: FileAudio },
    { name: "Feedbacks", href: "/reviewer/feedbacks", icon: MessageSquareText },
  ];

  const navigation =
    role === "admin"
      ? adminNavigation
      : role === "reviewer"
      ? reviewerNavigation
      : clientNavigation;

  return (
    <>
      {/* ✅ Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-700"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* ✅ Sidebar */}
      <aside
        className={`fixed md:relative flex flex-col min-h-screen bg-white border-r border-gray-200 transition-all duration-300 z-40
          ${collapsed ? "w-[75px]" : "w-[240px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
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

          {/* Collapse Button (hidden on mobile) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="absolute right-3 text-gray-600 hover:text-gray-800 hidden md:flex"
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
              onClick={() => setMobileOpen(false)} // ✅ Close menu on mobile click
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
              onClick={() => {
                navigate("/client/settings");
                setMobileOpen(false);
              }}
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

      {/* ✅ Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};
