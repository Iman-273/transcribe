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
    <Card className="rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
      <CardContent className="flex items-center justify-between px-5 py-5">
        {/* Text Section */}
        <div>
          <p className="text-[13px] font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-[26px] font-semibold text-gray-800 leading-none">
            {value}
          </p>
        </div>

        {/* Icon Section */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${iconColor}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  );
};
