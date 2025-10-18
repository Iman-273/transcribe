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
    <header className="flex items-center justify-between h-16 bg-white border-b border-gray-100 px-6 sticky top-0 z-40">
      {/* ✅ Left Section: Search + Breadcrumb / Back */}
      <div className="flex items-center gap-4 flex-1 ml-8 sm:ml-0">
        {/* Search bar */}
        <div className="relative w-[250px] lg:w-[250px] md:w-[200px] sm:w-[160px] xs:w-[130px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search"
            className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 text-sm text-gray-700 focus-visible:ring-0 focus-visible:border-gray-300"
          />
        </div>

        {showBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-900 hidden sm:flex"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}

        {breadcrumb && (
          <h1 className="text-[17px] font-semibold text-gray-900 truncate max-w-[140px] sm:max-w-none">
            {breadcrumb}
          </h1>
        )}
      </div>

      {/* ✅ Right Section: Notification + Avatar */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          <Avatar className="h-9 w-9 border border-gray-200">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>TJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
