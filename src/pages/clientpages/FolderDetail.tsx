import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileAudio,
  Filter,
  ArrowUpDown,
  Send,
  Download,
  MoreVertical,
  Mic,
  Upload,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const audioFiles = [
  { id: 1, name: "Assignment Preview", size: "120mb, 35min", status: "Uploaded", date: "Jun 12, 2024", remaining: null },
  { id: 2, name: "Assignment Preview", size: "120mb, 35min", status: "Pending", date: "Jun 12, 2024", remaining: "3 HOURS REMAINING" },
  { id: 3, name: "Assignment Preview", size: "120mb, 35min", status: "Pending", date: "Jun 12, 2024", remaining: "3 HOURS REMAINING" },
  { id: 4, name: "Assignment Preview", size: "120mb, 35min", status: "Completed", date: "Jun 12, 2024", remaining: null },
  { id: 5, name: "Assignment Preview", size: "120mb, 35min", status: "Completed", date: "Jun 12, 2024", remaining: null },
  { id: 6, name: "Assignment Preview", size: "120mb, 35min", status: "Uploaded", date: "Jun 12, 2024", remaining: null },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-[#E8FAEF] text-[#21A45D]";
    case "Pending":
      return "bg-[#FFF4E5] text-[#FF9F29]";
    case "Uploaded":
      return "bg-[#E6F0FF] text-[#006AFF]";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function FolderDetail() {
  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isRecordOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isRecordOpen]);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#FAFBFC] overflow-hidden">
      {/* ✅ Blur background when modal is open */}
      <div
        className={`transition-all duration-300 ${
          isRecordOpen ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <Header />

        <main className="flex-1 p-4 sm:p-6 md:p-8 space-y-6">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Folder Details
            </h1>

            <div className="flex flex-wrap justify-start sm:justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-700 hover:text-gray-900"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-700 hover:text-gray-900"
              >
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort
              </Button>
              <Button
                size="sm"
                className="bg-[#FF9F29] hover:bg-[#f18c13] text-white"
                onClick={() => setIsRecordOpen(true)}
              >
                <Mic className="mr-2 h-4 w-4" />
                Speech Mic
              </Button>
              <Button
                size="sm"
                className="bg-[#007BFF] hover:bg-[#0069d9] text-white"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Audio
              </Button>
            </div>
          </div>

          {/* Audio Files */}
          <div className="grid grid-cols-1 gap-4 md:gap-5">
            {audioFiles.map((file) => (
              <div
                key={file.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between border border-gray-100 bg-white rounded-xl p-4 sm:p-5 hover:shadow-sm transition-all"
              >
                {/* File Info */}
                <div className="flex items-center gap-4 mb-3 md:mb-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F0FF]">
                    <FileAudio className="h-6 w-6 text-[#007BFF]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-500">{file.size}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 w-full md:w-auto">
                  {file.remaining && (
                    <Badge className="bg-[#FFE5E5] text-[#E53935] font-medium px-3 py-1 rounded-md text-xs sm:text-sm">
                      {file.remaining}
                    </Badge>
                  )}
                  <Badge
                    className={`${getStatusVariant(
                      file.status
                    )} font-medium px-3 py-1 rounded-md text-xs sm:text-sm`}
                  >
                    {file.status}
                  </Badge>
                  <span className="text-xs sm:text-sm text-gray-500 w-24 text-right">
                    {file.date}
                  </span>

                  {file.status === "Uploaded" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-200 text-[#007BFF] hover:bg-[#E6F0FF]"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  )}

                  {file.status === "Completed" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-200 text-gray-700 hover:bg-gray-100"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  )}

                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* ✅ Record Modal */}
      {isRecordOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm px-3">
          <div className="bg-white w-[90%] max-w-[500px] md:max-w-[600px] lg:max-w-[650px] rounded-2xl shadow-lg relative p-6 sm:p-8 animate-fadeIn">
            <button
              onClick={() => setIsRecordOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center space-y-6 mt-3">
              {/* Mic Icon */}
              <div className="relative">
                <div
                  className={`rounded-full p-8 ${
                    isRecording ? "bg-[#FFF4E5] animate-pulse" : "bg-[#E6F0FF]"
                  }`}
                >
                  <Mic
                    className={`h-16 w-16 ${
                      isRecording ? "text-[#FF9F29]" : "text-[#007BFF]"
                    }`}
                  />
                </div>
                {isRecording && (
                  <div className="absolute -top-2 -right-2 bg-[#FF9F29] rounded-full p-2">
                    <div className="h-3 w-3 bg-white rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              {/* Transcript Preview */}
              <div className="w-full rounded-lg border border-gray-200 bg-[#FAFAFA] px-4 py-6 sm:py-8 text-gray-700 text-base sm:text-lg leading-relaxed shadow-sm">
                Hi, my name is <span className="font-semibold">Jack Mor</span>
              </div>

              {/* Waveform */}
              <div className="w-full flex justify-center h-16 items-center gap-[2px] overflow-hidden">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-full bg-[#FF9F29]"
                    style={{
                      height: `${Math.random() * 60 + 10}%`,
                      animation: `wave ${Math.random() * 0.6 + 0.4}s ease-in-out infinite`,
                    }}
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsRecording(!isRecording)}
                  className={`border-gray-300 ${
                    isRecording
                      ? "text-[#E53935] hover:bg-[#FFE5E5]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {isRecording ? "Stop" : "Record again"}
                </Button>
                <Button
                  size="lg"
                  className="bg-[#007BFF] hover:bg-[#0069d9] text-white"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Small animation */}
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: scaleY(0.4); }
            50% { transform: scaleY(1); }
          }
        `}
      </style>
    </div>
  );
}
