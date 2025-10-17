import React, { useState } from "react";
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

export default function ReviewerManagement() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedReviewer, setSelectedReviewer] = useState(null);
  const [reviewers, setReviewers] = useState([]);

  // ✅ Invite Reviewer
  const handleInvite = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const role = e.target.role.value;

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

  const openProfileModal = (reviewer) => {
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
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {/* ✅ Sidebar */}
      <Sidebar />

      {/* ✅ Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-semibold mt-1">Reviewer Management</h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage and invite reviewers, view their profiles, and track audio
              assignments efficiently.
            </p>
          </div>

          <div className="flex gap-2">
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

        {/* Reviewer Table or Empty State */}
        {reviewers.length === 0 ? (
          <Card className="flex items-center justify-center h-[70vh] border border-gray-200 shadow-sm">
            <CardContent className="flex flex-col items-center justify-center text-gray-500">
              <AlertCircle
                size={64}
                strokeWidth={1.5}
                className="text-gray-300 mb-3"
              />
              <p className="text-sm font-medium">No reviewers to show!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Reviewer List</h3>
              <span className="text-sm text-gray-500">
                Total: {reviewers.length}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="p-4">#</th>
                    <th className="p-4">Full Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Assigned Audios</th>
                    <th className="p-4">Completed Audios</th>
                    <th className="p-4">Last Active</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {reviewers.map((rev, index) => (
                    <tr
                      key={rev.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{rev.fullName}</td>
                      <td className="p-4">{rev.email}</td>
                      <td className="p-4">{rev.assignedAudios}</td>
                      <td className="p-4">{rev.completedAudios}</td>
                      <td className="p-4">{rev.lastActive}</td>
                      <td className="p-4">
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
                      <td className="p-4 text-right">
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
      </div>

      {/* ✅ Invite Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              onClick={() => setIsInviteModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-5">
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  Select Role
                </label>
                <select
                  name="role"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="Reviewer">Reviewer</option>
                  <option value="Editor">Editor</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsInviteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Invite
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Profile Modal */}
      {isProfileModalOpen && selectedReviewer && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-lg p-6 relative">
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Reviewer Profile
            </h2>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="border rounded-lg p-3">
                <p className="text-gray-500 text-xs">Full Name</p>
                <p className="font-medium">{selectedReviewer.fullName}</p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="text-gray-500 text-xs">Email</p>
                <p className="font-medium">{selectedReviewer.email}</p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="text-gray-500 text-xs">Status</p>
                <p
                  className={`font-medium ${
                    selectedReviewer.status === "Active"
                      ? "text-green-600"
                      : selectedReviewer.status === "Paused"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedReviewer.status}
                </p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="text-gray-500 text-xs">Assigned Audios</p>
                <p className="font-medium">{selectedReviewer.assignedAudios}</p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="text-gray-500 text-xs">Completed Audios</p>
                <p className="font-medium">{selectedReviewer.completedAudios}</p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="text-gray-500 text-xs">Last Active</p>
                <p className="font-medium">{selectedReviewer.lastActive}</p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-5">
              <Button
                variant="outline"
                onClick={() => setIsProfileModalOpen(false)}
              >
                Close
              </Button>
              <Button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white"
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
