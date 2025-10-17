import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Filter,
  ArrowUpDown,
  MessageSquare,
  UserCircle,
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

interface Feedback {
  id: number;
  author: string;
  title: string;
  message: string;
  date: string;
  status: "Resolved" | "Unresolved";
}

const AllFeedbacks: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [activeTab, setActiveTab] = useState<"All" | "Resolved" | "Unresolved">(
    "All"
  );

  const loadDummyData = () => {
    setFeedbacks([
      {
        id: 1,
        author: "Admin Sara",
        title: "Interview Recording 001",
        message:
          "Great work on this transcription! The accuracy is excellent. Just a small note – please ensure speaker labels are consistent throughout.",
        date: "10/13/2025, 2:30:09 PM",
        status: "Resolved",
      },
      {
        id: 2,
        author: "Admin Sara",
        title: "Interview Recording 001",
        message:
          "Great work on this transcription! The accuracy is excellent. Just a small note – please ensure speaker labels are consistent throughout.",
        date: "10/13/2025, 2:30:09 PM",
        status: "Resolved",
      },
      {
        id: 3,
        author: "Admin Sara",
        title: "Interview Recording 001",
        message:
          "Great work on this transcription! The accuracy is excellent. Just a small note – please ensure speaker labels are consistent throughout.",
        date: "10/13/2025, 2:30:09 PM",
        status: "Resolved",
      },
    ]);
  };

  const filteredFeedbacks =
    activeTab === "All"
      ? feedbacks
      : feedbacks.filter((f) => f.status === activeTab);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            All Feedbacks
          </h2>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-1 text-sm text-gray-700"
            >
              <Filter className="w-4 h-4" />
              Filter
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-1 text-sm text-gray-700"
            >
              <ArrowUpDown className="w-4 h-4" />
              Sort
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 border-b border-gray-200">
          {["All", "Resolved", "Unresolved"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Load Dummy Data Button */}
        <div className="mb-4">
          <Button onClick={loadDummyData} className="bg-blue-600 text-white">
            Load Dummy Data
          </Button>
        </div>

        {/* Feedback List or Empty State */}
        {filteredFeedbacks.length === 0 ? (
          <Card className="w-full h-[70vh] flex items-center justify-center bg-white shadow-sm">
            <CardContent className="text-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <MessageSquare className="w-12 h-12 text-gray-300" />
                <p className="text-gray-500 font-medium">
                  No Feedbacks to show!
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredFeedbacks.map((feedback) => (
              <Card
                key={feedback.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <UserCircle className="w-8 h-8 text-blue-500" />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {feedback.author}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {feedback.title}
                        </p>
                        <p className="mt-2 text-gray-700 text-sm leading-snug">
                          “{feedback.message}”
                        </p>
                        <p className="mt-2 text-xs text-gray-400">
                          {feedback.date}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        feedback.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {feedback.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFeedbacks;
