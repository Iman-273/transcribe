import React, { useState } from "react";
import {
  Filter,
  ArrowUpDown,
  Calendar,
  Play,
  Eye,
  ArrowLeft,
  MessageSquare,
  Save,
  X,
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

interface AudioItem {
  id: number;
  title: string;
  size: string;
  duration: string;
  status: "Pending" | "InProgress" | "Completed";
  dueDate: string;
  timeRemaining?: string;
}

const MyAudios: React.FC = () => {
  const [audios, setAudios] = useState<AudioItem[]>([]);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedAudio, setSelectedAudio] = useState<AudioItem | null>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [transcription, setTranscription] = useState(
    "This is a sample transcription text that needs to be reviewed and corrected."
  );

  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const comments = [
    {
      id: 1,
      timestamp: "00:02:15",
      text: "Please verify the speaker name at this timestamp.",
      author: "Admin",
      date: "10/13/2025",
    },
    {
      id: 2,
      timestamp: "00:04:22",
      text: "Background noise detected — please clean up.",
      author: "Admin",
      date: "10/13/2025",
    },
  ];

  // Dummy Data
  const loadDummyData = () => {
    setAudios([
      {
        id: 1,
        title: "Interview Recording 001",
        size: "120mb",
        duration: "5 mins",
        status: "Pending",
        dueDate: "Oct 14, 2025",
        timeRemaining: "3 HOURS REMAINING",
      },
      {
        id: 2,
        title: "Assignment Preview",
        size: "140mb",
        duration: "25 mins",
        status: "Completed",
        dueDate: "Sep 10, 2025",
      },
    ]);
  };

  const filteredAudios =
    activeTab === "All"
      ? audios
      : audios.filter(
          (a) =>
            a.status.toLowerCase() === activeTab.toLowerCase().replace(" ", "")
        );

  const handleReviewClick = (audio: AudioItem) => {
    setSelectedAudio(audio);
  };

  const handleBack = () => {
    setSelectedAudio(null);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-6 relative">
        {selectedAudio ? (
          // REVIEW UI
          <div className="space-y-6">
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition"
              >
                <ArrowLeft size={16} />
                Review Now
              </button>
            </div>

            {/* Header */}
            <div className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {selectedAudio.title}
                </h2>
                <p className="text-sm text-gray-500">
                  Assigned on {selectedAudio.dueDate}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowComments(true)}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition"
                >
                  <MessageSquare size={16} /> Comments ({comments.length})
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
                  <Save size={16} /> Save as Draft
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition">
                  Submit Review
                </button>
              </div>
            </div>

            {/* Review Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Audio Player */}
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Audio Player
                </h3>

                {/* Fake waveform */}
                <div className="h-20 w-full bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                  [Audio waveform visualization]
                </div>

                {/* Controls */}
                <div className="mb-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="w-full accent-blue-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>00:00</span>
                    <span>05:00</span>
                  </div>
                </div>

                {/* Playback Buttons */}
                <div className="flex items-center justify-center gap-4 my-4">
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
                    ⏪
                  </button>
                  <button className="p-4 rounded-full bg-orange-500 text-white hover:bg-orange-600">
                    ⏸
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
                    ⏩
                  </button>
                </div>

                {/* Playback Speed */}
                <div>
                  <p className="text-sm text-gray-600 mb-2">Playback Speed:</p>
                  <div className="flex gap-2 flex-wrap">
                    {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => handleSpeedChange(speed)}
                        className={`px-3 py-1 rounded-lg text-sm border ${
                          playbackRate === speed
                            ? "bg-blue-600 text-white border-blue-600"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5 text-sm text-gray-600 space-y-1">
                  <p>
                    <span className="font-semibold">Duration:</span>{" "}
                    {selectedAudio.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {selectedAudio.status}
                  </p>
                </div>
              </div>

              {/* Edit Transcription */}
              <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Edit Transcription
                </h3>
                <textarea
                  className="flex-1 border rounded-lg p-3 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
                  value={transcription}
                  onChange={(e) => setTranscription(e.target.value)}
                  rows={10}
                ></textarea>
                <div className="mt-4 bg-blue-50 text-xs text-blue-700 p-3 rounded-lg">
                  Tip: Use keyboard shortcuts for faster editing. Press{" "}
                  <strong>Ctrl+S</strong> to save,{" "}
                  <strong>Ctrl+Space</strong> to play/pause audio.
                </div>
              </div>
            </div>
          </div>
        ) : (
          // MAIN AUDIO LIST
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">My Audios</h2>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 border rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition">
                  <Filter size={16} />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition">
                  <ArrowUpDown size={16} />
                  Sort
                </button>
                <button
                  onClick={loadDummyData}
                  className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 transition"
                >
                  Load Dummy Data
                </button>
              </div>
            </div>

            <div className="border-b mb-4 flex gap-6 text-sm font-medium text-gray-600">
              {["All", "Pending", "InProgress", "Completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 border-b-2 transition ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent hover:text-blue-500"
                  }`}
                >
                  {tab === "InProgress" ? "In Progress" : tab}
                </button>
              ))}
            </div>

            {audios.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[70vh] text-gray-400">
                <p className="text-sm font-medium">No Audios to show!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredAudios.map((audio) => (
                  <div
                    key={audio.id}
                    className="flex items-center justify-between border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-xl">
                        <Play className="text-gray-500" size={18} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{audio.title}</p>
                        <p className="text-sm text-gray-500">
                          {audio.size} · {audio.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p
                          className={`text-sm font-semibold ${
                            audio.status === "Pending"
                              ? "text-orange-500"
                              : audio.status === "Completed"
                              ? "text-green-500"
                              : "text-blue-500"
                          }`}
                        >
                          {audio.status === "InProgress"
                            ? "In Progress"
                            : audio.status}
                        </p>
                        <div className="flex items-center text-gray-500 text-sm gap-1">
                          <Calendar size={14} /> {audio.dueDate}
                        </div>
                      </div>

                      {audio.status === "Pending" && (
                        <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                          {audio.timeRemaining}
                        </span>
                      )}

                      <button
                        onClick={() =>
                          audio.status === "Pending"
                            ? handleReviewClick(audio)
                            : null
                        }
                        className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm ${
                          audio.status === "Pending"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {audio.status === "Pending" ? (
                          <>
                            <Play size={14} /> Review Now
                          </>
                        ) : (
                          <>
                            <Eye size={14} /> View Details
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* 💬 Comments Drawer */}
        {showComments && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
            <div className="w-full sm:w-96 bg-white h-full shadow-xl p-5 flex flex-col animate-slideIn">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
                <button
                  onClick={() => setShowComments(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Comment List */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {comments.map((c) => (
                  <div
                    key={c.id}
                    className="border rounded-lg p-3 bg-gray-50 shadow-sm"
                  >
                    <p className="text-sm text-gray-700 font-medium">
                      {c.timestamp}
                    </p>
                    <p className="text-sm text-gray-800 mt-1">{c.text}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-green-600 font-semibold">
                        {c.author}
                      </span>
                      <span className="text-xs text-gray-500">{c.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Comment */}
              <div className="border-t pt-3 mt-3">
                <textarea
                  rows={2}
                  placeholder="Write your comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={() => setShowComments(false)}
                    className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={!newComment.trim()}
                    className={`px-3 py-1 text-sm rounded-lg text-white ${
                      newComment.trim()
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-300 cursor-not-allowed"
                    }`}
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAudios;
