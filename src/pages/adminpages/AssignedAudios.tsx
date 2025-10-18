import React, { useState } from "react";
import {
  Filter,
  ArrowUpDown,
  FileText,
  X,
  MoreVertical,
  Calendar,
  Download,
  Music,
  PlayCircle,
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export default function AssignedAudios() {
  const [showManualModal, setShowManualModal] = useState(false);
  const [showAutoModal, setShowAutoModal] = useState(false);
  const [audios, setAudios] = useState<any[]>([]);

  const loadDummyData = () => {
    setAudios([
      {
        id: 1,
        title: "Assignment Preview",
        size: "120mb",
        duration: "35min",
        reviewer: "Alex Neilson",
        reviewerImg: "https://i.pravatar.cc/30?img=11",
        status: "Pending",
        date: "Jun 12, 2024",
        remaining: "3 HOURS REMAINING",
      },
      {
        id: 2,
        title: "Assignment Preview",
        size: "120mb",
        duration: "35min",
        reviewer: "Alex Neilson",
        reviewerImg: "https://i.pravatar.cc/30?img=12",
        status: "Pending",
        date: "Jun 12, 2024",
        remaining: "3 HOURS REMAINING",
      },
      {
        id: 3,
        title: "Assignment Preview",
        size: "120mb",
        duration: "35min",
        reviewer: "Alex Neilson",
        reviewerImg: "https://i.pravatar.cc/30?img=13",
        status: "Completed",
        date: "Jun 12, 2024",
      },
    ]);
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] text-gray-800">
      {/* ✅ Sidebar */}
      <Sidebar />

      {/* ✅ Main Section */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-[#F9FAFB]">
          <Header />
        </div>

        {/* ✅ Page Content */}
        <main className="flex-1 p-3 sm:p-6 mt-2">
          {/* Top Controls */}
          <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
              Assigned Audios
            </h1>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition">
                <Filter size={16} /> Filter
              </button>

              <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition">
                <ArrowUpDown size={16} /> Sort
              </button>

              <button
                onClick={loadDummyData}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition shadow-sm"
              >
                Load Data
              </button>

              <button
                onClick={() => setShowAutoModal(true)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium text-white bg-[#FFA500] hover:bg-[#ff9500] transition shadow-sm"
              >
                Auto Assign
              </button>

              <button
                onClick={() => setShowManualModal(true)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052cc] transition shadow-sm"
              >
                Manual Assign
              </button>
            </div>
          </div>

          {/* ✅ Empty State / List */}
          {audios.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center h-[60vh] text-gray-500 shadow-sm">
              <FileText size={64} strokeWidth={1.5} className="text-gray-300 mb-3" />
              <p className="text-sm font-medium">No Assigned Audios!</p>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-3 sm:p-5 space-y-3">
              {audios.map((audio) => (
                <div
                  key={audio.id}
                  className="flex flex-col sm:flex-row justify-between sm:items-center border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4 flex-1 min-w-[200px] mb-3 sm:mb-0">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Music size={22} className="text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                        {audio.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {audio.size} · {audio.duration} · Assigned to:{" "}
                        <span className="font-medium text-gray-700 inline-flex items-center gap-1">
                          <img
                            src={audio.reviewerImg}
                            alt="Reviewer"
                            className="w-5 h-5 rounded-full"
                          />
                          {audio.reviewer}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Middle */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-0">
                    {audio.status === "Pending" && (
                      <span className="text-xs sm:text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-md">
                        Pending
                      </span>
                    )}
                    {audio.status === "Completed" && (
                      <span className="text-xs sm:text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-md">
                        Completed
                      </span>
                    )}
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                      <Calendar size={15} className="mr-1" /> {audio.date}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-end">
                    {audio.remaining && (
                      <span className="text-[10px] sm:text-xs font-semibold text-white bg-red-500 px-2 py-1 rounded-md uppercase whitespace-nowrap">
                        {audio.remaining}
                      </span>
                    )}
                    <button className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-100 transition">
                      <Download size={14} /> Transcript
                    </button>
                    <MoreVertical size={18} className="text-gray-500 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ✅ Manual Assign Modal */}
      {showManualModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-3">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative">
            <button
              onClick={() => setShowManualModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-5 text-center">
              Assign Manually
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Audio
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]">
                <option>Select audio</option>
                <option>abfgf.mp3</option>
                <option>audio2.mp3</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Reviewer
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]">
                <option>Reviewer</option>
                <option>Reviewer 1</option>
                <option>Reviewer 2</option>
              </select>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowManualModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052cc] rounded-md transition">
                Assign
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Auto Assign Modal */}
      {showAutoModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-3">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm sm:max-w-md p-6 sm:p-8 relative text-center">
            <button
              onClick={() => setShowAutoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            <div className="flex justify-center mb-5">
              <PlayCircle size={64} strokeWidth={1.5} className="text-[#0066FF]" />
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Auto Assign
            </h2>
            <p className="text-sm text-gray-600 mb-6 px-2 sm:px-4">
              The system will automatically distribute pending audios to
              available reviewers based on workload and expertise.
            </p>

            <button className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-md font-medium text-sm transition">
              <PlayCircle size={16} />
              Start Auto Assign
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
