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
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
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

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFC]">
      <Header breadcrumb="Audios" />

      <main className="flex-1 space-y-6 p-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <h1 className="text-[22px] font-semibold text-gray-900">
            All Folders
          </h1>
          <div className="flex gap-2">
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

        {/* Audio File List */}
        <div className="space-y-3">
          {audioFiles.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-5 py-4 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F0FF]">
                  <FileAudio className="h-6 w-6 text-[#007BFF]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">{file.size}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {file.remaining && (
                  <Badge className="bg-[#FFE5E5] text-[#E53935] font-medium px-3 py-1 rounded-md">
                    {file.remaining}
                  </Badge>
                )}
                <Badge
                  className={`${getStatusVariant(
                    file.status
                  )} font-medium px-3 py-1 rounded-md`}
                >
                  {file.status}
                </Badge>
                <span className="text-sm text-gray-500 w-24 text-right">
                  {file.date}
                </span>

                {file.status === "Uploaded" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-200 text-[#007BFF] hover:bg-[#E6F0FF]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send to Transcribe
                  </Button>
                )}

                {file.status === "Completed" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-200 text-gray-700 hover:bg-gray-100"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Transcript
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

      {/* Recording Dialog */}
      <Dialog open={isRecordOpen} onOpenChange={setIsRecordOpen}>
        <DialogContent className="sm:max-w-xl rounded-xl p-8">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Mic Icon */}
            <div className="relative">
              <div
                className={`rounded-full p-8 ${
                  isRecording
                    ? "bg-[#FFF4E5] animate-pulse"
                    : "bg-[#E6F0FF]"
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
            <div className="w-full rounded-lg border border-gray-200 bg-white px-4 py-8 text-gray-700 text-lg leading-relaxed shadow-sm">
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
                    animation: `wave ${
                      Math.random() * 0.6 + 0.4
                    }s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
