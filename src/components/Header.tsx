import { Search, Bell, ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  breadcrumb?: string;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ breadcrumb, showBack }) => {
  const navigate = useNavigate();

  return (
    <header
      className="
        flex flex-col sm:flex-row items-center justify-between
        bg-white border-b border-gray-100 
        px-3 sm:px-5 md:px-6 
        h-auto sm:h-[64px]
        sticky top-0 z-40
        w-full
        overflow-hidden
        gap-2 sm:gap-0
      "
    >
      {/* ✅ Top Row (Left Side on Desktop, Centered on Mobile) */}
      <div
        className="
          flex items-center justify-between sm:justify-start 
          w-full sm:w-auto 
          gap-3 sm:gap-4 
          flex-1 min-w-0
        "
      >
        {/* ⬅️ Back button (visible on tablet and up) */}
        {showBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="hidden sm:flex text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}

        {/* 📌 Breadcrumb */}
        {breadcrumb && (
          <h1
            className="
              text-[15px] sm:text-[16px] md:text-[17px] 
              font-semibold text-gray-900 
              truncate 
              max-w-[140px] sm:max-w-[200px] md:max-w-none
            "
          >
            {breadcrumb}
          </h1>
        )}

        {/* 🔔 Notification + Avatar (on mobile show before search) */}
        <div className="flex sm:hidden items-center gap-3 ml-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
          >
            <Bell className="h-[18px] w-[18px]" />
          </Button>

          <Avatar className="h-8 w-8 border border-gray-200">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>TJ</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* ✅ Search (moves to right side on mobile) */}
      <div
        className="
          relative w-full sm:w-[220px] md:w-[260px] 
          sm:order-none order-last
        "
      >
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          placeholder="Search"
          className="
            h-9 w-full 
            rounded-lg border border-gray-200 
            bg-gray-50 pl-9 text-sm 
            text-gray-700 
            focus-visible:ring-0 focus-visible:border-gray-300
          "
        />
      </div>

      {/* ✅ Right Section (desktop only) */}
      <div className="hidden sm:flex items-center gap-3 sm:gap-4 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="
            text-gray-500 hover:text-gray-700 
            hover:bg-gray-100 
            rounded-full
          "
        >
          <Bell className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
        </Button>

        <Avatar className="h-8 w-8 sm:h-9 sm:w-9 border border-gray-200">
          <AvatarImage src="/placeholder.svg" alt="Profile" />
          <AvatarFallback>TJ</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
