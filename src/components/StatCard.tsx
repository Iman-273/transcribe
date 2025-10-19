import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string; // e.g. "bg-green-100 text-green-500"
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  iconColor,
}: StatCardProps) => {
  return (
    <Card
      className="
        rounded-2xl 
        border border-gray-100 
        shadow-sm 
        bg-white 
        hover:shadow-md 
        transition-all 
        flex-grow 
        h-full 
        overflow-hidden
      "
    >
      <CardContent
        className="
          flex 
          items-center 
          justify-between 
          px-4 
          sm:px-5 
          py-4 
          sm:py-5 
          w-full 
          h-full
        "
      >
        {/* ✅ Text Section */}
        <div className="flex flex-col justify-center w-full min-w-0">
          <p className="text-[12px] sm:text-sm font-medium text-gray-500 truncate">
            {title}
          </p>
          <p className="mt-1 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight truncate">
            {value}
          </p>
        </div>

        {/* ✅ Icon Section */}
        <div
          className={`
            flex 
            items-center 
            justify-center 
            rounded-full 
            shrink-0 
            ${iconColor}
            h-8 w-8 sm:h-10 sm:w-10 
          `}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      </CardContent>
    </Card>
  );
};
