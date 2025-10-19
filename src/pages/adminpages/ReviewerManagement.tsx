import React, { useState, useEffect } from "react";
import {
  Users,
  Filter,
  ArrowUpDown,
  MoreVertical,
  X,
  AlertCircle,
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";

export default function ReviewerManagement() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedReviewer, setSelectedReviewer] = useState(null);
  const [reviewers, setReviewers] = useState([]);

  // ✅ Disable background scroll when modal open
  useEffect(() => {
    document.body.style.overflow =
      isInviteModalOpen || isProfileModalOpen ? "hidden" : "auto";
  }, [isInviteModalOpen, isProfileModalOpen]);

  const handleInvite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.currentTarget as any).name.value.trim();
    const email = (e.currentTarget as any).email.value.trim();
    const role = (e.currentTarget as any).role.value;

    if (!name || !email) {
      alert("Please fill all fields.");
      return;
    }

    const newReviewer = {
      id: Date.now(),
      fullName: name,
      email,
      assignedAudios: 0,
      completedAudios: 0,
      lastActive: "Just now",
      status: "Active",
      role,
    };

    setReviewers((prev) => [...prev, newReviewer]);
    setIsInviteModalOpen(false);
  };

  const openProfileModal = (reviewer: any) => {
    setSelectedReviewer(reviewer);
    setIsProfileModalOpen(true);
  };

  const handleDelete = () => {
    if (!selectedReviewer) return;
    const confirmed = window.confirm(
      `Are you sure you want to delete ${selectedReviewer.fullName}?`
    );
    if (confirmed) {
      setReviewers((prev) => prev.filter((r) => r.id !== selectedReviewer.id));
      setIsProfileModalOpen(false);
      setSelectedReviewer(null);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      {/* ✅ Sidebar */}
      <Sidebar />

      {/* ✅ Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* ✅ Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Reviewer Management
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Manage and invite reviewers efficiently.
              </p>
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} /> Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowUpDown size={16} /> Sort
              </Button>
              <Button
                onClick={() => setIsInviteModalOpen(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Users size={16} /> Invite Reviewer
              </Button>
            </div>
          </div>

          {/* ✅ Reviewer Table / Empty */}
          {reviewers.length === 0 ? (
            <Card className="flex items-center justify-center h-[60vh] border border-gray-200 shadow-sm">
              <CardContent className="text-gray-500 text-center">
                <AlertCircle
                  size={64}
                  strokeWidth={1.5}
                  className="text-gray-300 mb-3 mx-auto"
                />
                <p className="text-sm font-medium">No reviewers to show!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b gap-2">
                <h3 className="font-semibold text-sm sm:text-base">
                  Reviewer List
                </h3>
                <span className="text-xs sm:text-sm text-gray-500">
                  Total: {reviewers.length}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-xs sm:text-sm text-left border-collapse">
                  <thead className="bg-gray-50 text-gray-600 uppercase">
                    <tr>
                      <th className="p-3 sm:p-4">#</th>
                      <th className="p-3 sm:p-4">Full Name</th>
                      <th className="p-3 sm:p-4">Email</th>
                      <th className="p-3 sm:p-4 text-center">
                        Assigned Audios
                      </th>
                      <th className="p-3 sm:p-4 text-center">
                        Completed Audios
                      </th>
                      <th className="p-3 sm:p-4">Last Active</th>
                      <th className="p-3 sm:p-4">Status</th>
                      <th className="p-3 sm:p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {reviewers.map((rev, i) => (
                      <tr
                        key={rev.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-3 sm:p-4">{i + 1}</td>
                        <td className="p-3 sm:p-4">{rev.fullName}</td>
                        <td className="p-3 sm:p-4">{rev.email}</td>
                        <td className="p-3 sm:p-4 text-center">
                          {rev.assignedAudios}
                        </td>
                        <td className="p-3 sm:p-4 text-center">
                          {rev.completedAudios}
                        </td>
                        <td className="p-3 sm:p-4">{rev.lastActive}</td>
                        <td className="p-3 sm:p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              rev.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : rev.status === "Paused"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {rev.status}
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-right">
                          <button
                            onClick={() => openProfileModal(rev)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ✅ Invite Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[9999] p-3 sm:p-6">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg p-5 relative">
            <button
              onClick={() => setIsInviteModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-5 text-center">
              Invite New Reviewer
            </h2>

            <form onSubmit={handleInvite} className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter full name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Select Role
                </label>
                <select
                  name="role"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option value="Reviewer">Reviewer</option>
                  <option value="Editor">Editor</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsInviteModalOpen(false)}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Invite
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Profile Modal */}
      {isProfileModalOpen && selectedReviewer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[9999] p-3 sm:p-6">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-6 relative">
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Reviewer Profile
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                ["Full Name", selectedReviewer.fullName],
                ["Email", selectedReviewer.email],
                ["Status", selectedReviewer.status],
                ["Assigned Audios", selectedReviewer.assignedAudios],
                ["Completed Audios", selectedReviewer.completedAudios],
                ["Last Active", selectedReviewer.lastActive],
              ].map(([label, value], i) => (
                <div key={i} className="border rounded-lg p-3">
                  <p className="text-gray-500 text-xs">{label}</p>
                  <p
                    className={`font-medium ${
                      label === "Status"
                        ? selectedReviewer.status === "Active"
                          ? "text-green-600"
                          : selectedReviewer.status === "Paused"
                          ? "text-yellow-600"
                          : "text-red-600"
                        : ""
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 pt-5">
              <Button
                variant="outline"
                onClick={() => setIsProfileModalOpen(false)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Button
                onClick={handleDelete}
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
