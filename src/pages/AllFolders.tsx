import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Folder, Filter, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
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

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFC]">
      <Header breadcrumb="Audios" />

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
                    onClick={() => navigate(`/audio-files/folder/${folder.id}`)}
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

      {/* Create Folder Dialog */}
      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent className="sm:max-w-md rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Create New Folder
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="folder-name" className="text-sm font-medium text-gray-700">
                Folder Name
              </Label>
              <Input
                id="folder-name"
                placeholder="Folder Name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                className="border-gray-200 focus-visible:ring-[#007BFF]"
              />
            </div>
          </div>
          <DialogFooter className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setIsCreateOpen(false)}
              className="border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateFolder}
              className="bg-[#007BFF] hover:bg-[#0066D1] text-white"
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
