import React from "react";
import { Download, MoreVertical, Calendar, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const assignments = [
  {
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    assignedTo: "Alex Neilson",
    status: "Pending",
    date: "Jun 12, 2024",
    remaining: "3 HOURS REMAINING",
  },
  {
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    assignedTo: "Alex Neilson",
    status: "Pending",
    date: "Jun 12, 2024",
    remaining: "3 HOURS REMAINING",
  },
  {
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    assignedTo: "Alex Neilson",
    status: "Completed",
    date: "Jun 12, 2024",
  },
  {
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    assignedTo: "Alex Neilson",
    status: "Completed",
    date: "Jun 12, 2024",
  },
  {
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    assignedTo: "Alex Neilson",
    status: "Completed",
    date: "Jun 12, 2024",
  },
];

export default function AdminDashboard() {
  const handleChangeRole = () => {
    localStorage.removeItem("userRole");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col md:flex-row">
      {/* ✅ Sidebar */}
      <Sidebar />

      {/* ✅ Main Section */}
      <div className="flex-1 flex flex-col w-full">
        <Header />

        {/* ✅ Scrollable Content */}
        <div className="p-4 sm:p-6 lg:p-8 w-full max-w-[1400px] mx-auto">
          {/* ✅ Page Top Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">
                Wednesday, May 14
              </p>
              <h1 className="text-xl sm:text-2xl font-semibold mt-1">
                Good Evening, Admin
              </h1>
              <p className="text-gray-500 text-sm mt-1 max-w-md">
                Manage reviewers, payments, and audio workflows efficiently
                across the platform.
              </p>
            </div>

            <Button
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-auto justify-center"
              onClick={handleChangeRole}
            >
              <LogOut size={16} />
              Change Role
            </Button>
          </div>

          {/* ✅ Quick Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {[
              {
                title: "Invite Reviewer",
                desc: "Onboard new reviewers quickly to expand your transcription network.",
              },
              {
                title: "Pending Payments",
                desc: "Review and resolve pending transactions for seamless management.",
              },
              {
                title: "Export Reports",
                desc: "Generate detailed reports to track performance and activity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow-sm border hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-700 text-sm sm:text-base">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Reviewers Online", value: "3.4K" },
              { title: "Pending Audios", value: "133" },
              { title: "Payments This Year", value: "$3,435" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {stat.value}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Recently Assigned Audios */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b gap-2">
              <h3 className="font-semibold text-base sm:text-lg">
                Recently Assigned Audios
              </h3>
              <button className="text-blue-500 text-sm font-medium hover:underline">
                View All
              </button>
            </div>

            {assignments.map((a, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b last:border-0 p-4 hover:bg-gray-50 transition"
              >
                {/* Left Section */}
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                    🎵
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-base truncate">
                      {a.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {a.size} • {a.duration} •{" "}
                      <span className="font-medium text-gray-700">
                        {a.assignedTo}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-3 sm:mt-0 w-full sm:w-auto">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 flex-wrap">
                    {a.status === "Pending" ? (
                      <span className="text-orange-500 font-medium">
                        Pending
                      </span>
                    ) : (
                      <span className="text-green-600 font-medium">
                        Completed
                      </span>
                    )}
                    <Calendar size={14} className="hidden xs:block" />
                    <span>{a.date}</span>
                  </div>

                  <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                    <button className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-gray-800">
                      <Download size={14} className="mr-1" /> Download
                    </button>
                    <MoreVertical size={18} className="text-gray-400" />
                  </div>

                  {a.remaining && (
                    <span className="mt-2 sm:mt-0 text-[10px] sm:text-xs text-white bg-red-500 px-2 py-1 rounded-full self-start sm:self-center whitespace-nowrap">
                      {a.remaining}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
