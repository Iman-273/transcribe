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

export default function AssignedAudios() {
  const [showManualModal, setShowManualModal] = useState(false);
  const [showAutoModal, setShowAutoModal] = useState(false);
  const [audios, setAudios] = useState([]);

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
      {
        id: 4,
        title: "Assignment Preview",
        size: "120mb",
        duration: "35min",
        reviewer: "Alex Neilson",
        reviewerImg: "https://i.pravatar.cc/30?img=14",
        status: "Completed",
        date: "Jun 12, 2024",
      },
      {
        id: 5,
        title: "Assignment Preview",
        size: "120mb",
        duration: "35min",
        reviewer: "Alex Neilson",
        reviewerImg: "https://i.pravatar.cc/30?img=15",
        status: "Completed",
        date: "Jun 12, 2024",
      },
    ]);
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] text-gray-800">
      {/* ✅ Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* ✅ Main Content Area */}
      <main className="flex-1 ml-[240px] p-6 transition-all">
        {/* Header Bar */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          <h1 className="text-lg font-semibold text-gray-900">
            Assigned Audios
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition">
              <Filter size={16} /> Filter
            </button>

            <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition">
              <ArrowUpDown size={16} /> Sort
            </button>

            <button
              onClick={loadDummyData}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition shadow-sm"
            >
              Load Dummy Data
            </button>

            <button
              onClick={() => setShowAutoModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#FFA500] hover:bg-[#ff9500] transition shadow-sm"
            >
              Assign Auto
            </button>

            <button
              onClick={() => setShowManualModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052cc] transition shadow-sm"
            >
              Assign Manually
            </button>
          </div>
        </div>

        {/* Content */}
        {audios.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center h-[70vh] text-gray-500 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <FileText
                size={64}
                strokeWidth={1.5}
                className="text-gray-300 mb-3"
              />
              <p className="text-sm font-medium">No Assigned audios to show!</p>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
            {audios.map((audio) => (
              <div
                key={audio.id}
                className="flex flex-wrap justify-between items-center border border-gray-100 rounded-lg p-4 mb-3 hover:bg-gray-50 transition"
              >
                {/* Left */}
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Music size={24} className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">
                      {audio.title}
                    </h3>
                    <p className="text-xs text-gray-500">
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
                <div className="flex items-center gap-4 mt-3 sm:mt-0">
                  {audio.status === "Pending" && (
                    <span className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-md">
                      Pending
                    </span>
                  )}
                  {audio.status === "Completed" && (
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-md">
                      Completed
                    </span>
                  )}
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" /> {audio.date}
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                  {audio.remaining && (
                    <span className="text-[10px] font-semibold text-white bg-red-500 px-2 py-1 rounded-md uppercase">
                      {audio.remaining}
                    </span>
                  )}
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-100">
                    <Download size={14} /> Download Transcript
                  </button>
                  <MoreVertical
                    size={18}
                    className="text-gray-500 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ✅ Manual Assign Modal */}
      {showManualModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg w-[400px] p-6 relative">
            <button
              onClick={() => setShowManualModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-5">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg w-[420px] p-8 relative text-center">
            <button
              onClick={() => setShowAutoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            <div className="flex justify-center mb-5">
              <PlayCircle
                size={72}
                strokeWidth={1.5}
                className="text-[#0066FF]"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Auto Assign
            </h2>
            <p className="text-sm text-gray-600 mb-6 px-2">
              The system will automatically distribute pending audios to
              available reviewers based on their workload and expertise.
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
