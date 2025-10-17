import React from "react";
import { Download, MoreVertical, Calendar, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/Sidebar"; // ✅ Adjust path if needed

// ✅ Assignment data (replace or fetch dynamically)
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
    window.location.reload(); // 🔄 Return to role selection
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm text-gray-500">Wednesday, May 14</p>
            <h1 className="text-2xl font-semibold mt-1">Good Evening, Admin</h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage reviewers, payments, and audio workflows efficiently across
              the platform.
            </p>
          </div>

          {/* Change Role Button */}
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleChangeRole}
          >
            <LogOut size={16} />
            Change Role
          </Button>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm border">
            <p className="font-semibold text-gray-700">Invite Reviewer</p>
            <p className="text-sm text-gray-500 mt-1">
              Onboard new reviewers quickly to expand your transcription
              network.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border">
            <p className="font-semibold text-gray-700">Pending Payments</p>
            <p className="text-sm text-gray-500 mt-1">
              Review and resolve pending transactions for seamless management.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border">
            <p className="font-semibold text-gray-700">Export Reports</p>
            <p className="text-sm text-gray-500 mt-1">
              Generate detailed reports to track performance and activity.
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border shadow-sm flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Reviewers Online</p>
              <h2 className="text-2xl font-semibold">3.4K</h2>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 border shadow-sm flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Audios</p>
              <h2 className="text-2xl font-semibold">133</h2>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 border shadow-sm flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Payments This Year</p>
              <h2 className="text-2xl font-semibold">$3,435</h2>
            </div>
          </div>
        </div>

        {/* Recently Assigned Audios */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Recently Assigned Audios</h3>
            <button className="text-blue-500 text-sm font-medium hover:underline">
              View All
            </button>
          </div>

          {assignments.map((a, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b last:border-0 p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                  🎵
                </div>
                <div>
                  <p className="font-semibold">{a.title}</p>
                  <p className="text-sm text-gray-500">
                    {a.size} • {a.duration} • Assigned to:{" "}
                    <span className="text-gray-800 font-medium">
                      {a.assignedTo}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-3 sm:mt-0">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  {a.status === "Pending" ? (
                    <span className="text-orange-500 font-medium">Pending</span>
                  ) : (
                    <span className="text-green-600 font-medium">
                      Completed
                    </span>
                  )}
                  <Calendar size={16} />
                  <span>{a.date}</span>
                </div>

                <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                  <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                    <Download size={16} className="mr-1" /> Download Transcript
                  </button>
                  <MoreVertical size={18} className="text-gray-400" />
                </div>

                {a.remaining && (
                  <span className="ml-auto sm:ml-0 mt-2 sm:mt-0 text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                    {a.remaining}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
