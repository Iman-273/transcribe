import { useState } from "react";
import {
  Clock,
  Upload,
  FileText,
  DollarSign,
  Music,
  X,
  UploadCloud,
  ChevronDown,
  Plus,
} from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recentTranscripts = [
  { id: 1, name: "Assignment Preview", duration: "120mb · 35min", status: "Pending", date: "Jun 12, 2024" },
  { id: 2, name: "Assignment Preview", duration: "120mb · 35min", status: "Completed", date: "Jun 12, 2024" },
  { id: 3, name: "Assignment Preview", duration: "120mb · 35min", status: "Uploaded", date: "Jun 12, 2024" },
  { id: 4, name: "Assignment Preview", duration: "120mb · 35min", status: "Pending", date: "Jun 12, 2024" },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-600";
    case "Pending":
      return "bg-yellow-100 text-yellow-600";
    case "Uploaded":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFolderDropdownOpen, setIsFolderDropdownOpen] = useState(false);
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("Select");
  const [newFolderName, setNewFolderName] = useState("");
  const [folders, setFolders] = useState(["Work", "Personal", "Original", "Music"]);

  const openModal = (modal: "upload" | "createFolder" | null) => {
    setIsModalOpen(modal === "upload");
    setIsFolderDropdownOpen(false);
    setIsCreateFolderModalOpen(modal === "createFolder");
  };

  const handleSelectFolder = (folder: string) => {
    setSelectedFolder(folder);
    setIsFolderDropdownOpen(false);
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      setFolders((prev) => [...prev, newFolderName.trim()]);
      setSelectedFolder(newFolderName.trim());
      setNewFolderName("");
      openModal(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFC]">
      <Header />

      <main className="flex-1 p-6 pt-4 space-y-5">
        {/* Remaining Minutes */}
        <Card className="border-none shadow-sm bg-gradient-to-r from-[#eaf3ff] via-[#f7f7ff] to-[#fff4ec]">
          <CardContent className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-xs text-gray-500">Your Remaining Minutes are:</p>
              <p className="mt-1 text-2xl font-bold text-[#007BFF] leading-none">320 mins</p>
            </div>
            <div className="rounded-full bg-orange-100 p-2.5 shadow-sm">
              <Clock className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatCard title="Uploaded Files" value="3.4K" icon={Upload} iconColor="bg-green-50 text-green-500" />
          <StatCard title="Total Transcriptions" value="133" icon={FileText} iconColor="bg-pink-50 text-pink-500" />
          <StatCard title="Active Subscription" value="$35/mo" icon={DollarSign} iconColor="bg-orange-50 text-orange-500" />
        </div>

        {/* Upload Box (Minimized Height) */}
        <div
          className="border-2 border-dashed border-gray-200 rounded-xl bg-white py-10 flex flex-col items-center justify-center text-center hover:border-blue-300 transition cursor-pointer shadow-sm"
          onClick={() => openModal("upload")}
        >
          <UploadCloud className="h-9 w-9 text-gray-400 mb-2" />
          <h3 className="text-sm font-semibold text-gray-800">Upload Audio</h3>
          <p className="mt-1 text-xs text-gray-500">Drag & drop or click to upload your audio files</p>
          <Button className="mt-4 bg-[#007BFF] hover:bg-[#0066D1] text-white text-xs font-medium px-5 py-1.5 rounded-md">
            Upload
          </Button>
        </div>

        {/* Recent Transcripts (Compact Version) */}
        <Card className="border-none shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-1">
            <CardTitle className="text-sm font-semibold text-gray-800">Recent Transcripts</CardTitle>
            <Button variant="link" className="text-blue-600 text-xs font-medium hover:underline px-0">View All</Button>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="space-y-1.5">
              {recentTranscripts.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between bg-white border border-gray-100 rounded-lg px-4 py-2 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50">
                      <Music className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{t.name}</p>
                      <p className="text-[11px] text-gray-500">{t.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${getStatusVariant(t.status)}`}>
                      {t.status}
                    </Badge>
                    <span className="text-[11px] text-gray-500">{t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white w-[420px] rounded-xl shadow-lg relative">
            <div className="flex items-center justify-between border-b px-5 py-3">
              <h2 className="text-sm font-semibold text-gray-800">Upload Audio</h2>
              <button onClick={() => openModal(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-5">
              <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center py-8 text-center">
                <UploadCloud className="h-7 w-7 text-gray-400 mb-2" />
                <h3 className="text-sm font-medium text-gray-700">Upload Audio</h3>
                <p className="text-xs text-gray-500 mt-1">Drag & drop or click to upload</p>
              </div>

              {/* Folder Dropdown */}
              <div className="mt-5 relative">
                <label className="text-xs font-medium text-gray-700">Select Folder</label>
                <div
                  onClick={() => {
                    setIsFolderDropdownOpen(!isFolderDropdownOpen);
                    setIsCreateFolderModalOpen(false);
                  }}
                  className="w-full mt-1 border border-gray-200 rounded-md text-xs px-3 py-2 flex items-center justify-between cursor-pointer bg-white"
                >
                  <span>{selectedFolder}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                </div>

                {isFolderDropdownOpen && (
                  <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md z-10">
                    {folders.map((folder) => (
                      <div
                        key={folder}
                        onClick={() => handleSelectFolder(folder)}
                        className="px-3 py-1.5 text-xs hover:bg-gray-100 cursor-pointer"
                      >
                        {folder}
                      </div>
                    ))}
                    <div
                      onClick={() => openModal("createFolder")}
                      className="px-3 py-1.5 text-xs text-blue-600 hover:bg-blue-50 border-t cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="h-3 w-3" /> Create New
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 border-t px-5 py-3 bg-gray-50 rounded-b-xl">
              <Button variant="outline" onClick={() => openModal(null)} className="text-xs">Cancel</Button>
              <Button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-4">Upload</Button>
            </div>
          </div>
        </div>
      )}

      {/* Create Folder Modal */}
      {isCreateFolderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white w-[400px] rounded-xl shadow-lg">
            <div className="flex items-center justify-between border-b px-5 py-3">
              <h2 className="text-sm font-semibold text-gray-800">Create New Folder</h2>
              <button onClick={() => openModal(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-5">
              <label className="text-xs font-medium text-gray-700">Folder Name</label>
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Enter folder name"
                className="w-full mt-1 border border-gray-200 rounded-md text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-end gap-2 border-t px-5 py-3 bg-gray-50 rounded-b-xl">
              <Button variant="outline" onClick={() => openModal(null)} className="text-xs">Cancel</Button>
              <Button onClick={handleCreateFolder} className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-4">
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
