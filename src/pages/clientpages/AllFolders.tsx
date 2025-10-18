import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Folder, Filter, ArrowUpDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function AllFolders() {
  const [folders, setFolders] = useState<{ id: number; name: string; date: string }[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const navigate = useNavigate();

  const handleCreateFolder = () => {
    if (folderName.trim() === "") return;
    const newFolder = {
      id: Date.now(),
      name: folderName,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    setFolders((prev) => [...prev, newFolder]);
    setFolderName("");
    setIsCreateOpen(false);
  };

  // ✅ Blur background and prevent scroll when modal is open
  useEffect(() => {
    if (isCreateOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCreateOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFC] relative">
      <Header />

      {/* ✅ Apply background blur when modal open */}
      <div className={`${isCreateOpen ? "blur-sm pointer-events-none select-none" : ""}`}>
        <main className="flex-1 p-6 space-y-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <h1 className="text-[20px] font-semibold text-gray-900">All Folders</h1>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-600 hover:text-gray-900"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-600 hover:text-gray-900"
              >
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort
              </Button>
              <Button
                size="sm"
                className="bg-[#007BFF] hover:bg-[#0066D1] text-white"
                onClick={() => setIsCreateOpen(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create New
              </Button>
            </div>
          </div>

          {/* Folder Container */}
          <Card className="bg-white border border-gray-100 rounded-xl shadow-none">
            <CardContent className="p-5">
              {folders.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-28 text-center">
                  <Folder className="h-16 w-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 text-[15px] font-medium">
                    No Folders to show!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {folders.map((folder) => (
                    <div
                      key={folder.id}
                    onClick={() =>
  navigate(`/client/audio-files/folder/${folder.id}`, { state: folder })
}

                      className="cursor-pointer border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-all"
                    >
                      <Folder className="h-8 w-8 text-yellow-500" />
                      <div>
                        <p className="font-semibold text-gray-800 text-[15px]">
                          {folder.name}
                        </p>
                        <p className="text-[13px] text-gray-500">{folder.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>

      {/* ✅ Custom Modal with blur background */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm px-3">
          <div className="bg-white w-full max-w-[400px] rounded-xl shadow-lg relative animate-fadeIn">
            <div className="flex items-center justify-between border-b px-5 py-3">
              <h2 className="text-sm font-semibold text-gray-800">Create New Folder</h2>
              <button
                onClick={() => setIsCreateOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-5 space-y-3">
              <Label htmlFor="folder-name" className="text-xs font-medium text-gray-700">
                Folder Name
              </Label>
              <Input
                id="folder-name"
                placeholder="Enter folder name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                className="border-gray-200 focus-visible:ring-[#007BFF]"
              />
            </div>

            <div className="flex justify-end gap-2 border-t px-5 py-3 bg-gray-50 rounded-b-xl">
              <Button
                variant="outline"
                onClick={() => setIsCreateOpen(false)}
                className="text-xs text-gray-600"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateFolder}
                className="text-xs bg-[#007BFF] hover:bg-[#0066D1] text-white px-4"
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
