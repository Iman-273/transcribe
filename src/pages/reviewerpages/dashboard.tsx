import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Play, Clock, CheckCircle, DollarSign, Calendar, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PendingAudio {
  id: number;
  title: string;
  size: string;
  duration: string;
  status: string;
  dueDate: string;
  timeRemaining: string;
}

const pendingAudios: PendingAudio[] = [
  {
    id: 1,
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    status: "Pending",
    dueDate: "Jun 12, 2024",
    timeRemaining: "3 HOURS REMAINING",
  },
  {
    id: 2,
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    status: "Pending",
    dueDate: "Jun 12, 2024",
    timeRemaining: "3 HOURS REMAINING",
  },
  {
    id: 3,
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    status: "Pending",
    dueDate: "Jun 12, 2024",
    timeRemaining: "3 HOURS REMAINING",
  },
  {
    id: 4,
    title: "Assignment Preview",
    size: "120mb",
    duration: "35min",
    status: "Pending",
    dueDate: "Jun 12, 2024",
    timeRemaining: "3 HOURS REMAINING",
  },
];

export default function ReviewerDashboard() {
  const navigate = useNavigate();

  const handleChangeRole = () => {
    localStorage.removeItem("userRole"); // remove saved role
    navigate("/", { replace: true }); // redirect to role selection
    window.location.reload(); // reload app so role resets
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
            <h1 className="text-2xl font-semibold mt-1">Good Evening, Alex</h1>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              Review assigned audios, refine transcriptions, and deliver
              high-quality results efficiently.
            </p>
          </div>

          {/* Change Role Button */}
          <button
            onClick={handleChangeRole}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition"
          >
            <RefreshCcw size={16} /> Change Role
          </button>
        </div>


        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm border">
            <p className="font-semibold text-gray-700">Start Reviewing</p>
            <p className="text-sm text-gray-500 mt-1 mb-3">
              Open the first pending audio file and begin your review process.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm">
              <Play size={16} /> Start
            </button>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border">
            <p className="font-semibold text-gray-700">View Feedback</p>
            <p className="text-sm text-gray-500 mt-1">
              See feedback from admins and users on your reviews.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border">
            <p className="font-semibold text-gray-700">Help & Guidelines</p>
            <p className="text-sm text-gray-500 mt-1">
              Access training documentation and transcription best practices.
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-xl">
                <Play className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Assigned Audios</p>
                <h2 className="text-2xl font-semibold">129</h2>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-xl">
                <Clock className="text-orange-500" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">In Progress</p>
                <h2 className="text-2xl font-semibold">133</h2>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-xl">
                <CheckCircle className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Completed</p>
                <h2 className="text-2xl font-semibold">200</h2>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-xl">
                <DollarSign className="text-gray-800" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Earnings</p>
                <h2 className="text-2xl font-semibold">$3,435</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Audios */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Pending Audios</h3>
            <button className="text-blue-500 text-sm font-medium hover:underline">
              View All
            </button>
          </div>

          {pendingAudios.map((audio) => (
            <div
              key={audio.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b last:border-0 p-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                  🎧
                </div>
                <div>
                  <p className="font-semibold">{audio.title}</p>
                  <p className="text-sm text-gray-500">
                    {audio.size} • {audio.duration}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-3 sm:mt-0">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="text-orange-500 font-medium">
                    {audio.status}
                  </span>
                  <Calendar size={16} />
                  <span>{audio.dueDate}</span>
                </div>

                <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm">
                    <Play size={14} /> Review Now
                  </button>
                  <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                    {audio.timeRemaining}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
